<template>
     <div  class="fixed lg:hidden top-0 bottom-0 transition-all duration-200 right-0 left-0 z-50 bg-[#101113FA] pb-[1rem] pt-[25px] px-4 bg-opacity-50"
    :class="{ 'opacity-100': isVisibleMenu, 'opacity-0': !isVisibleMenu, 'pointer-events-auto': isVisibleMenu, 'pointer-events-none': !isVisibleMenu }">
          <div class="flex items-center justify-between mb-[50px]">
               <router-link to="/">
                    <img src="/img/logo-mobile.png" alt="cyrexup">
               </router-link>

               <button type="button" @click="closeMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                         <path d="M28 28L7 7M28 7L7 28" stroke="url(#paint0_linear_673_383)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         <defs>
                              <linearGradient id="paint0_linear_673_383" x1="31.2143" y1="7.21428" x2="3.78571" y2="27.7857" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#3670F6"/>
                                   <stop offset="1" stop-color="#0040A1"/>
                              </linearGradient>
                         </defs>
                    </svg>
               </button>
          </div>

          <div class="grid gap-2 grid-cols-2 text-[14px] font-[Gilroy-Bold] mb-[40px]">
               <button class="h-[45px] rounded-[10px] opacity-100 duration-150 ease-in-out hover:opacity-70" style="background: linear-gradient(91deg, #0444A8 0%, #316CEF 98.93%);">Crash</button>
               <button class="h-[45px] rounded-[10px] opacity-100 duration-150 ease-in-out hover:opacity-70" style="background: linear-gradient(91deg, #0444A8 0%, #316CEF 98.93%);">Coinflip</button>
               <button class="h-[45px] rounded-[10px] opacity-100 duration-150 ease-in-out hover:opacity-70" style="background: linear-gradient(91deg, rgba(74, 74, 74, 0.40) 0%, rgba(152, 152, 152, 0.40) 98.93%);">ColorParty</button>
               <button class="h-[45px] rounded-[10px] opacity-100 duration-150 ease-in-out hover:opacity-70" style="background: linear-gradient(91deg, rgba(74, 74, 74, 0.40) 0%, rgba(152, 152, 152, 0.40) 98.93%);">Thimble</button>
          </div>

          <ul class="grid flex-col lg:items-center">

               <li><a href="/streamline" class="flex items-center gap-2 py-3 px-2.5 text-[#dae2f5] transition-colors hover:text-white">
                    <img width="22" height="22" src="/svg/streamline.svg" alt="streamline">
                    <span class="text-[20px]">Сотрудничество</span>
               </a></li>
               <li><a href="/tabler" class="flex items-center gap-2 py-3 px-2.5 text-[#dae2f5] transition-colors hover:text-white">
                    <img width="22" height="22" src="/svg/tabler.svg" alt="tabler">
                    <span class="text-[20px]">Бонусы</span>
               </a></li>

          </ul> 

          <div class="absolute left-[24px] bottom-[24px] cursor-pointer">
               <div class="flex items-center gap-[10px]">
                    <img src="/svg/language/russia-language.svg" alt="language">
                    <span class="font-[Gilroy-Bold]">RU</span>
               </div>
          </div>

          <div class="absolute right-[24px] bottom-[24px]">
               <div class="flex items-center gap-[10px]">
                    <router-link to="/">
                         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <path d="M24.4466 4.79738L20.8594 21.8178C20.5887 23.0191 19.8829 23.3181 18.88 22.7521L13.4142 18.6999L10.7768 21.2519C10.485 21.5456 10.2409 21.7911 9.67836 21.7911L10.071 16.1906L20.2013 6.98099C20.6418 6.58591 20.1058 6.36702 19.5168 6.7621L6.99322 14.6957L1.60172 12.998C0.428964 12.6296 0.407738 11.8181 1.84583 11.2521L22.9342 3.07825C23.9107 2.70986 24.765 3.29714 24.4466 4.79738Z" fill="#5E5E5E"/>
                         </svg>
                    </router-link>

                    <router-link to="/">
                         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <g clip-path="url(#clip0_673_397)">
                                   <path d="M25.137 21.2717H22.3129C21.2444 21.2717 20.9225 20.4062 19.0071 18.4897C17.3332 16.8764 16.6263 16.6759 16.2029 16.6759C15.6172 16.6759 15.4575 16.8368 15.4575 17.6428V20.1834C15.4575 20.8705 15.2347 21.2729 13.4394 21.2729C11.6978 21.1559 10.0089 20.6268 8.51177 19.7292C7.01468 18.8316 5.75225 17.5911 4.82848 16.11C2.63505 13.3801 1.10888 10.176 0.371338 6.75252C0.371338 6.32909 0.53229 5.94528 1.33953 5.94528H4.16238C4.88791 5.94528 5.14915 6.26843 5.43391 7.015C6.80448 11.0487 9.14324 14.5575 10.0929 14.5575C10.4569 14.5575 10.6153 14.3965 10.6153 13.489V9.33395C10.4952 7.43843 9.48867 7.27871 9.48867 6.59281C9.5014 6.41185 9.58418 6.24298 9.71942 6.12207C9.85466 6.00117 10.0317 5.93775 10.213 5.94528H14.6503C15.257 5.94528 15.4575 6.24738 15.4575 6.9729V12.5815C15.4575 13.1869 15.7175 13.3875 15.9008 13.3875C16.2648 13.3875 16.5446 13.1869 17.2119 12.5208C18.6423 10.7763 19.811 8.83273 20.681 6.75128C20.7701 6.50138 20.9385 6.28746 21.1604 6.14216C21.3824 5.99686 21.6458 5.92816 21.9105 5.94652H24.7346C25.5814 5.94652 25.761 6.36995 25.5814 6.97414C24.5543 9.27504 23.2833 11.4591 21.7904 13.489C21.4858 13.9533 21.3645 14.1947 21.7904 14.7395C22.0702 15.1629 23.0607 15.99 23.7255 16.7761C24.6937 17.7419 25.4972 18.8586 26.1051 20.0819C26.3478 20.8693 25.943 21.2717 25.137 21.2717Z" fill="#5E5E5E"/>
                              </g>
                              <defs>
                                   <clipPath id="clip0_673_397">
                                        <rect width="26" height="26" fill="white"/>
                                   </clipPath>
                              </defs>
                         </svg>
                    </router-link>
               </div>
          </div>
     </div>
</template>

<script setup>
     const emit = defineEmits();
     const props = defineProps({
          isVisibleMenu: Boolean,
     });

     const closeMenu = () => {
          emit("close-menu");
     };

</script>

<style lang="scss" scoped>

</style>