<template>
  <div>
    <transition name="slide-fade">
      <main v-show="pageLoaded"
        class="px-3 flex flex-col-reverse md:flex md:items-center md:flex-row md:justify-center md:mt-36 ">
        <div class=" flex justify-center md:flex-none">
          <img src="/Me.jpeg" alt="" class="rounded-full mt-10 md:w-[400px] pr-3 ">
        </div>
        <div class="mt-10 flex flex-col md:pl-7 ">
          <h1 class="text-4xl font-Josefin font-[500] md:text-5xl">Hey there <span class="wave">👋🏿</span>
          </h1>
          <p class="text-xl mt-3 pr-3 font-Josefin w-[370px] md:text-2xl md:w-[500px] md:pr-0 "> I'm Ekomobong, a
            passionate
            web
            developer
            with a flair
            for
            crafting seamless digital experiences. From front-end finesse to back-end brilliance, I bring a holistic
            approach
            to web development.</p>
        </div>
      </main>
    </transition>
    <About v-motion-slide-visible-once-right />
    <Technology v-motion-slide-visible-once-right />
  </div>
</template>


<script setup>
import About from '@/components/About.vue';
import Technology from '@/components/Technology.vue';
import { onMounted, ref } from 'vue';
const pageLoaded = ref(false)

onMounted(() => {
  pageLoaded.value = !pageLoaded.value
});


</script>


<style scoped>
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0.0deg)
  }

  10% {
    transform: rotate(14.0deg)
  }

  20% {
    transform: rotate(-8.0deg)
  }

  30% {
    transform: rotate(14.0deg)
  }

  40% {
    transform: rotate(-4.0deg)
  }

  50% {
    transform: rotate(10.0deg)
  }

  60% {
    transform: rotate(0.0deg)
  }

  100% {
    transform: rotate(0.0deg)
  }
}


.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(90px);
  opacity: 0;
}
</style>