<template>
  <nav class="flex items-center justify-between px-4 py-4 font-Roboto ">
    <div class="flex items-center space-x-3">
      <img class="h-10 w-10" :src="Code" />
      <RouterLink to="/" class="text-2xl lg:text-4xl font-bold hover:text-orange-400 transition-all ease-linear">Edeme
        Ekomobong</RouterLink>
      <span
        class="hidden lg:block text-sm mt-2 lg:text-base 2xl:text-xl hover:text-2xl transition-all ease-in-out cursor-pointer">Web
        Developer</span>
    </div>
    <div class="hidden lg:block space-x-4 pr-6 text-xl">
      <RouterLink to="/resume" class="border-r border-black pr-3 hover:text-orange transition-colors ease-in-out">
        Resume
      </RouterLink>
      <RouterLink to="/projects" class="pr-3 hover:text-orange transition-colors ease-in-out">
        Projects
      </RouterLink>

    </div>
    <button v-if="!isShowing" class="lg:hidden pr-2" @click="handleDrop">
      <Bar />
    </button>
    <button v-else @click="closeDrop" class="z-50">
      <Close />
    </button>
  </nav>
  <transition name="slide">
    <div v-show="isShowing" class="bg-gray-200 min-h-screen z-10 absolute w-full top-0 dropdownContent">
      <div class="text-center flex justify-center items-center flex-col h-[100vh] text-4xl font-Roboto space-y-12">
        <RouterLink to="/resume" @click="closeDrop">Resume</RouterLink>
        <RouterLink to="/projects" @click="closeDrop">Projects</RouterLink>
      </div>
    </div>
  </transition>
</template>

<script setup>
import Bar from '@/components/icons/Bar.vue'
import Close from '@/components/icons/Close.vue'
import Code from '/code.svg'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const isShowing = ref(false)

const handleDrop = () => {
  isShowing.value = !isShowing.value
};

const closeDrop = () => {
  isShowing.value = false
};

</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>