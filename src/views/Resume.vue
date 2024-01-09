<template>
  <div class="max-w-sm mx-auto font-Josefin lg:max-w-4xl px-4 lg:px-0">
    <h1 class="text-3xl font-Noto my-10">Resume</h1>
    <div class="md:flex items-center justify-between md:space-x-48 border border-b-black">
      <div>
        <h2 class="text-3xl pb-9" v-motion-pop-visible>Work <br> Experience</h2>
      </div>
      <div class=" pb-20">
        <div class="mt-5 pb-3" v-for="(data, index) in data" :key="index">
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
    <div class="md:flex mt-12 items-center md:space-x-48 px-3 pb-10">
      <div class="pb-10">
        <h2 class="text-3xl pb-4" v-motion-pop-visible>Skills <br> & Expertise</h2>
        <h2 class="text-xl pb-2">Tech Toolbox 🧰</h2>

        <div class="mt-10">
          <ul class="list-disc space-y-10">
            <li class="lg:text-xl text-lg">Frontend Technologies: HTML, CSS, JavaScript (React, Vue), TailWindCSS,
              BootStrap 5, Axios
            </li>
            <li class="lg:text-xl text-lg">Backend: Node.js, Express
            </li>
            <li class="lg:text-xl text-lg">Databases: MongoDB, MySQL, Postgresql
            </li>
            <li class="lg:text-xl text-lg">Tools: Git, VS Code
            </li>
            <li class="lg:text-xl text-lg">Other Skills: Responsive Design, API Integration, Problem Solving
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ScrollToTopButton />
  </div>
</template>
<!-- Frontend: 
-->

<script setup>
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import data from '@/data';

</script>