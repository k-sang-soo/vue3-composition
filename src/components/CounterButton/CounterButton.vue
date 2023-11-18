<template>
  <div class="button-group">
    <div>
      <button type="button" @click="increment">증가</button>
    </div>
    <div>
      <button type="button" @click="reduction">감소</button>
    </div>
    <div>
      <button type="button" @click="reset">초기화</button>
    </div>
  </div>
</template>

<script setup>
import useCounterStore from '@/stores/modules/counter';

const counterStore = useCounterStore();
const { increment, reduction, reset } = counterStore;
</script>

<style scoped>
.button-group {
  display: flex;
  gap: 0 1.2rem;
}
</style>
