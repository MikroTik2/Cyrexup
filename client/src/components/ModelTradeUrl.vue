<template>
  <div :class="['fixed top-0 right-0 left-0 bottom-0 z-50 max-w-full flex items-center justify-center transition-opacity duration-300 ease-in-out', { 'opacity-100': isVisibleTradeurl, 'opacity-0': !isVisibleTradeurl }]">
    <div :class="['w-[31.25rem] z-50 relative bg-[#141618] p-5 rounded-[.9375rem] transform transition-transform duration-300 ease-in-out', { 'scale-100': isVisibleTradeurl, 'scale-95': !isVisibleTradeurl }]" @click.stop>
      <span class="text-[1.125rem] mb-[.9375rem] block">Trader - URL ссылка</span>

      <form class="flex flex-col" @submit.prevent="saveTradeUrl">
        <div class="relative">
          <input type="text" style="border: .0313rem dashed #3D74FF;" class="h-[3.125rem] pl-10 outline-none w-full rounded-[.625rem] bg-transparent" />
          <img class="absolute left-[.625rem] top-[.75rem]" src="/svg/link.svg" alt="link" />
        </div>

        <span class="text-[#FFFFFF8F] text-[.75rem] mt-[.4375rem]">
          Ссылку на обмен можно получить в вашем профиле steam <span class="text-[#fff]">[тут]</span>
        </span>

        <button type="submit" style="background: linear-gradient(265deg, #237249 6.79%, #35C66B 97.2%);" class="text-[.875rem] transition duration-150 ease-in-out hover:opacity-70 mt-[.75rem] rounded-[.625rem] w-full flex items-center justify-center bg h-[2.8125rem]">
          СОХРАНИТЬ ССЫЛКУ НА ОБМЕН
        </button>
      </form>

      <button type="button" class="absolute top-2.5 right-2.5" @click="closeTrade">
        <img src="/svg/close-modal.svg" alt="close-modal" />
      </button>
    </div>

    <div class="bg-[#101113FA] z-[-5] fixed top-0 right-0 bottom-0 left-0 bg-opacity-50 h-screen" @click="closeTrade"></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { isVisibleTradeurl } = defineProps(['isVisibleTradeurl']);
const emit = defineEmits();

const closeTrade = () => emit('close-trade');
</script>
