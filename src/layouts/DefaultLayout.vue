<template>
  <div>
    <Header />
    <h1 class="title">Default Layout</h1>
    <main class="container">
      <slot></slot>
    </main>
    <UIFooter />
  </div>
</template>

<script setup>
import UIFooter from '@/components/base/UIFooter/UIFooter.vue';
import Header from '@/components/base/UIHeader/UIHeader.vue';
</script>

<style scoped>
.title {
  font-size: 2.6rem;
  text-align: center;
}
</style>
