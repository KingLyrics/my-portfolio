<template>
  <div class="max-w-sm mx-auto font-Josefin lg:max-w-4xl  ">
    <h1 class="text-3xl font-Noto my-10">Resume</h1>
    <div class="md:flex items-center justify-between md:space-x-48">
      <div>
        <h2 class="text-3xl pb-9">Work <br> Experience</h2>
      </div>
      <div class="">
        <div class="mt-5" v-for="(data, index) in data" :key="index">
          <h1 class="text-2xl my-2 text- font-Roboto">
            {{ data.timeWorked }}
          </h1>
          <h1 class="text-xl">{{ data.role }} <br>@{{ data.company }}</h1>
          <p class="mt-5">
            {{ data.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '@/data';

</script>