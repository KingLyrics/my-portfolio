<template>
  <section class="max-w-sm mx-auto font-Josefin lg:max-w-4xl px-4 lg:px-0">
    <h1 class="text-2xl py-2">Projects</h1>
    <div class="md:flex flex-col my-3 ">
      <div v-for="(project, index) in projectData" :key="index" class="md:my-4 my-10">
        <h1 class="text-2xl">{{ project.name }}</h1>
        <p class="font-Roboto my-3 pt-3">
          {{ project.desc }}
        </p>
        <p class="font-Roboto text-lg py-2">Technologies Used:{{ project.techology }}</p>
        <a :href="project.url" class="flex items-center text-blue-500 hover:text-blue-700 mt-3">
          Link to Project
          <ArrowRight />
        </a>
        <div v-show="project.live" class="flex mt-3 items-center">
          <a :href="project.liveURl">
            Live Demo</a>
          <ArrowRight />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue';
import projectData from '@/data/ProjectsData'
</script>
