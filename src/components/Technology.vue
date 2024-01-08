<template>
  <div class="pt-28  md:pt-52 pb-56 max-w-md mx-auto">
    <h1 class="text-center font-Josefin text-4xl pb-10 font-[500]">My Tech Stack</h1>
    <div>
      <div class="grid grid-cols-1 place-items-center  place-content-center lg:grid-cols-2 ">
        <img v-for="(Image, index) in Images" :key="index" :src="Image.pic" :alt="Image.alt" class="py-4 h-48">
      </div>
    </div>
    <h1 class="text-center mt-28 text-2xl font-Josefin lg:text-4xl ">Let's work together to turn your ideas into a reality
    </h1>
  </div>
</template>

<script setup>
import HTML from '/html5.svg';
import CSS from '/css3.svg';
import JS from '/js.svg';
import Node from '/Nodejs.svg';
import Vue from '/Vue.svg';
import React from '/React.svg';
import TAILWINDCSS from '/Tailwindcss.svg';
import Mongodb from '/Mongodb.svg';
import MYSQL from '/MySQL.svg';
import Bootstrap from '/bootStrap.svg';

const Images = [
  {
    pic: HTML,
    alt: 'HTML'
  },
  {
    pic: CSS,
    alt: 'CSS'
  },
  {

    pic: JS,
    alt: 'Javascript Image'
  },
  {

    pic: Node,
    alt: 'Node.js'
  },
  {

    pic: React,
    alt: 'React'
  },
  {

    pic: Vue,
    alt: 'Vue'
  },
  {

    pic: Mongodb,
    alt: 'Mongodb'
  },
  {

    pic: MYSQL,
    alt: 'MySqL'
  },
  {

    pic: TAILWINDCSS,
    alt: 'TailWindCSS'
  },
  {

    pic: Bootstrap,
    alt: 'Bootstrap'
  },


];

</script>
