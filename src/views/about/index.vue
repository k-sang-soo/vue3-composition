<template>
  <div>
    <h2>This is an about page</h2>
    <p>counter : {{ count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/modules/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>

<style scoped></style>
