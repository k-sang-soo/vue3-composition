<template>
  <div>
    <Header />
    <h1 class="title">Default Layout</h1>
    <main class="container">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/base/Footer/Footer.vue';
import Header from '@/components/base/Header/Header.vue';
</script>

<style scoped>
.title {
  font-size: 2.6rem;
  text-align: center;
}
</style>
