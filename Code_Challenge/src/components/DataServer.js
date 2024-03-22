// DataService.js

import { ref } from 'vue';

const items = ref([]);

export const fetchData = async () => {
    try {
      const response = await fetch('../database/users.json');
      const data = await response.json();
      console.log('Fetched data:', data); // Log fetched data
      items.value = data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Optionally handle error
    }
  };

export { items };
