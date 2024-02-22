<template>
  <div class="bg-[#16181B] rounded-[.9375rem] w-full overflow-hidden h-[307px]">
    <div class="sticky top-0 py-3 px-4 bg-[#1A1D21] rounded-t-[.9375rem] z-10 shadow-md">
      <ul class="text-[#ffffff99] grid grid-cols-5">
        <li class="text-sm" v-for="header in headers" :key="header">{{ header }}</li>
      </ul>
    </div>
    <div class="relative z-0 max-h-[307px] overflow-y-auto">
      <Withdrawal v-for="index in 100" :key="index" />
    </div>
  </div>
</template>

<script setup>
import Withdrawal from '@/components/Withdrawal.vue';

const headers = ['ID', 'ДАТА', 'ПЛАТФОРМА', 'СУММА', 'СТАТУС'];
</script>
