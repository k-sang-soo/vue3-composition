<template>
  <li class="item">
    <p>{{ idRef }}</p>
    <b>{{ titleRef }} </b>
  </li>
</template>

<script setup>
// defineProps({
//   id: {
//     type: Number,
//     default: 0
//   },
//   title: {
//     type: String,
//     default: ''
//   }
// })

//  ⬆️ or ⬇️
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: '',
  },
});

const idRef = computed(() => props.id);
const titleRef = computed(() => props.title);
</script>

<style scoped>
.item {
  padding: 2rem;
  border: 1px solid #000;
}
</style>
