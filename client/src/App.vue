<template>
     <div class="" id="main-layout">
          <div class="contents items-start lg:flex">
               <div class="w-full px-2.5 pt-16 lg:pt-0 lg:h-[100svh] lg:px-5 pb-5">
                    <Header />
                    <router-view></router-view>
               </div>
          </div>
     </div>
</template>

<script setup>
     import Header from '@/components/layouts/Header.vue';
</script>