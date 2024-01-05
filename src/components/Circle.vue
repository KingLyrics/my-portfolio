<template>
  <div :class="color, height"
    class="h-24 w-24  text-black text-center flex items-center justify-center rounded-full font-Josefin border border-black ">
    {{ text }}
  </div>
</template>


<script setup>
defineProps({
  text: String,
  color: String,
  height: String,
});
</script>