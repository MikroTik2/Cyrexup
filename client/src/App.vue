<template>
     <div id="app">
          <Loader v-if="isLoading" />
       <div id="main-layout">
            <SideBar/>
            <div class="w-full mx-auto px-2.5 pt-16 lg:pt-0 lg:h-[100svh] lg:px-5 pb-5">
                 <Header />
               <!-- <Footer /> -->
               <router-view></router-view>
          </div>
       </div>
     </div>
   </template>
   
   <script setup>
   import SideBar from './components/SideBar.vue';
   import Header from './components/layouts/Header.vue';
//    import Footer from './components/layouts/Footer.vue';
   import Loader from './components/Loader.vue';
   import { ref } from 'vue';
   
   const isLoading = ref(true);
   </script>
   