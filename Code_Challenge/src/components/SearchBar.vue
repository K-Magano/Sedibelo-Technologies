<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['search']);

const search = (e) => {
  emit('search', e.target.value)
};


</script>

<template>
    <form>
        <label>Search</label>
        <div>
            <input type="text" @input="search" placeholder="Name, Surname or Department"/>
        </div>
    </form>
</template>