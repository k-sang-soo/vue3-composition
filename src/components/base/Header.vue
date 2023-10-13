<template>
  <header class="header">
    <p class="title">Header!</p>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/notice">Notice</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  padding: 20px;
  border-bottom: 1px solid #333;
}

.title {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
}

.nav {
  display: flex;
  gap: 0 14px;
  font-size: 20px;
  justify-content: center;
}
</style>
