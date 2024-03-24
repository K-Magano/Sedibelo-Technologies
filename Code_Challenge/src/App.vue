<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DataTable from './views/DataTable.vue';
import { onMounted, ref } from 'vue';


const items = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('../database/users.json');
    items.value = await response.json();
   
  } catch (error) {
    console.error('Error fetching data:', error);
       
  }
});


</script>

<template>
  <div class="container">
    <header >
      <div class="logo-container">
        <img alt="Sedibelo logo" class="logo"  src="../src/assets/Color_Logo.png" width="450" height="150" />
      </div>
      
    </header>
    <div class="wrapper">
      <HelloWorld msg=" Data Visualization App" />
    </div>
    <nav class="nav">
      <router-link to="/pie-chart" class="nav-link">Pie Chart</router-link>
      <router-link to="/bar-chart" class="nav-link">Bar Chart</router-link>
      <router-link to="/data-table" class="nav-link">Data Table</router-link>
    </nav>

    <main class="main">
      <template v-if="$route.path === '/data-table'">
        <DataTable :items="items" />
      </template>
    <RouterView />
    </main>
  </div>
  
</template>

<style scoped>
/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  overflow: hidden;
}

/* Header */
header {
  border-radius: 5px;
  background-color: #FEAE96;
  background-image: url('../src/assets/asset 10.jpeg');
  background-size: cover;   
  background-position: center;
  justify-content: center;
  align-items: center;
  width: 90%;
  overflow: hidden;
  height: 200px; 
  
}

.logo {
  width: 450px; 
  height: 150px; 
}
.logo-container {
  text-align: center; 
}


/* Navigation */
.nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  margin: 0.5rem;
  border-radius: 5px;
  width: 70%;
 
}

.nav-link {
  color: #333333;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
}

.nav-link:hover,
.nav-link.active {
  background-color: #013237; 
  color:#a87b37 
}


.main {
  justify-content: space-around;
  padding: 1rem 0;
  margin: 0.5rem;
  border-radius: 5px;
  width: 100%;
 
}

/*med mobile*/

@media (max-width: 375px) {
  .container{
    flex-direction: column;
    width: 100%;
    
    
  }

 .wrapper{
    color: #447778;
    font-size: 14px;
  }
  
  .myChart{
    height:300px;
  }

  .logo {
    width: 280px; 
    height: 120px; 
  }
  .logo-container {
    text-align: center; 
  }

  header {
    border-radius: 10px;
    background-color: #FEAE96;
    background-image: url('../src/assets/asset 10.jpeg');
    background-size: cover;   
    width: 100%;
    overflow: hidden;
    height: 150px; 
    
  }

  .nav {
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    width: 100%;
    background: #a87b37
  }
  
  .nav-link {
    color: #333333;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    width: 100%;
    transition: background-color 0.2s ease-in-out;
    
  }
  
  .nav-link:hover,
  .nav-link.active {
    background-color: #013237; 
    color:#a87b37 
  }

  .main {
     width: 100%;
   
  }
  
}



/*mobile view*/

@media (max-width: 320px) {
  .container{
    flex-direction: column;
    width: 100%;
    
  }
 .wrapper{
    color: #447778;
    font-size: 14px;
  }
  
  .myChart{
    height:300px;
  }

  .logo {
    width: 280px; 
    height: 120px; 
  }
  .logo-container {
    text-align: center; 
  }

  header {
    border-radius: 10px;
    background-color: #FEAE96;
    background-image: url('../src/assets/asset 10.jpeg');
    background-size: cover;   
    width: 100%;
    overflow: hidden;
    height: 150px; 
    
  }

  .nav {
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    width: 100%;
    background: #a87b37
  }
  
  .nav-link {
    color: #333333;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    width: 100%;
    transition: background-color 0.2s ease-in-out;
    
  }
  
  .nav-link:hover,
  .nav-link.active {
    background-color: #013237; 
    color:#a87b37 
  }
}


@media (max-width: 768px) {
  .container {
    flex-direction: column; 
  }

  header,
  .nav {
    padding: 0.5rem 1rem;
  }

  .nav-link {
    font-size: 1rem; 
  }
}


</style>
