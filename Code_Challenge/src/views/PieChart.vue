<template>
  <div class="pie-chart-container">
    <h1>Number of App Installs by Year</h1>
    
    <canvas id="myChart" width="400" height="350"></canvas>
  </div>
</template>

<script >
import Chart from 'chart.js/auto'
export default {
mounted() {
  const ctx = document.getElementById('myChart');
  fetch('../database/pieChart.json') 
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item.year);
        const datasets = [{
          label: '# of Installs',
          data: data.map(item => item.numInstalls),
          backgroundColor: [
            '#447778',
            '#e09a1f',
            '#7a7a7a',
            '#0c0c0c',
            '#a87b37',
          ],
          borderColor: [
            '#447778',
            '#e09a1f',
            '#7a7a7a',
            '#0c0c0c',
            '#a87b37',
          ],
          borderWidth: 1,
        }];
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels,
            datasets,
          },
      options: {
        scales: {
            y: {
                beginAtZero: true
            },
        }
    },
});
})
.catch(error => console.error('No data found'))

},

};
</script>


  <style scoped>
  .pie-chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1 {
    margin-bottom: 1rem;
  }


  </style>
