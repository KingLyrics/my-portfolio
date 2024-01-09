<template>
  <section class="max-w-sm mx-auto font-Josefin lg:max-w-4xl px-4 lg:px-0">
    <h1 class="text-2xl py-2">Projects</h1>
    <div class="md:flex md:space-x-48 my-3 ">
      <div v-for="(project, index) in projectData" :key="index">
        <h1 class="text-2xl">{{ project.name }}</h1>
        <p class="font-Roboto my-3">
          {{ project.desc }}
        </p>
        <a :href="project.url" class="flex items-center text-blue-500">
          Link to Project
          <ArrowRight />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue';
import projectData from '@/data/ProjectsData'


</script>