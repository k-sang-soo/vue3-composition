<template>
  <div>
    <h2>This is an about page</h2>
    <p>counter : {{ count }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useCounterStore from '@/stores/modules/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>
