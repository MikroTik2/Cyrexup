<template>
     <header class="flex fixed lg:relative top-0 inset-x-0 lg:inset-auto z-10  pl-4 pr-2 lg:px-0 items-center pb-2 pt-2 lg:py-5 ">
          <nav class="-ml-2 mt-2 w-full text-lg font-medium lg:m-0 lg:mr-auto lg:w-auto">
              <ul class="flex lg:flex-row lg:items-center">

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

          <div class="ml-auto h-11 lg:h-12.5 items-center gap-1.5 hidden lg:flex">
               <a href="/profile/:id" class="flex gap-1.5 shrink-0 ml-1 lg:ml-0  w-8.5 lg:w-11.5">
               
                    <!-- there avatar user -->
                    <img src="https://avatars.githubusercontent.com/u/111369356?v=4" alt="photo" loading="lazy" width="46" height="46" class="w-[45px] h-[45px] rounded-[100px] border-none object-cover">

                    <div class="flex flex-col justify-center">
                         <span class="text-lg" style="line-height: 1rem;">Чемпион</span>
                         <span class="text-[var(--green-100)] font-bold">1500 <span class="text-[var(--green-200)] font-bold">$</span></span>
                    </div>

               </a>

               
               <button class="opacity-100 transition duration-150 ease-in-out hover:opacity-70 btn w-8.5 h-[45px] bg-[var(--green-100)] gap-2.5 rounded-[10px] text-tiny font-bold uppercase max-lg:aspect-square lg:h-11.5 lg:w-auto lg:pl-3 lg:pr-3">
                    <span style="margin-bottom: -2px; display: block;">ПОПОЛНИТЬ</span>
               </button>
               <button class="opacity-100 transition duration-150 ease-in-out hover:opacity-70 btn aspect-square w-[45px] rounded-[10px] bg-[var(--blue-100)] flex items-center justify-center">
                    <img src="/svg/icon-logout.svg" alt="logout">
               </button>
          </div>
     </header>
</template>

<script setup>
     import { ref } from 'vue';
     import Button from '@/components/button/Button.vue';

     const props = defineProps({
          colorLink: String,
     });
</script>