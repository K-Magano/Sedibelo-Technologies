<script setup>
import { computed, ref, defineProps } from 'vue';

const toggleOn = ref(false);

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});


const emit = defineEmits(['filter']);

const designations = computed(() => {
   return [...new Set(props.items.map(item => item.designation))];

   
});
const filter =(e)=> {
    emit('filter', e.target.value)
}
</script>

<template>
    <div>
        <button @click="toggleOn = !toggleOn">Filter</button>
        <div v-if="toggleOn" class="button">
            <h6>Designations</h6>
            <ul>
                <li v-for="(designation, index) in designations" :key="index">
                    <input :id="`filter_option_${index}`"  @change="filter"   type="checkbox" :value="designation"/>
                    <label :for="`filter_option_${index}`">{{ designation }}</label>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
.button{
    position: absolute;
}
</style>