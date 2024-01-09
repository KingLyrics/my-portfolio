<template>
  <button @click="scrollToTop" v-show="isVisible" class="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full">
    <Up />
  </button>
</template>


<script setup>
import Up from './icons/Up.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 20;
};


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})




</script>