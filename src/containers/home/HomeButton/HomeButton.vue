<template>
  <button type="button" @click="emitClickEvent">Click!</button>
</template>

<script setup>
const emit = defineEmits(['clicked']);
const emitClickEvent = () => {
  emit('clicked', '버튼 클릭!');
};
</script>

<style scoped></style>
