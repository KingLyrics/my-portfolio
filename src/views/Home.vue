
<template>
  <main class="px-5 flex flex-col-reverse md:flex md:items-center md:flex-row md:justify-center md:mt-36
  ">
    <div class="flex justify-center md:flex-none">
      <img src="/Me.jpeg" alt="" class="rounded-full mt-10 ">
    </div>
    <div class="mt-10 flex flex-col md:pl-7 ">
      <h1 class="text-4xl font-Josefin font-[500]">Hey there👋🏿</h1>
      <p class="text-xl mt-3 font-Josefin w-[400px] "> I'm Ekomobong, a passionate web developer with a flair for
        crafting seamless digital experiences. From front-end finesse to back-end brilliance, I bring a holistic approach
        to web development.</p>
      <div class="flex items-center justify-evenly mt-5 space-x-3">
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
    </div>
  </main>
</template>


<script setup>
import Circle from '@/components/Circle.vue'
</script>