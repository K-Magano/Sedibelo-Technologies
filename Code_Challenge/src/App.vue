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
    // Optionally display an error message to the user
    
  }
});


</script>

<template>
  <div class="container">
    <header >
      <img alt="Sedibelo logo" class="logo"  src="../src/assets/Color_Logo.png" width="450" height="150" />
    </header>
    <div class="wrapper">
      <HelloWorld msg="My Data Visualization App" />
    </div>
    <nav class="nav">
      <router-link to="/pie-chart" class="nav-link">Pie Chart</router-link>
      <router-link to="/bar-chart" class="nav-link">Bar Chart</router-link>
      <router-link to="/data-table" class="nav-link">Data Table</router-link>
    </nav>

    <RouterView />
    <main class="main">
      <!-- <template v-if="items.length >0"> -->
        <DataTable :items="items" />
    
      <!-- </template> -->
    </main>
  </div>
  
</template>

<style scoped>

/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

/* Header */
header {
  display: flex;
  justify-content: center;
  padding: 2rem;
  border-radius: 5px;
  background-color: #FEAE96;
}

.logo {
  width: auto; 
  /* Adjust height as needed */
}

/* Navigation */
.nav {
  display: flex;
  justify-content: space-around; 
  padding: 1rem 0;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: #FE979C;
}

.nav-link {
  color: #fff; 
  text-decoration: none;
  font-size: 1.5rem; 
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
}

.nav-link:hover,
.nav-link.active {
  background-color: #013237; /* Darker color on hover/active */
}

/* Main content */
.main {
  flex: 1; /* Flexible height to fill remaining space */
  padding: 1rem 2rem;
  background-color: #fff; /* White background */
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .container {
    flex-direction: colum; /* Reverse order on smaller screens */
  }

  header,
  .nav {
    padding: 0.5rem 1rem;
  }

  .nav-link {
    font-size: 1.5rem; 
  }
}
</style>
