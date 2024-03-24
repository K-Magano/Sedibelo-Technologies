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
  width: 450px; /* Set the width of the logo */
  height: 150px; 
}
.logo-container {
  text-align: center; /* Align the logo horizontally at the center */
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
  width: 70%;
  

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
