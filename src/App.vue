<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-gray-200 min-h-screen w-[100%] scroll-smooth relative">
    <Navbar />
    <RouterView />
  </div>
</template>

<style></style>
