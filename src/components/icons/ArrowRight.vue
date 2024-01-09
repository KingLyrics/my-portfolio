<template>
  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6 ml-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </div>
</template>

<style scoped>
.point {
  animation-name: pointing;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes pointing {
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(10px);
  }
}
</style>
