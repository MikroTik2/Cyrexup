<template>
    <div class="m-auto max-w-[1165px] mt-[65px] grid grid-cols-6 gap-4">
  
      <!-- Column 1: Crash Info -->
      <div class="rounded-[15px] relative bg-[#16191B] bg-cover p-[15px_20px]">
        <h2 class="text-[50px] text-[#3D74FF] font-bold">x0.00</h2>
        <p class="text-[18px]">Общий банк: <span class="text-[#3D74FF] font-semibold">0.00$</span></p>
        <div class="text-[14px] font-bold grid gap-2">
          <span v-for="rate in [1.20, 1.31, 2.36, 6.45]" :key="rate" class="text-[#FF3737]">{{ rate }}</span>
        </div>
      </div>
  
      <!-- Column 2: Bid -->
      <div class="grid grid-cols-2 items-center bg-[#16191B] rounded-[15px] relative z-0">
        <div class="float-left w-max p-5">
            <img src="/img/MAC-10.png" alt="mac-10" class="w-[95%]">
            <p class="text-[10px] md:text-[12px] ml-4 font-black">
            <span class="text-orange-400">StatTrak™</span> MAC-10<br/>
            <span class="text-blue-400 px-5 md:px-6">Neon Rider</span>
            </p>
        </div>
        <img src="/img/crash-rate-light.png" alt="mac-10" class="absolute -z-10 w-[220px]">
        <div class="float-right p-5">
            <div class="flex mx-auto mb-1">
            <h2 class="text-[15px] md:text-[40px] font-semibold">0.00</h2>
            <img class="w-[5%] md:w-[25%]" src="/svg/arrow-right.svg" alt=">">
            <h2 class="text-[15px] md:text-[40px] font-semibold">0.00</h2>
            </div>
            <div class="flex bg-[#1E2327] items-center justify-between rounded-[10px] px-3 py-2">
            <p class="text-[12px] sm:text-sm md:text-xl font-bold">0$</p>
            <div class="gap-1 md:gap-2 flex">
                <button v-for="buttonLabel in ['1.5x', '2x', 'Edit']" :key="buttonLabel" type="button" class="rounded-[5px] text-[12px] font-semibold md:text-[16px] bg-[#272E33] px-1.5 py-0.5 md:px-3 md:py-1 transition duration-300 hover:bg-opacity-70">
                {{ buttonLabel }}
                </button>
            </div>
            </div>
            <button style="background: linear-gradient(90deg, #3D74FF 0%, #497DFF 52.35%, #003EDC 99.72%);"
                    class="py-3 mt-2 bg-gradient-to-r w-full rounded-[10px] justify-center items-center transition duration-300 hover:opacity-90">
            Поставить
            </button>
        </div>
        </div>

  
      <!-- Column 3: Round Stats -->
      <div class="bg-[#16191B] rounded-[15px] p-[15px]">
        <div class="flex justify-between">
          <p class="text-xl font-bold">Статистика раунда</p>
          <div class="flex gap-1">
            <img src="/svg/crash_users.svg" alt="users">
            <p class="text-xl font-bold">20</p>
          </div>
        </div>
        <div v-for="i in [1, 2, 3]" :key="i" class="w-full bg-[#1E2427] rounded-[10px] flex justify-between items-center p-[15px] mt-[13px]">
          <div class="flex items-center gap-5">
            <img src="/img/ava.png" alt="avatar">
            <p class="text-lg font-extrabold">1500$</p>
          </div>
          <button v-if="i !== 3" type="button" class="bg-zinc-800 rounded-[5px] justify-center items-center py-1.5 px-2 text-base font-extrabold">
            {{ i === 2 ? '1.06x' : '1500$' }}
          </button>
          <button v-else type="button" class="bg-green-400 bg-opacity-20 rounded-[5px] justify-center items-center text-green-400 text-base font-extrabold py-1.5 px-2">
            1.06x
          </button>
        </div>
      </div>
  
      <!-- Column 4: Inventory -->
      <div class="rounded-[15px] bg-[#16191B] px-[20px] py-[15px]">
        <p class="text-xl font-bold">Ваш инвентарь</p>
        <div class="flex relative gap-1 mt-1">
          <button type="button" class="bg-blue-400 text-blue-400 text-lg font-semibold bg-opacity-20 rounded-[5px] w-full py-2">
            Маркет
          </button>
          <button type="button" class="bg-[#6A6A6A33] text-neutral-500 text-lg font-semibold bg-opacity-20 rounded-[5px] w-full py-2">
            Обменять
          </button>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  
  </script>
  