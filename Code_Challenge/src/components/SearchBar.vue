<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['search']);

const search = (e) => {
  emit('search', e.target.value)
};


</script>

<template>
    <form class="searchForm">
        <div>
            <input type="text" @input="search" placeholder="Name, Surname or Department" class="searchInput"/>
        </div>
    </form>
</template>

<style scoped>

/*.searchForm {
    border-radius: 5;
    margin: 5%;
    
}*/

.searchInput{
    width: 15rem;
    height: 2.5rem;
    border: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
   
}

@media (max-width: 320px){

    .searchInput {
      display: flex; 
      justify-content: space-between; 
      flex-wrap: wrap; 
      padding: 2%;
      margin: 1%;
      width: 140%;
      
        
    }
  }

</style>