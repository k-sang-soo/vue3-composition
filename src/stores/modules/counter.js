import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  console.log('count', count.value)
  function increment() {
    console.log('증가')
    count.value++
    console.log('count', count.value)
  }

  function reduction() {
    console.log('감소')
    count.value--
  }

  function reset() {
    console.log('초기화')
    count.value = 0
  }

  return { count, increment, reduction, reset }
})
