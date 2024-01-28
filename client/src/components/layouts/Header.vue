<template>
     <header class="flex absolute lg:relative top-0 inset-x-0 lg:justift-[initial] lg:inset-auto z-10 px-4 lg:px-0 items-center py-5 ">
          <nav class="-ml-2 mt-2 w-full text-lg font-medium lg:flex hidden lg:m-0 lg:mr-auto lg:w-auto">
              <ul class="flex pl-[130px] lg:flex-row lg:items-center">

                    <li><a href="/streamline" class="flex items-center gap-2 py-3 px-2.5 text-[#dae2f5] transition-colors hover:text-white">
                         <img src="/svg/streamline.svg" alt="streamline">
                         <span>Сотрудничество</span>
                    </a></li>
                    <li><a href="/tabler" class="flex items-center gap-2 py-3 px-2.5 text-[#dae2f5] transition-colors hover:text-white">
                         <img src="/svg/tabler.svg" alt="tabler">
                         <span>Бонусы</span>
                    </a></li>

              </ul> 
          </nav>

          <router-link to="/" title="Home page" class="block lg:hidden">
               <img src="/img/logo-mobile.png" alt="cyrexup">
          </router-link>

          <div class="ml-auto h-11 lg:h-12.5 items-center gap-[7px] lg:gap-5 flex">

               <a href="/profile" class="flex items-center gap-1.5 shrink-0 ml-1 mr-[10px] lg:mr-[30px]  w-8.5 lg:w-11.5">
               
                    <!-- there avatar user -->
                    <img src="/img/ava.png" alt="photo" loading="lazy" class="w-[32px] h-[32px] lg:w-[45px] lg:h-[45px] rounded-[100px] border-none object-cover">

                    <div class="flex flex-col justify-center">
                         <span class="text-[14px] lg:text-lg" style="line-height: 1rem;">Studio</span>
                         <span class="leading-none text-[var(--green-100)] text-[14px] md:text-[16px] font-bold">1500 <span class="text-[var(--green-200)] font-bold">$</span></span>
                    </div>

               </a>

               
               <button class="opacity-100 transition hidden lg:flex items-center duration-150 ease-in-out hover:opacity-70 btn w-8.5 h-[45px] bg-[var(--green-100)] gap-2.5 rounded-[10px] text-tiny font-bold uppercase max-lg:aspect-square lg:h-11.5 lg:w-auto lg:pl-3 lg:pr-3">
                    <span style="margin-bottom: -2px; display: block;">ПОПОЛНИТЬ</span>
               </button>
               <button class="opacity-100 transition hidden lg:flex duration-150 ease-in-out hover:opacity-70 btn aspect-square w-[45px] rounded-[10px] bg-[var(--blue-100)] items-center justify-center">
                    <img src="/svg/icon-logout.svg" alt="logout">
               </button>

               <button style="background: linear-gradient(265deg, #237249 6.79%, #35C66B 97.2%);" class="w-[32px] rounded-[5px] h-[32px] flex lg:hidden items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">

                    <rect width="32" height="32" rx="6" fill="url(#paint0_linear_673_224)"/>
                         <path d="M9.33325 16H15.9999M15.9999 16H22.6666M15.9999 16V9.33337M15.9999 16V22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
               </button>

               <button class="flex lg:hidden" @click="toggleMenu">
                    <img class="w-full" src="/svg/burger.svg" alt="menu"/>
               </button>
          </div>

          <MobileMenu :isVisibleMenu="isVisibleMenu" @close-menu="toggleMenuClose"/>
     </header>
</template>

<script setup>
     import { ref } from 'vue';
     import MobileMenu from '@/components/MobileMenu.vue';

     const isVisibleMenu = ref(false);

     const toggleMenu = () => {
          isVisibleMenu.value = !isVisibleMenu.value;

          if (isVisibleMenu.value) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = '';
          };
     };

     const toggleMenuClose = () => {
          isVisibleMenu.value = false;
          document.body.style.overflow = '';
     };

     const props = defineProps({
          colorLink: String,
     });
</script>