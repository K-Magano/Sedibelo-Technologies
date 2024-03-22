<script setup>
import SearchBar from "../components/SearchBar.vue";
import Dropdown  from "../components/Dropdown.vue";
import { computed, ref } from "vue";


const searchFilter = ref('');
const designationFilter = ref([])

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
if (designationFilter.value.length){items = items.filter(item => designationFilter.value.includes(item.designation))
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
</script>

<template>
  <div>
    <h1>Data Table</h1>
<div class="filters">
  <SearchBar @search="handleSearch"/>
  <Dropdown :items="items" @filter="handleFilter" />
</div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Designation</th>
          <th>Department</th>
          <th><span>Actions</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in searchedItems" :key="item.name + '-' + item.surname">
          <td>{{ item.name}}</td> 
                    <td>{{ item.surname }}</td>
          <td>{{ item.designation }}</td>
          <td>{{ item.department }}</td>
          <td class="actions">
            <a href="#">Details</a>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination-controls">
      </div>
   
  </div>
  
</template>

<style scoped>



table {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: purple;
  margin-top: 10%;
  
}

th{
    font-weight: bold;
    background-color: pink;
}

h1 {
  margin-bottom: 1rem;
}

filters {
  background-color: aquamarine;
  flex-direction: row;
}


</style>
