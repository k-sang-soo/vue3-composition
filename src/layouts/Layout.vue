<template>
  <component :is="layoutComponent">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AnotherLayout from '@/layouts/AnotherLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layoutComponent = computed(() => {
  const layoutName = route.meta.layout || 'DefaultLayout'
  if (layoutName === 'DefaultLayout') {
    return DefaultLayout
  } else {
    return AnotherLayout
  }
})
</script>

<style scoped></style>
