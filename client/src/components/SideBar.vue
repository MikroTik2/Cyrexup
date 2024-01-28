<template>
  <div class="grid grid-rows-[auto,1fr] items-center h-full w-[85px] bg-[#16191B] fixed top-0 left-0 py-5 max-lg:hidden">
    <div class="text-center gap-8 grid">
      <!-- logo -->
      <img class="mx-auto mb-5" src="/svg/logo.svg" alt="logo">
      <!-- links -->
      <router-link class="text-[12px] font-bold" :to="element.path" v-for="(element, i) in menuLinks" :key="i">
        <img class="mx-auto mb-2 w-[35px]" :src="element.img" :alt="element.name">
        {{ element.name }}
      </router-link>
      <!-- not active links -->
      <router-link class="text-[12px] font-bold text-[#646464]" :to="element.path" v-for="(element, i) in passiveLinks" :key="i">
        <img class="mx-auto mb-2 w-[35px]" :src="element.img" :alt="element.name">
        {{ element.name }}
      </router-link>
    </div>
    <!-- language -->
    <div class="flex gap-2.5 mx-auto">
      <img class="" src="/svg/language/russia-language.svg" alt="">
      <p class="font-black">RU</p>
    </div>
    <!-- socials -->
    <router-link class="p-2" :to="element.path" v-for="(element, i) in menuSocials" :key="i">
      <img class="mx-auto w-[35px]" :src="element.img" :alt="element.name">
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// game links
const menuLinks = ref([
  { path: "/crash", img: "/svg/icon-crash.svg", name: "Crash"},
  { path: "/coinflip", img: "/svg/icon-coinflip.svg", name: "Coinflip"},
]);
const passiveLinks = ref([
  { path: "/colorparty", img: "/svg/icon-colorparty.svg", name: "ColorParty"},
  { path: "/thimble", img: "/svg/icon-thimble.svg", name: "Thimble"},
]);

// social links
const menuSocials = ref([
  { path: "/tg", img: "/svg/socials/socials-icon-telegram.svg", name: "Telegram" },
  { path: "/vk", img: "/svg/socials/socials-icon-vk.svg", name: "Vk" },
]);
</script>
