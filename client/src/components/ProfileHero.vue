<template>
     <div class="m-auto max-w-[72.8125rem] mt-[4.0625rem]">
          <div class="flex flex-col gap-[.9375rem] md:gap-[1.5625rem]">
               <div class="grid-cols-12">

                    <!-- routes mobile -->
                    <ul class="no-scrollbar z-[1] grow gap-[1.875rem] relative z-1 flex max-w-full overflow-auto whitespace-nowrap bg-[#16181B] text-tiny font-bold items-center text-[1.125rem] max-lg:rounded-lg h-[3.125rem] max-lg:pr-14 max-lg:only:pr-0 lg:overflow-visible lg:bg-transparent lg:hidden">

                         <div
                              role="presentation"
                              class="absolute inset-y-0 left-0 z-[1] rounded-lg bg-[#3D74FF] transition-all ease-in duration-100"
                              :style="{ transform: `translateX(${b}px)`, width: `${w}px` }">
                         </div>

                         <li>
                              <router-link @click="handleButtonClick(0, 129)" to="/profile" class="flex justify-center relative w-[8.0625rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                   <img width="21" height="21" src="/svg/routes/profile-icon.svg" alt="profile">
                                   <span>Профиль</span>
                              </router-link>
                         </li>

                         <li>
                              <router-link @click="handleButtonClick(160, 150)" to="/profile/inventory" class="flex justify-center relative w-[9.375rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                   <img width="21" height="21" src="/svg/routes/inventory-icon.svg" alt="inventory">
                                   Инвентарь
                              </router-link>
                         </li>

                         <li>
                              <router-link @click="handleButtonClick(340, 123.59)" to="/profile" class="flex justify-center relative w-[7.7244rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                   <img width="21" height="21" src="/svg/routes/arrow-up-icon.svg" alt="arrow-up">
                                   Выводы
                              </router-link>
                         </li>

                         <li>
                              <router-link @click="handleButtonClick(493, 170)" to="/profile" class="flex justify-center relative w-[10.625rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                   <img width="21" height="21" src="/svg/routes/profile-icon.svg" alt="profile">
                                   Реф. система
                              </router-link>
                         </li>

                         <li>
                              <router-link @click="handleButtonClick(693, 163)" to="/profile" class="flex justify-center relative w-[10.2019rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                   <img width="21" height="21" src="/svg/routes/profile-icon.svg" alt="profile">
                                   История игр
                              </router-link>
                         </li>
                    </ul>

                    <!-- Profile info -->
                    <div class="rounded-[.9375rem] h-[100%] w-[100%] bg-[#16181B] px-6 py-4">
                         
                         <!-- profile avatar & id -->
                         <div class="flex justify-between">

                              <div class="flex gap-2.5 items-center">
                                   <img src="/img/ava.png" alt="photo" loading="lazy" width="46" height="46" class="w-[2.8125rem] h-[2.8125rem] rounded-[6.25rem] border-none object-cover">

                                   <div class="flex flex-col">
                                        <span class="" style="line-height: 16px;">Studio</span>
                                        <span>1 500<span>$</span></span>
                                   </div>
                              </div>

                              <div class="text-right flex flex-col">
                                   <span>ID</span>
                                   <span>#14223</span>
                              </div>
                         
                         </div>

                         <!-- balance & trade url -->
                         <button type="button" style="background: linear-gradient(265deg, #237249 6.79%, #35C66B 97.2%);" class="rounded-[.625rem] w-[100%] mt-4 h-[2.8125rem] flex items-center justify-center opacity-100 transition duration-150 ease-in-out hover:opacity-70">ПОПОЛНИТЬ</button>
                         <button @click="toggleTrade" type="button" class="relative mt-2.5 transition duration-150 ease-in-out hover:opacity-70 flex items-center justify-between border-dashed border-[.0313rem] px-2.5 text-[#3D74FF] text-[.75rem] w-[100%] gap-1 h-[1.875rem] rounded-[.5rem] border-[#3D74FF]">
                              <div class="flex items-center gap-1">
                                   <img src="/svg/trade-link.svg" alt="trade">
                                   Trade URL ССЫЛКА
                              </div>

                              <img src="/svg/fluent.svg" class="" alt="fluent">
                         </button>

                         <!-- promocode -->
                         <div class="mt-7 grid">
                              <div class="flex items-center gap-1.5">
                                   <img src="/svg/ticket-icon.svg" alt="ticket-coupon">
                                   <h3 class="font-[Gilroy-Bold] text-[.9375rem]">Промокод</h3>
                              </div>

                              <input  type="text" class="p-[.5rem_0_.5rem_.3125rem] rounded-[.3125rem] text-white text-[.75rem] mt-3 mb-2 h-[1.875rem] bg-[#202124] outline-none" placeholder="Введите промокод" >
                              <button type="button" style="background: linear-gradient(90deg, #76A0FF 0%, #0167C6 88.54%, #0167C6 100%);" class="btn px-2.5 rounded-[.3125rem] flex justify-between items-center h-[2.1875rem] opacity-100 transition duration-150 ease-in-out hover:opacity-70">
                              
                                   Активировать
                                   <img src="/svg/checkmark-icon.svg" alt="checkmark">
                              
                              </button>
                         </div>
                    
                    </div>

                    <!-- analytics -->
                    <div class="rounded-[.9375rem] flex flex-col gap-[.9375rem] lg:overflow-auto lg:whitespace-nowrap ">
                         
                         <!-- routes -->
                         <ul class="no-scrollbar grow gap-[1.875rem] relative z-1 rounded-[.9375rem] overflow-auto whitespace-nowrap bg-[#16181B] text-ti'ny font-bold items-center text-[1.125rem] h-[3.125rem] max-lg:pr-14 max-lg:only:pr-0 hidden lg:flex">
                              <div
                                   role="presentation"
                                   class="absolute inset-y-0 left-0 z-[1] rounded-lg bg-[#3D74FF] transition-all ease-in duration-100"
                                   :style="{ transform: `translateX(${b}px)`, width: `${w}px` }">
                              </div>

                              <li>
                                   <router-link @click="handleButtonClick(0, 129)" to="/profile" class="flex justify-center relative w-[8.0625rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                        <img width="21" height="21" src="/svg/routes/profile-icon.svg" alt="profile">
                                        <span>Профиль</span>
                                   </router-link>
                              </li>

                              <li>
                                   <router-link @click="handleButtonClick(160, 150)" to="/profile/inventory" class="flex justify-center relative w-[9.375rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                        <img width="21" height="21" src="/svg/routes/inventory-icon.svg" alt="inventory">
                                        Инвентарь
                                   </router-link>
                              </li>

                              <li>
                                   <router-link @click="handleButtonClick(340, 123.59)" to="/profile" class="flex justify-center relative w-[7.7244rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                        <img width="21" height="21" src="/svg/routes/arrow-up-icon.svg" alt="arrow-up">
                                        Выводы
                                   </router-link>
                              </li>

                              <li>
                                   <router-link @click="handleButtonClick(493, 170)" to="/profile" class="flex justify-center relative w-[10.625rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                        <img width="21" height="21" src="/svg/routes/profile-icon.svg" alt="profile">
                                        Реф. система
                                   </router-link>
                              </li>

                              <li>
                                   <router-link @click="handleButtonClick(693, 163)" to="/profile" class="flex justify-center relative w-[10.2019rem] h-[3.125rem] z-10 h-13 lg:h-17 items-center gap-2.5 lg:gap-3 text-nano [--fill:#a6adcd] fill-[#a6adcd] text-[#d6e2ff] transition-colors hover:fill-white hover:[--fill:white] hover:text-white aria-pressed:[--fill:white] aria-pressed:pointer-events-none aria-pressed:text-white">
                                        <img width="21" height="21" src="/svg/routes/profile-icon.svg" alt="profile">
                                        История игр
                                   </router-link>
                              </li>
                         </ul>

                         <!-- analytics user -->
                         <div class="grid-cols-3 gap-[.625rem] hidden md:grid" v-if="route.path !== '/profile/inventory'"> 
                              <div class="rounded-[.9375rem] gap-[1.25rem] flex bg-[#16181B] w-[100%] p-5">
                                   <img src="/svg/controller.svg" alt="controller">

                                   <div class="flex flex-col">
                                        <span class="mb-[-0.625rem] text-[1.5625rem] font-[Gilroy-Bold]"> {{ game }} 4 </span>
                                        <span class="text-[#414141]">Игр сыграно</span>
                                   </div>
                              </div>

                              <div class="rounded-[.9375rem] gap-[1.25rem] flex bg-[#16181B] w-[100%] p-5">
                                   <img src="/svg/money.svg" alt="money-sum">

                                   <div class="flex flex-col ">
                                        <span class="mb-[-0.625rem] text-[1.5625rem] font-[Gilroy-Bold]"> {{ game }} 12 </span>
                                        <span class="text-[#414141] ">Выигрыши</span>
                                   </div>
                              </div>

                              <div class="rounded-[.9375rem] gap-[1.25rem] flex bg-[#16181B] w-[100%] p-5">
                                   <img src="/svg/money-bag.svg" alt="money-bag">

                                   <div class="flex flex-col ">
                                        <span class="mb-[-0.625rem] text-[1.5625rem] font-[Gilroy-Bold]"> {{ game }} 7 </span>
                                        <span class="text-[#414141] ">Топ выигрыш</span>
                                   </div>
                              </div>

                         </div>

                         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:h-[12.5rem] gap-[.625rem] leading-6" v-show="route.path !== '/profile/inventory'">

                              <!-- refferal mobile -->
                              <div class="bg-[#16181B] md:hidden block px-[.5rem] py-[1.375rem] rounded-[.9375rem]">
                                   <div class="grid gap-[.1875rem] grid-cols-2 mb-[.625rem]">
                                        <button style="background: linear-gradient(90deg, #76A0FF 0%, #0167C6 88.54%, #0167C6 100%);" class="inline-flex gap-[.3125rem] h-[1.875rem] justify-start rounded-[.3125rem] items-center px-[.1875rem] text-[.4375rem]">
                                        
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1375 2.49835C8.37198 2.23647 8.65906 2.02699 8.97999 1.88357C9.30091 1.74015 9.64848 1.66602 10 1.66602C10.3515 1.66602 10.6991 1.74015 11.02 1.88357C11.3409 2.02699 11.628 2.23647 11.8625 2.49835L12.4458 3.15002C12.5292 3.24328 12.6325 3.31657 12.748 3.36446C12.8636 3.41236 12.9884 3.43362 13.1133 3.42669L13.9883 3.37835C14.3392 3.35908 14.6902 3.414 15.0184 3.53952C15.3466 3.66504 15.6447 3.85835 15.8932 4.10683C16.1417 4.3553 16.335 4.65338 16.4605 4.9816C16.586 5.30982 16.6409 5.66081 16.6217 6.01169L16.5733 6.88669C16.5665 7.01144 16.5879 7.13613 16.6357 7.25153C16.6836 7.36693 16.7569 7.47008 16.85 7.55335L17.5025 8.13669C17.7645 8.37118 17.9741 8.6583 18.1176 8.97931C18.2611 9.30031 18.3353 9.64798 18.3353 9.9996C18.3353 10.3512 18.2611 10.6989 18.1176 11.0199C17.9741 11.3409 17.7645 11.628 17.5025 11.8625L16.85 12.4459C16.7567 12.5292 16.6835 12.6325 16.6356 12.7481C16.5877 12.8636 16.5664 12.9885 16.5733 13.1134L16.6217 13.9884C16.6409 14.3392 16.586 14.6902 16.4605 15.0184C16.335 15.3467 16.1417 15.6447 15.8932 15.8932C15.6447 16.1417 15.3466 16.335 15.0184 16.4605C14.6902 16.586 14.3392 16.641 13.9883 16.6217L13.1133 16.5734C12.9886 16.5665 12.8639 16.5879 12.7485 16.6358C12.6331 16.6837 12.5299 16.7569 12.4467 16.85L11.8633 17.5025C11.6288 17.7645 11.3417 17.9741 11.0207 18.1176C10.6997 18.2612 10.352 18.3353 10.0004 18.3353C9.64879 18.3353 9.30113 18.2612 8.98012 18.1176C8.65911 17.9741 8.37199 17.7645 8.1375 17.5025L7.55416 16.85C7.4708 16.7568 7.36751 16.6835 7.25196 16.6356C7.13641 16.5877 7.01156 16.5664 6.88666 16.5734L6.01166 16.6217C5.66079 16.641 5.3098 16.586 4.98157 16.4605C4.65335 16.335 4.35528 16.1417 4.1068 15.8932C3.85832 15.6447 3.66502 15.3467 3.5395 15.0184C3.41398 14.6902 3.35906 14.3392 3.37833 13.9884L3.42666 13.1134C3.43348 12.9886 3.41215 12.8639 3.36426 12.7485C3.31637 12.6331 3.24314 12.53 3.15 12.4467L2.49833 11.8634C2.23631 11.6289 2.02671 11.3417 1.88321 11.0207C1.7397 10.6997 1.66553 10.3521 1.66553 10.0004C1.66553 9.64882 1.7397 9.30115 1.88321 8.98014C2.02671 8.65913 2.23631 8.37201 2.49833 8.13752L3.15 7.55419C3.24325 7.47082 3.31655 7.36754 3.36444 7.25198C3.41234 7.13643 3.4336 7.01158 3.42666 6.88669L3.37833 6.01169C3.35906 5.66081 3.41398 5.30982 3.5395 4.9816C3.66502 4.65338 3.85832 4.3553 4.1068 4.10683C4.35528 3.85835 4.65335 3.66504 4.98157 3.53952C5.3098 3.414 5.66079 3.35908 6.01166 3.37835L6.88666 3.42669C7.01142 3.4335 7.13611 3.41217 7.25151 3.36428C7.3669 3.31639 7.47006 3.24316 7.55333 3.15002L8.1375 2.49835ZM13.0892 6.91085C13.2454 7.06713 13.3332 7.27905 13.3332 7.50002C13.3332 7.72099 13.2454 7.93291 13.0892 8.08919L8.08916 13.0892C7.932 13.241 7.72149 13.325 7.503 13.3231C7.2845 13.3212 7.07549 13.2335 6.92098 13.079C6.76648 12.9245 6.67884 12.7155 6.67694 12.497C6.67504 12.2785 6.75903 12.068 6.91083 11.9109L11.9108 6.91085C12.0671 6.75463 12.279 6.66687 12.5 6.66687C12.721 6.66687 12.9329 6.75463 13.0892 6.91085ZM7.91667 6.66669C7.58514 6.66669 7.2672 6.79838 7.03278 7.0328C6.79836 7.26722 6.66667 7.58517 6.66667 7.91669V7.92502C6.66667 8.25654 6.79836 8.57448 7.03278 8.80891C7.2672 9.04333 7.58514 9.17502 7.91667 9.17502H7.925C8.25652 9.17502 8.57446 9.04333 8.80888 8.80891C9.0433 8.57448 9.175 8.25654 9.175 7.92502V7.91669C9.175 7.58517 9.0433 7.26722 8.80888 7.0328C8.57446 6.79838 8.25652 6.66669 7.925 6.66669H7.91667ZM12.0833 10.8334C11.7518 10.8334 11.4339 10.9651 11.1994 11.1995C10.965 11.4339 10.8333 11.7518 10.8333 12.0834V12.0917C10.8333 12.4232 10.965 12.7412 11.1994 12.9756C11.4339 13.21 11.7518 13.3417 12.0833 13.3417H12.0917C12.4232 13.3417 12.7411 13.21 12.9755 12.9756C13.21 12.7412 13.3417 12.4232 13.3417 12.0917V12.0834C13.3417 11.7518 13.21 11.4339 12.9755 11.1995C12.7411 10.9651 12.4232 10.8334 12.0917 10.8334H12.0833Z" fill="white"/>
                                             </svg>

                                             <div class="flex flex-col items-center">
                                                  <span class="w-[100%] leading-[initial] text-left">1%</span>
                                                  <span class="uppercase leading-[initial] text-[#AAA]">реф. бонус</span>
                                             </div>
                                        
                                        </button>
                                        <button style="background: linear-gradient(90deg, #76A0FF 0%, #0167C6 88.54%, #0167C6 100%);" class="inline-flex gap-[.3125rem] h-[1.875rem] justify-start rounded-[.3125rem] items-center px-[.1875rem] text-[.4375rem]">
                                        
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1375 2.49835C8.37198 2.23647 8.65906 2.02699 8.97999 1.88357C9.30091 1.74015 9.64848 1.66602 10 1.66602C10.3515 1.66602 10.6991 1.74015 11.02 1.88357C11.3409 2.02699 11.628 2.23647 11.8625 2.49835L12.4458 3.15002C12.5292 3.24328 12.6325 3.31657 12.748 3.36446C12.8636 3.41236 12.9884 3.43362 13.1133 3.42669L13.9883 3.37835C14.3392 3.35908 14.6902 3.414 15.0184 3.53952C15.3466 3.66504 15.6447 3.85835 15.8932 4.10683C16.1417 4.3553 16.335 4.65338 16.4605 4.9816C16.586 5.30982 16.6409 5.66081 16.6217 6.01169L16.5733 6.88669C16.5665 7.01144 16.5879 7.13613 16.6357 7.25153C16.6836 7.36693 16.7569 7.47008 16.85 7.55335L17.5025 8.13669C17.7645 8.37118 17.9741 8.6583 18.1176 8.97931C18.2611 9.30031 18.3353 9.64798 18.3353 9.9996C18.3353 10.3512 18.2611 10.6989 18.1176 11.0199C17.9741 11.3409 17.7645 11.628 17.5025 11.8625L16.85 12.4459C16.7567 12.5292 16.6835 12.6325 16.6356 12.7481C16.5877 12.8636 16.5664 12.9885 16.5733 13.1134L16.6217 13.9884C16.6409 14.3392 16.586 14.6902 16.4605 15.0184C16.335 15.3467 16.1417 15.6447 15.8932 15.8932C15.6447 16.1417 15.3466 16.335 15.0184 16.4605C14.6902 16.586 14.3392 16.641 13.9883 16.6217L13.1133 16.5734C12.9886 16.5665 12.8639 16.5879 12.7485 16.6358C12.6331 16.6837 12.5299 16.7569 12.4467 16.85L11.8633 17.5025C11.6288 17.7645 11.3417 17.9741 11.0207 18.1176C10.6997 18.2612 10.352 18.3353 10.0004 18.3353C9.64879 18.3353 9.30113 18.2612 8.98012 18.1176C8.65911 17.9741 8.37199 17.7645 8.1375 17.5025L7.55416 16.85C7.4708 16.7568 7.36751 16.6835 7.25196 16.6356C7.13641 16.5877 7.01156 16.5664 6.88666 16.5734L6.01166 16.6217C5.66079 16.641 5.3098 16.586 4.98157 16.4605C4.65335 16.335 4.35528 16.1417 4.1068 15.8932C3.85832 15.6447 3.66502 15.3467 3.5395 15.0184C3.41398 14.6902 3.35906 14.3392 3.37833 13.9884L3.42666 13.1134C3.43348 12.9886 3.41215 12.8639 3.36426 12.7485C3.31637 12.6331 3.24314 12.53 3.15 12.4467L2.49833 11.8634C2.23631 11.6289 2.02671 11.3417 1.88321 11.0207C1.7397 10.6997 1.66553 10.3521 1.66553 10.0004C1.66553 9.64882 1.7397 9.30115 1.88321 8.98014C2.02671 8.65913 2.23631 8.37201 2.49833 8.13752L3.15 7.55419C3.24325 7.47082 3.31655 7.36754 3.36444 7.25198C3.41234 7.13643 3.4336 7.01158 3.42666 6.88669L3.37833 6.01169C3.35906 5.66081 3.41398 5.30982 3.5395 4.9816C3.66502 4.65338 3.85832 4.3553 4.1068 4.10683C4.35528 3.85835 4.65335 3.66504 4.98157 3.53952C5.3098 3.414 5.66079 3.35908 6.01166 3.37835L6.88666 3.42669C7.01142 3.4335 7.13611 3.41217 7.25151 3.36428C7.3669 3.31639 7.47006 3.24316 7.55333 3.15002L8.1375 2.49835ZM13.0892 6.91085C13.2454 7.06713 13.3332 7.27905 13.3332 7.50002C13.3332 7.72099 13.2454 7.93291 13.0892 8.08919L8.08916 13.0892C7.932 13.241 7.72149 13.325 7.503 13.3231C7.2845 13.3212 7.07549 13.2335 6.92098 13.079C6.76648 12.9245 6.67884 12.7155 6.67694 12.497C6.67504 12.2785 6.75903 12.068 6.91083 11.9109L11.9108 6.91085C12.0671 6.75463 12.279 6.66687 12.5 6.66687C12.721 6.66687 12.9329 6.75463 13.0892 6.91085ZM7.91667 6.66669C7.58514 6.66669 7.2672 6.79838 7.03278 7.0328C6.79836 7.26722 6.66667 7.58517 6.66667 7.91669V7.92502C6.66667 8.25654 6.79836 8.57448 7.03278 8.80891C7.2672 9.04333 7.58514 9.17502 7.91667 9.17502H7.925C8.25652 9.17502 8.57446 9.04333 8.80888 8.80891C9.0433 8.57448 9.175 8.25654 9.175 7.92502V7.91669C9.175 7.58517 9.0433 7.26722 8.80888 7.0328C8.57446 6.79838 8.25652 6.66669 7.925 6.66669H7.91667ZM12.0833 10.8334C11.7518 10.8334 11.4339 10.9651 11.1994 11.1995C10.965 11.4339 10.8333 11.7518 10.8333 12.0834V12.0917C10.8333 12.4232 10.965 12.7412 11.1994 12.9756C11.4339 13.21 11.7518 13.3417 12.0833 13.3417H12.0917C12.4232 13.3417 12.7411 13.21 12.9755 12.9756C13.21 12.7412 13.3417 12.4232 13.3417 12.0917V12.0834C13.3417 11.7518 13.21 11.4339 12.9755 11.1995C12.7411 10.9651 12.4232 10.8334 12.0917 10.8334H12.0833Z" fill="white"/>
                                             </svg>

                                             <div class="flex flex-col items-center">
                                                  <span class="w-[100%] leading-[initial] text-left">0.00%</span>
                                                  <span class="uppercase leading-[initial] text-[#AAA]">реф. баланс</span>
                                             </div>
                                   
                                        </button>

                                        <button style="background: linear-gradient(90deg, #76A0FF 0%, #0167C6 88.54%, #0167C6 100%);" class="inline-flex h-[1.875rem] rounded-[.3125rem] justify-center items-center px-[.1875rem] text-[.4375rem] col-span-2 w-[100%]">
                                        
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1375 2.49835C8.37198 2.23647 8.65906 2.02699 8.97999 1.88357C9.30091 1.74015 9.64848 1.66602 10 1.66602C10.3515 1.66602 10.6991 1.74015 11.02 1.88357C11.3409 2.02699 11.628 2.23647 11.8625 2.49835L12.4458 3.15002C12.5292 3.24328 12.6325 3.31657 12.748 3.36446C12.8636 3.41236 12.9884 3.43362 13.1133 3.42669L13.9883 3.37835C14.3392 3.35908 14.6902 3.414 15.0184 3.53952C15.3466 3.66504 15.6447 3.85835 15.8932 4.10683C16.1417 4.3553 16.335 4.65338 16.4605 4.9816C16.586 5.30982 16.6409 5.66081 16.6217 6.01169L16.5733 6.88669C16.5665 7.01144 16.5879 7.13613 16.6357 7.25153C16.6836 7.36693 16.7569 7.47008 16.85 7.55335L17.5025 8.13669C17.7645 8.37118 17.9741 8.6583 18.1176 8.97931C18.2611 9.30031 18.3353 9.64798 18.3353 9.9996C18.3353 10.3512 18.2611 10.6989 18.1176 11.0199C17.9741 11.3409 17.7645 11.628 17.5025 11.8625L16.85 12.4459C16.7567 12.5292 16.6835 12.6325 16.6356 12.7481C16.5877 12.8636 16.5664 12.9885 16.5733 13.1134L16.6217 13.9884C16.6409 14.3392 16.586 14.6902 16.4605 15.0184C16.335 15.3467 16.1417 15.6447 15.8932 15.8932C15.6447 16.1417 15.3466 16.335 15.0184 16.4605C14.6902 16.586 14.3392 16.641 13.9883 16.6217L13.1133 16.5734C12.9886 16.5665 12.8639 16.5879 12.7485 16.6358C12.6331 16.6837 12.5299 16.7569 12.4467 16.85L11.8633 17.5025C11.6288 17.7645 11.3417 17.9741 11.0207 18.1176C10.6997 18.2612 10.352 18.3353 10.0004 18.3353C9.64879 18.3353 9.30113 18.2612 8.98012 18.1176C8.65911 17.9741 8.37199 17.7645 8.1375 17.5025L7.55416 16.85C7.4708 16.7568 7.36751 16.6835 7.25196 16.6356C7.13641 16.5877 7.01156 16.5664 6.88666 16.5734L6.01166 16.6217C5.66079 16.641 5.3098 16.586 4.98157 16.4605C4.65335 16.335 4.35528 16.1417 4.1068 15.8932C3.85832 15.6447 3.66502 15.3467 3.5395 15.0184C3.41398 14.6902 3.35906 14.3392 3.37833 13.9884L3.42666 13.1134C3.43348 12.9886 3.41215 12.8639 3.36426 12.7485C3.31637 12.6331 3.24314 12.53 3.15 12.4467L2.49833 11.8634C2.23631 11.6289 2.02671 11.3417 1.88321 11.0207C1.7397 10.6997 1.66553 10.3521 1.66553 10.0004C1.66553 9.64882 1.7397 9.30115 1.88321 8.98014C2.02671 8.65913 2.23631 8.37201 2.49833 8.13752L3.15 7.55419C3.24325 7.47082 3.31655 7.36754 3.36444 7.25198C3.41234 7.13643 3.4336 7.01158 3.42666 6.88669L3.37833 6.01169C3.35906 5.66081 3.41398 5.30982 3.5395 4.9816C3.66502 4.65338 3.85832 4.3553 4.1068 4.10683C4.35528 3.85835 4.65335 3.66504 4.98157 3.53952C5.3098 3.414 5.66079 3.35908 6.01166 3.37835L6.88666 3.42669C7.01142 3.4335 7.13611 3.41217 7.25151 3.36428C7.3669 3.31639 7.47006 3.24316 7.55333 3.15002L8.1375 2.49835ZM13.0892 6.91085C13.2454 7.06713 13.3332 7.27905 13.3332 7.50002C13.3332 7.72099 13.2454 7.93291 13.0892 8.08919L8.08916 13.0892C7.932 13.241 7.72149 13.325 7.503 13.3231C7.2845 13.3212 7.07549 13.2335 6.92098 13.079C6.76648 12.9245 6.67884 12.7155 6.67694 12.497C6.67504 12.2785 6.75903 12.068 6.91083 11.9109L11.9108 6.91085C12.0671 6.75463 12.279 6.66687 12.5 6.66687C12.721 6.66687 12.9329 6.75463 13.0892 6.91085ZM7.91667 6.66669C7.58514 6.66669 7.2672 6.79838 7.03278 7.0328C6.79836 7.26722 6.66667 7.58517 6.66667 7.91669V7.92502C6.66667 8.25654 6.79836 8.57448 7.03278 8.80891C7.2672 9.04333 7.58514 9.17502 7.91667 9.17502H7.925C8.25652 9.17502 8.57446 9.04333 8.80888 8.80891C9.0433 8.57448 9.175 8.25654 9.175 7.92502V7.91669C9.175 7.58517 9.0433 7.26722 8.80888 7.0328C8.57446 6.79838 8.25652 6.66669 7.925 6.66669H7.91667ZM12.0833 10.8334C11.7518 10.8334 11.4339 10.9651 11.1994 11.1995C10.965 11.4339 10.8333 11.7518 10.8333 12.0834V12.0917C10.8333 12.4232 10.965 12.7412 11.1994 12.9756C11.4339 13.21 11.7518 13.3417 12.0833 13.3417H12.0917C12.4232 13.3417 12.7411 13.21 12.9755 12.9756C13.21 12.7412 13.3417 12.4232 13.3417 12.0917V12.0834C13.3417 11.7518 13.21 11.4339 12.9755 11.1995C12.7411 10.9651 12.4232 10.8334 12.0917 10.8334H12.0833Z" fill="white"/>
                                             </svg>

                                             <div class="flex flex-col items-center">
                                                  <span class="w-[100%] leading-[initial] text-left">0%</span>
                                                  <span class="uppercase leading-[initial] text-[#AAA]">пополнений</span>
                                             </div>

                                        </button>
                                   </div>

                                   <!-- refferal system -->
                                   <div>
                                        <h3 class="text-[.625rem] text-center mb-[.25rem] leading-none">Реферальная система</h3>

                                        <button style="background: linear-gradient(90deg, #76A0FF 0%, #0167C6 88.54%, #0167C6 100%);" class="h-[1.5625rem] w-[100%] rounded-[.3125rem] text-[.625rem]">Перейти</button>
                                   </div>

                                   <div class="flex items-center gap-[.3125rem] mt-[.9375rem]">
                                        <div style="border: .0625rem solid #3870FF;" id="copyRef" class="w-[100%] text-[.5625rem] flex items-center h-[1.25rem] px-2.5 bg-[#16181B] rounded-[.3125rem]">{{ r }}</div>

                                        <button style="background: linear-gradient(135deg, #0D6CCB 0%, #729EFD 100%);" type="button" class="w-[1.25rem] h-[1.25rem] rounded-[.3125rem] flex items-center justify-center" @click="copyText">
                                             <img src="/svg/copy.svg" class="w-[.875rem] h-[.875rem]" alt="copy" v-if="c === 'COPY'">
                                             <img src="/svg/checkmark-icon.svg" class="w-[.875rem] h-[.875rem]"  alt="checkmark" v-else-if="c === 'OK'">
                                        </button>
                                   </div>
                              </div>

                              <!-- level -->
                              <div class="bg-[#16181B] py-[1.0625rem] rounded-[.9375rem]">
                                   <div class="flex shrink-0 flex-col rounded-3xl bg-gradient-var ">
                                        <div class="relative  mx-auto w-[5rem]">
                                        <svg viewBox="0 0 36 36" class="w-full fill-none">
                                             <path stroke="#3870FF80" stroke-width="3" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"></path>8
                                        </svg>
          
                                        <div class="absolute inset-0 flex items-center justify-center text-3xl font-bold">1</div>
                                        
                                        </div>
                                   
                                        <div class="mt-1 text-center text-[1.125rem] uppercase">Уровень</div>
                                        <div class="mt-auto pt-2 text-center leading-none">
                                             <div class="pb-0.5 text-center font-semibold text-[#3870FF] text-[.75rem] md:text-[.875rem]">0.00$ / 
                                                  <span class="text-[#3870FF]">200.00$</span>
                                             </div>
                                             <div class="text-nano uppercase text-white text-[.75rem] md:text-[.875rem]">До нового уровня</div>
                                        </div>
                                   </div>
                              </div>

                              <!-- reffral -->
                              <div class="col-span-2 hidden md:grid gap-[.9375rem]">
                                   <div class="bg-[#16181B] rounded-[.9375rem] py-[.9375rem] px-[1.25rem]">
                                        <span class="text-[1.25rem] flex items-center">Рефералы <span class="block ml-1 text-center leading-[1.5] text-[.8125rem] h-[1.125rem] w-[2.0625rem] bg-[#3870FF] rounded-[.3125rem]">23</span> </span>

                                        <div class="flex items-center gap-[.625rem] mt-[1rem]">
                                             <div style="border: .0625rem solid #3870FF;" id="copyRef" class="w-[100%] text-[.875rem] flex items-center h-[2.5rem] px-2.5 bg-[#16181B] rounded-[.625rem]">{{ r }}</div>

                                             <button style="background: linear-gradient(135deg, #0D6CCB 0%, #729EFD 100%);" type="button" class=" rounded-[.625rem] p-[.5rem] flex items-center justify-center" @click="copyText">
                                                  <img src="/svg/copy.svg" class="w-[1.3125rem] h-[1.3125rem]" alt="copy" v-if="c === 'COPY'">
                                                  <img src="/svg/checkmark-icon.svg" class="w-[1.3125rem] h-[1.3125rem]"  alt="checkmark" v-else-if="c === 'OK'">
                                             </button>
                                        </div>
                                   </div>

                                   <div class="grid grid-cols-3 gap-[.625rem]">
                                   
                                        <div class="bg-[#16181B] leading-[normal] items-center flex gap-2 p-3.5 rounded-[.9375rem]">
                                             <img src="/svg/money-filled.svg" alt="filled">

                                             <div class="flex flex-col">
                                                  <span class="text-[.6875rem] text-[#FFF]">0$</span>
                                                  <span class="text-[.6875rem] text-[#AAA]">ПОПОЛНЕНИЙ</span>
                                             </div>
                                        </div>
                                        <div class="bg-[#16181B] leading-[normal] items-center flex gap-2 p-3.5 rounded-[.9375rem]">
                                             <img src="/svg/discount.svg" alt="discount">

                                             <div class="flex flex-col text-[.6875rem]">
                                                  <span class="text-[.6875rem] text-[#FFF]">1$</span>
                                                  <span class="text-[.6875rem] text-[#AAA]">РЕФ. БОНУС</span>
                                             </div>
                                        </div>
                                        <div class="bg-[#16181B] leading-[normal] items-center flex gap-2 p-3.5 rounded-[.9375rem]">
                                             <img src="/svg/wallet.svg" alt="wallet">

                                             <div class="flex flex-col">
                                                  <span class="text-[.6875rem] text-[#FFF]">0.00$</span>
                                                  <span class="text-[.6875rem] text-[#AAA]">РЕФ. БАЛАНС</span>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                         
                         <router-view></router-view>
                    </div>
               </div>

               <div>
                    <div class="md:flex hidden gap-[.3125rem] mb-[.9375rem]"> 
                         <img src="/svg/baseline.svg" alt="baseline">
                         <span class="text-[#3F4041] text-[1.5rem] font-['Gilroy-Medium']">Настройки</span>
                    </div>

                    <div class="grid gap-[.625rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                         <div class="rounded-[.9375rem] max-w-[100%] flex gap-[.625rem] md:gap-[1.25rem] py-4 px-5 bg-[#16181B]">
                              <img class="object-contain" src="/svg/settings/notification.png" alt="notification">

                              <div class="flex flex-col gap-2">
                                   <span class="sm:text-[1rem]">Уведомления</span>
                                   <button class="rounded-[.3125rem] text-[#4277FF] text-[.75rem] bg-[#3D74FF78] w-[6.5625rem] h-[1.25rem]">Выключены</button>
                              </div>
                         </div>
                         <div class="rounded-[.9375rem] max-w-[100%] flex gap-[.625rem] md:gap-[1.25rem] py-4 px-5 bg-[#16181B] ">
                              <img src="/svg/settings/steam.svg" alt="steam">
                         
                              <div class="flex flex-col gap-2">
                                   <span class="sm:text-[1rem]">Steam Аккаунт</span>
                                   <button class="rounded-[.3125rem] text-[#4277FF] text-[.75rem] bg-[#3D74FF78] w-[6.5625rem] h-[1.25rem]">Не привязан</button>
                              </div>
                         </div>
                         <div class="rounded-[.9375rem] max-w-[100%] flex gap-[.625rem] md:gap-[1.25rem] py-4 px-5 bg-[#16181B]">
                              <img src="/svg/settings/telegram.svg" alt="telegram">

                              <div class="flex flex-col gap-2">
                                   <span class="sm:text-[1rem]">Telegram Аккаунт</span>
                                   <button class="rounded-[.3125rem] text-[#4277FF] text-[.75rem] bg-[#3D74FF78] w-[6.5625rem] h-[1.25rem]">Не привязан</button>
                              </div>
                         
                         </div>
                         <div class="rounded-[.9375rem] max-w-[100%] flex gap-[.625rem] md:gap-[1.25rem] py-4 px-5 bg-[#16181B]">
                              <img src="/svg/settings/vk.svg" alt="vk">
                         
                              <div class="flex flex-col gap-2">
                                   <span class="sm:text-[1rem]">Telegram Аккаунт</span>
                                   <button class="rounded-[.3125rem] text-[#4277FF] sm:text-[.75rem] bg-[#3D74FF78] w-[6.5625rem] h-[1.25rem]">Не привязан</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <ModelTradeUrl :isVisibleTradeurl="isVisibleTradeurl" @close-trade="toggleTrade"/>
     </div> 
</template>

<script setup>
     import { ref, watch } from 'vue';
     import { useRoute, useRouter } from 'vue-router';

     import ModelTradeUrl from '@/components/ModelTradeUrl.vue';

     const route = useRoute();
     const router = useRouter();

     const isVisibleTradeurl = ref(false);

     const c = ref('COPY');
     const r = ref('https:/cyrexup.com/ref/lk423s');

     const b = ref(0);
     const w = ref(128.75);

     const copyText = () => {

          const tempInput = document.createElement('input');

          tempInput.value = r.value;

          document.body.appendChild(tempInput);
          tempInput.select();

          document.execCommand('copy');
          document.bodyNaNpxoveChild(tempInput);

          c.value = 'OK'


          setTimeout(() => {
               c.value = 'COPY';
          }, 3000);
     };
     
     const toggleTrade = () => {
          isVisibleTradeurl.value = !isVisibleTradeurl.value;

          if (isVisibleTradeurl.value) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = '';
          }
     };
     
     const handleButtonClick = (count, width) => {
          b.value = count;
          w.value = width;
     };

</script>