<template>
  <div>
    <h2>This is an Home page</h2>
    <hr />
    <section class="section">
      <h3>composable 사용 예시</h3>
      <p>window width: {{ windowWidth }}</p>
      <p>window height: {{ windowHeight }}</p>
    </section>

    <hr />
    <section class="section">
      <h3>전역변수(Pinia) 사용 예시</h3>
      <p>counter : {{ count }}</p>
      <CounterButton />
    </section>
    <hr />
    <section class="section">
      <h3>defineEmits 사용 예시</h3>
      <HomeButton @clicked="handleClickHomeBtn" />
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import CounterButton from '@/components/CounterButton/CounterButton.vue';
import useWindowSizes from '@/composables/useWindowSizes';
import HomeButton from '@/containers/home/HomeButton/HomeButton.vue';
import useCounterStore from '@/stores/modules/counter';

const { windowWidth, windowHeight } = useWindowSizes();
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);

const handleClickHomeBtn = (msg) => {
  console.log('msg', msg);
};
</script>

<style scoped>
.section {
  padding: 2rem 0;
}

.section h3 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
}
</style>
