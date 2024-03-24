<template>
  <div class="bar-chart-container">
    <h1>Number of App Installs by Year</h1>
   
    <canvas id="myChart" width="350" height="350" class="myCanva"></canvas>
  </div>
</template>

<script >
import Chart from 'chart.js/auto'
export default {
mounted() {
  const ctx = document.getElementById('myChart');
  fetch('../database/barGraph.json') 
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item.month);
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
          type: 'bar',
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
  .bar-chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(900px, 100% - 4rem);
    margin-inline: auto;
  
  }
  
  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    .bar-chart-container{
      flex-direction: columns;
      height:300px;
      width: 100%;
      
    }
    h1 {
      color: #447778;
      font-size: 18px;
    }

    
  }
  
  </style>
