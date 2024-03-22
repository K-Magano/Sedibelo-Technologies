<template>
  <div class="pie-chart-container">
    <h1>Number of App Installs by Year</h1>
    <p>Hello</p>
    <canvas id="myChart" width="400" height="400"></canvas>
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
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
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
.catch(error => console.error('nO DATA FOUND'))

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
