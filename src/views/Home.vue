
<template>
  <main class="flex flex-col">
    <div class="mt-10 px-5 ">
      <h1 class="text-4xl font-Josefin font-[500]">Hey there👋🏿</h1>
      <p class="text-xl mt-3 font-Josefin"> I'm Ekomobong, a passionate web developer with a flair for
        crafting seamless digital experiences. From front-end finesse to back-end brilliance, I bring a holistic approach
        to web development.</p>
    </div>
    <div class="flex items-center justify-evenly mt-5">
      <RouterLink to="/resume">
        <Circle text="Resume" color="bg-orange" />
      </RouterLink>
      <RouterLink to="/projects">
        <Circle text="Projects" color="bg-deepGray" />
      </RouterLink>
      <RouterLink to="/contact">
        <Circle text="Contact" color="bg-deepBlue text-white" />
      </RouterLink>
    </div>
  </main>
</template>


<script setup>
import Circle from '@/components/Circle.vue'
</script>