<template>
  <div>
    <Header />
    <h1 class="title">Default Layout</h1>
    <div class="container">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
</script>

<style scoped>
.container {
  max-width: 1512px;
  margin: 0 auto;
  padding: 24px;
}

.title {
  text-align: center;
}
</style>
