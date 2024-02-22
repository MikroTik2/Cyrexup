<template>
  <div>
    <div :class="{ 'bg-[#292e3533]': isWinning, 'bg-[#16191B]': !isWinning }" class="grid grid-cols-1 md:grid-cols-5 py-3 px-4 items-center gap-2">
      <p class="font-semibold md:col-span-1">{{ element.id }}</p>
      <p class="text-[#ffffff99] col-span-2 md:col-span-1">{{ element.date }}</p>
      <p class="font-semibold text-start col-span-2 md:col-span-1">{{ element.platform }}</p>
      <p :style="{ 'text-shadow': isWinning ? '0px 0px 10px #239D5A80' : '0px 0px 10px #FF363680' }" class="text-start md:col-span-1" :class="{ 'text-[#359D5A]': isWinning, 'text-[#FF3636]': !isWinning }">{{ element.amount }}</p>
      <img :src="isWinning ? '/svg/win.svg' : '/svg/loss.svg'" :alt="isWinning ? 'win' : 'loss'" class="md:col-span-1" />
    </div>
  </div>
</template>

<script setup>
const element = {
  id: "320194342",
  date: "21.01.2021 14:50",
  platform: "Steam",
  amount: "21$",
};

const isWinning = true;
</script>
