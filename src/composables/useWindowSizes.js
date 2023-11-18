import { onMounted, onUnmounted, ref } from 'vue';

export default function useWindowSizes() {
  const windowWidth = ref(window.innerWidth);
  const windowHeight = ref(window.innerHeight);

  function handleResizeEvent() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  }

  onMounted(() => window.addEventListener('resize', handleResizeEvent));
  onUnmounted(() => window.removeEventListener('resize', handleResizeEvent));

  return { windowWidth, windowHeight };
}
