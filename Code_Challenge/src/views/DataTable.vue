
<script setup>
import SearchBar from "../components/SearchBar.vue";
import Dropdown  from "../components/Dropdown.vue";
import { computed, ref } from "vue";



const searchFilter = ref('');
const designationFilter = ref([])

const currentPage = ref(1);
const itemsPerPage = 20; 

const totalItems = computed(() => searchedItems.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));


const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return searchedItems.value.slice(startIndex, endIndex);
});


const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToPage = (pageNumber) => {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
  }
};


const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const searchedItems = computed(() => {
 if (searchFilter.value !== '') {
  return props.items.filter(item => 
  item.name.includes(searchFilter.value) || 
  item.surname.includes(searchFilter.value) || 
  item.department.includes(searchFilter.value)
  );
 }
  return props.items;
})

if (designationFilter.value.length)
{items = items.filter(item => 
  designationFilter.value.includes(
    item.designation))
}

const handleSearch = (search) => {
  searchFilter.value = search;
}

const handleFilter = (filter) => {
  if (designationFilter.value.includes(filter)){
    designationFilter.value.splice(designationFilter.value.index(filter), 1);
  }
 return designationFilter.value.push(filter);

}
;
</script>

<template>

  
  <div class='wrapper'>
 

    <div class="filters-container">
      <SearchBar @search="handleSearch"/>
      <Dropdown :items="items" @filter="handleFilter" />
    </div>

    <table>
      <caption>Data Table</caption>
     
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Designation</th>
          <th>Department</th>
         </tr>
   
   
        <tr v-for="item in paginatedItems" :key="item.name + '-' + item.surname">
          <td data-cell="name">{{ item.name}}</td> 
          <td data-cell="surname">{{ item.surname }}</td>
          <td data-cell="designation">{{ item.designation }}</td>
          <td data-cell="department">{{ item.department }}</td>
          
        </tr>
     
    </table>

   
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span class="bSpan">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    
   
  </div>
  
</template>


<style scoped>
.wrapper {
 width: min(900px, 100% - 4rem);
 margin-inline: auto;
 
 
}

table {
width: 100%;
 background: #333333;
 padding: 1rem;
 border-collapse: collapse;
 color:antiquewhite;
 
}


caption,
 th,
 td {
padding : 1rem;
}


th{
  text-align: left;
 
}

caption{
  background: #e09a1f;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

th{

  background: #447778;
}

tr:nth-of-type(2n){
  background: #494c4f;
}

.filters-container {
  display: flex; 
  justify-content: space-between; 
  flex-wrap: wrap; 
  background: #013237;
  padding: 3%;
  
 
}

@media (max-width: 768px) {
  .filters-container {
    flex-direction: row;
    background: #447778;
    
  }
}

@media (max-width: 425px) {
  .filters-container {
    background: pink;
       
  }
}

h1 {
  margin-bottom: 1rem;
}

.pagination-controls button{
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

}
.pagination-controls button:hover,
.pagination-controls button.active {
  background-color: #013237; 
}

.bSpan{
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem
}

@media (max-width: 650px) {
  th{
    display: none;
  }

  td{
    display: grid;
    grid-template-columns: 15ch auto;
    padding: 0.75rem 1rem;
    width: 100%;
  }

 td:first-child{
  padding-top: 2rem;
 }

  td:last-child{
    padding-bottom: 2rem;
  }

  td::before{
   content:attr(data-cell) ": ";
   font-weight: 700;
   text-transform: capitalize;
  }
  
  
}

</style>
