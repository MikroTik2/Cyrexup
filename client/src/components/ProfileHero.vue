<template>
     <div class="m-auto max-w-[1165px] mt-[65px]">
          <div class="flex flex-col gap-[25px]">
               <div class="grid-cols-12">

                    <!-- routes mobile -->
                    <div class="no-scrollbar grow relative bg-[#16181B] h-[50px] z-1 max-w-full rounded-[15px] overflow-auto whitespace-nowrap text-tiny font-bold max-lg:rounded-lg] max-lg:only:pr-0 lg:overflow-visible lg:bg-transparent flex lg:hidden">

                         <div
                              role="presentation"
                              class="absolute inset-y-0 left-0 z-[1] rounded-lg bg-[#3D74FF] transition-all ease-in duration-100"
                              :style="{ transform: `translateX(${b}px)`, width: `${w}px` }">
                         </div>

                         <router-link @click="handleButtonClick(0, 128.75)" to="/profile" class="z-10 px-[15px] mr-8 gap-[3px] text-[18px] flex items-center">
                              <img src="/svg/routes/profile-icon.svg" alt="profile">

                              <span class="leading-[normal]">Профиль</span>
                         </router-link>

                         <router-link @click="handleButtonClick(126, 146.83)" to="/profile/inventory" class="z-10 gap-[3px] text-[18px] flex items-center">
                              <img src="/svg/routes/inventory-icon.svg" alt="inventory">

                              <span class="leading-[normal]">Инвентарь</span>
                         </router-link>

                         <div @click="handleButtonClick(276, 118.59)" to="/profile/conclusions" class="z-10 gap-[3px] text-[18px] flex items-center">
                              <img src="/svg/routes/arrow-up-icon.svg" alt="arrow-up">

                              <span class="leading-[normal]">Выводы</span>
                         </div>

                         <div @click="handleButtonClick(394, 165.03)" to="/profile/referral" class="z-10 gap-[3px] text-[18px] flex items-center">
                              <img src="/svg/routes/users-icon.svg" alt="users-ref">

                              <span class="leading-[normal]">Реф. система</span>
                         </div>

                         <div @click="handleButtonClick(559, 158.23)" to="/profile/history" class="z-10 gap-[3px] text-[18px] flex items-center">
                              <img src="/svg/routes/history-icon.svg" alt="history">

                              <span class="leading-[normal]">История игр</span>
                         </div>
                    </div>

                    <!-- Profile info -->
                    <div class="rounded-[15px] h-[100%] w-[100%] bg-[#16181B] px-6 py-4">
                         
                         <!-- profile avatar & id -->
                         <div class="flex justify-between">

                              <div class="flex gap-2.5 items-center">
                                   <img src="https://avatars.githubusercontent.com/u/111369356?v=4" alt="photo" loading="lazy" width="46" height="46" class="w-[45px] h-[45px] rounded-[100px] border-none object-cover">

                                   <div class="flex flex-col">
                                        <span class="" style="line-height: 1rem;">Чемпион</span>
                                        <span>1 500<span>$</span></span>
                                   </div>
                              </div>

                              <div class="text-right flex flex-col">
                                   <span>ID</span>
                                   <span>#14223</span>
                              </div>
                         
                         </div>

                         <!-- balance & trade url -->
                         <button type="button" style="background: linear-gradient(265deg, #237249 6.79%, #35C66B 97.2%);" class="rounded-[15px] w-[100%] mt-4 h-[45px] flex items-center justify-center opacity-100 transition duration-150 ease-in-out hover:opacity-70">ПОПОЛНИТЬ</button>
                         <button type="button" class="relative mt-2.5 flex items-center justify-between border-dashed border-[0.5px] px-2.5 text-[#3D74FF] text-[12px] w-[100%] gap-1 h-[30px] rounded-[8px] border-[#3D74FF]">
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
                                   <h3 class="font-[Gilroy-Bold] text-[15px]">Промокод</h3>
                              </div>

                              <input style="padding: 8px 0 8px 5px;" type="text" class="rounded-[5px] text-[#484848] text-[12px] mt-3 mb-2 h-[30px] bg-[#202124] outline-none" placeholder="Введите промокод" >
                              <button type="button" style="background: linear-gradient(90deg, #76A0FF 0%, #0167C6 88.54%, #0167C6 100%);" class="btn px-2.5 rounded-[5px] flex justify-between items-center h-[35px] opacity-100 transition duration-150 ease-in-out hover:opacity-70">
                              
                                   Активировать
                                   <img src="/svg/checkmark-icon.svg" alt="checkmark">
                              
                              </button>
                         </div>
                    
                    </div>

                    <!-- analytics -->
                    <div class="rounded-[15px] flex flex-col gap-[15px] w-[100%]">
                         
                         <!-- routes -->
                         <div class="rounded-[15px] relative bg-[#16181B] h-[50px] hidden overflow-auto whitespace-nowrap lg:flex">

                              <div
                                   role="presentation"
                                   class="absolute inset-y-0 left-0 z-[1] rounded-lg bg-[#3D74FF] transition-all ease-in duration-100"
                                   :style="{ transform: `translateX(${b}px)`, width: `${w}px` }">
                              </div>
                         
                              <router-link @click="handleButtonClick(0, 128.75)" to="/profile" class="z-10 px-[15px] text-[18px] flex just items-center">
                                   <img src="/svg/routes/profile-icon.svg" alt="profile">

                                   <span class="leading-[normal]">Профиль</span>
                              </router-link>
                              <!-- active-class="bg-[#3D74FF] rounded-[8px]" -->
                              <router-link @click="handleButtonClick(129, 146.83)" to="/profile/inventory" class=" z-10 px-[15px] text-[18px] flex items-center">
                                   <img src="/svg/routes/inventory-icon.svg" alt="inventory">

                                   <span class="leading-[normal] ml-[3px]">Инвентарь</span>
                              </router-link>

                              <div @click="handleButtonClick(275.5, 118.59)" to="/profile/conclusions" class="z-10 px-[15px] text-[18px] flex items-center">
                                   <img src="/svg/routes/arrow-up-icon.svg" alt="arrow-up">

                                   <span class="leading-[normal ml-[3px]">Выводы</span>
                              </div>

                              <div @click="handleButtonClick(394, 165.03)" to="/profile/referral" class="z-10 px-[15px] text-[18px] flex items-center">
                                   <img src="/svg/routes/users-icon.svg" alt="users-ref">

                                   <span class="leading-[normal] ml-[3px]">Реф. система</span>
                              </div>

                              <div @click="handleButtonClick(558.5, 158.23)" to="/profile/history" class="z-10 px-[15px] text-[18px] flex items-center">
                                   <img src="/svg/routes/history-icon.svg" alt="history">

                                   <span class="leading-[normal] ml-[3px]">История игр</span>
                              </div>
                         
                         </div>

                         <!-- analytics user -->
                         <div class="flex justify-between gap-[10px]" v-if="route.path !== '/profile/inventory'"> 
                              <div class="rounded-[15px] gap-[20px] flex bg-[#16181B] w-[100%] p-6">
                                   <img src="/svg/controller.svg" alt="controller">

                                   <div class="flex flex-col ">
                                        <span class="mb-[-10px] text-[25px] font-[Gilroy-Bold]"> {{ game }} 4 </span>
                                        <span class="text-[#414141] ">Игр сыграно</span>
                                   </div>
                              </div>

                              <div class="rounded-[15px] gap-[20px] flex bg-[#16181B] w-[100%] p-6">
                                   <img src="/svg/money.svg" alt="money-sum">

                                   <div class="flex flex-col ">
                                        <span class="mb-[-10px] text-[25px] font-[Gilroy-Bold]"> {{ game }} 12 </span>
                                        <span class="text-[#414141] ">Сумма выигрышей</span>
                                   </div>
                              </div>

                              <div class="rounded-[15px] gap-[20px] flex bg-[#16181B] w-[100%] p-6">
                                   <img src="/svg/money-bag.svg" alt="money-bag">

                                   <div class="flex flex-col ">
                                        <span class="mb-[-10px] text-[25px] font-[Gilroy-Bold]"> {{ game }} 7 </span>
                                        <span class="text-[#414141] ">Топ выигрыш</span>
                                   </div>
                              </div>

                         </div>

                         <div class="grid grid-cols-3 h-[200px]  gap-[10px] leading-6" v-show="route.path !== '/profile/inventory'">
                              <div class="bg-[#16181B] py-[17px] rounded-[15px]">
                                   <div class="flex shrink-0 flex-col rounded-3xl bg-gradient-var ">
                                        <div class="relative  mx-auto w-[80px]">
                                        <svg viewBox="0 0 36 36" class="w-full fill-none">
                                             <path stroke="#3870FF80" stroke-width="3" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"></path>8
                                        </svg>
          
                                        <div class="absolute inset-0 flex items-center justify-center text-3xl font-bold">1</div>
                                        
                                        </div>
                                   
                                        <div class="mt-1 text-center text-[18px] uppercase">Уровень</div>
                                        <div class="mt-auto pt-2 text-center">
                                             <div class="pb-0.5 text-center font-semibold text-[#3870FF]">0.00$ / 
                                                  <span class="text-[#3870FF]">200.00$</span>
                                             </div>
                                             <div class="text-nano uppercase text-white">До нового уровня</div>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-span-2 grid gap-[15px]">
                                   <div class="bg-[#16181B] rounded-[15px] py-[15px] px-[20px]">
                                        <span class="text-[20px] flex items-center">Рефералы <span class="block ml-1 text-center leading-[1.5] text-[13px] h-[18px] w-[33px] bg-[#3870FF] rounded-[5px]">23</span> </span>

                                        <div class="flex items-center gap-[10px] mt-[16px]">
                                             <div style="border: 1px solid #3870FF;" id="copyRef" class="w-[100%] text-[14px] flex items-center h-[40px] px-2.5 bg-[#16181B] rounded-[10px]">{{ r }}</div>

                                             <button style="background: linear-gradient(135deg, #0D6CCB 0%, #729EFD 100%);" type="button" class=" rounded-[10px] p-[8px] flex items-center justify-center" @click="copyText">
                                                  <img src="/svg/copy.svg" class="w-[21px] h-[21px]" alt="copy" v-if="c === 'COPY'">
                                                  <img src="/svg/checkmark-icon.svg" class="w-[21px] h-[21px]"  alt="checkmark" v-else-if="c === 'OK'">
                                             </button>
                                        </div>
                                   </div>

                                   <div class="grid grid-cols-3 gap-[10px]">
                                   
                                        <div class="bg-[#16181B] leading-[normal] items-center flex gap-2 p-3.5 rounded-[15px]">
                                             <img src="/svg/money-filled.svg" alt="filled">

                                             <div class="flex flex-col">
                                                  <span class="text-[11px] text-[#FFF]">0$</span>
                                                  <span class="text-[11px] text-[#AAA]">ПОПОЛНЕНИЙ</span>
                                             </div>
                                        </div>
                                        <div class="bg-[#16181B] leading-[normal] items-center flex gap-2 p-3.5 rounded-[15px]">
                                             <img src="/svg/discount.svg" alt="discount">

                                             <div class="flex flex-col text-[11px]">
                                                  <span class="text-[11px] text-[#FFF]">1$</span>
                                                  <span class="text-[11px] text-[#AAA]">РЕФ. БОНУС</span>
                                             </div>
                                        </div>
                                        <div class="bg-[#16181B] leading-[normal] items-center flex gap-2 p-3.5 rounded-[15px]">
                                             <img src="/svg/wallet.svg" alt="wallet">

                                             <div class="flex flex-col">
                                                  <span class="text-[11px] text-[#FFF]">0.00$</span>
                                                  <span class="text-[11px] text-[#AAA]">РЕФ. БАЛАНС</span>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>

                         <router-view></router-view>
                    </div>
               </div>

               <div>
                    <div class="flex gap-[5px] mb-[15px]"> 
                         <img src="/svg/baseline.svg" alt="baseline">
                         <span class="text-[#3F4041] text-[24px] font-['Gilroy-Medium']">Настройки</span>
                    </div>

                    <div class="grid gap-[10px] grid-cols-2 lg:grid-cols-4">
                         <div class="rounded-[15px] flex gap-6 py-4 px-5 bg-[#16181B]">
                              <img class="object-contain" src="/svg/settings/notification.png" alt="notification">

                              <div class="flex flex-col gap-2">
                                   <span class="text=[16px]">Уведомления</span>
                                   <button class="rounded-[5px] text-[#4277FF] text-[12px] bg-[#3D74FF78] w-[105px] h-[22px]">Выключены</button>
                              </div>
                         </div>
                         <div class="rounded-[15px] flex gap-6 py-4 px-5 bg-[#16181B]">
                              <img src="/svg/settings/steam.svg" alt="steam">
                         
                              <div class="flex flex-col gap-2">
                                   <span class="text=[16px]">Steam Аккаунт</span>
                                   <button class="rounded-[5px] text-[#4277FF] text-[12px] bg-[#3D74FF78] w-[105px] h-[22px]">Не привязан</button>
                              </div>
                         </div>
                         <div class="rounded-[15px] flex gap-6 py-4 px-5 bg-[#16181B]">
                              <img src="/svg/settings/telegram.svg" alt="telegram">

                              <div class="flex flex-col gap-2">
                                   <span class="text=[16px]">Telegram Аккаунт</span>
                                   <button class="rounded-[5px] text-[#4277FF] text-[12px] bg-[#3D74FF78] w-[105px] h-[22px]">Не привязан</button>
                              </div>
                         
                         </div>
                         <div class="rounded-[15px] flex gap-6 py-4 px-5 bg-[#16181B]">
                              <img src="/svg/settings/vk.svg" alt="vk">
                         
                              <div class="flex flex-col gap-2">
                                   <span class="text=[16px]">Telegram Аккаунт</span>
                                   <button class="rounded-[5px] text-[#4277FF] text-[12px] bg-[#3D74FF78] w-[105px] h-[22px]">Не привязан</button>
                              </div>
                         </div>

                    </div>
               </div>
               
          </div>
     </div> 
</template>

<script setup>
     import { ref, watch } from 'vue';
     import { useRoute, useRouter } from 'vue-router';

     const route = useRoute();
     const router = useRouter();

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
          document.body.removeChild(tempInput);

          c.value = 'OK'


          setTimeout(() => {
               c.value = 'COPY';
          }, 3000);
     };
     
     const handleButtonClick = (count, width) => {
          b.value = count;
          w.value = width;
     };

</script>