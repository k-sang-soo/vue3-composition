<template>
  <main>
    <h2>This is an Home page</h2>
    <p>window width: {{ windowWidth }}</p>
    <p>window height: {{ windowHeight }}</p>
    <p>counter : {{ count }}</p>
    <CounterButton />
  </main>
</template>

<script setup>
import { useWindowSizes } from '@/composables/use-window-sizes'
import CounterButton from '@/components/CounterButton.vue'
import { useCounterStore } from '@/stores/modules/counter'
import { storeToRefs } from 'pinia'

const { windowWidth, windowHeight } = useWindowSizes()
const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>
