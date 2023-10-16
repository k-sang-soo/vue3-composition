<!-- 참고 : https://vuejs.org/guide/components/props.html#prop-passing-details -->
<template>
  <ul class="list">
    <template v-for="data in dummyData" :key="data.id">
      <Item v-bind="data" />
    </template>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

import Item from '@/containers/notice/Item/Item.vue';

const dummyData = ref([
  {
    id: 0,
    title: '리스트1',
  },
  {
    id: 1,
    title: '리스트2',
  },
]);
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>
