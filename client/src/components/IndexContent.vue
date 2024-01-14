<template>
    <div class="w-full mx-auto">
         <SliderIndex class="2xl:w-[90rem]  sm:min-w-[15rem]"/>
         <div class="max-w-full mx-auto w-[90rem] grid xl:grid-cols-2 gap-2.5 md:gap-[.9375rem] mt-2">
              <div class="w-full bg-[#16191B] p-5 rounded-[.625rem] mx-auto overflow-hidden">
                   <div class="grid w-[12.5rem] sm:w-[17.625rem] md:w-[25.9375rem] ">
                        <!-- title -->
                        <h2 class="text-[.8125rem] sm:text-[.9375rem] md:text-[1.875rem] font-bold">Активные конкурсы</h2>
                        <!-- desc -->
                        <p class="text-[.375rem] sm:text-[.5rem]  md:text-[.875rem] text-[var(--gray-800)] mt-[.1875rem] sm:mt-[.3125rem] lg:mr-2.5">Сейчас имеется 3 интереснейших конкурса с полезными призами, которые точно вас заинтересуют. Мы предлагаем один ежемесячный, еженедельный и ежедневный конкурс, а точнее ваш уникальный шанс получить награду. Для этого вам всего лишь нужно выполнить легчайшие условия, которые точно всем под силу. Дальше дело за малым. Просто нужно набраться немного терпения, уверенности и удачи для получения желаемого приза.</p>
                        <!-- timer-title -->
                        <h2 class="text-[.5625rem] sm:text-xs md:text-[1.0625rem] font-bold mt-1 sm:mt-2.5 md:mt-[1.5625rem]">Время до обновления ежемечного конкурса:</h2>
                        <!-- timer -->
                        <div class="flex items-center gap-2.5 mt-1 md:mt-2.5">
                             <img class="w-3.5  md:w-6 md:h-6" src="/svg/clock.svg" alt="timer">
                             <p class="text-[.625rem] sm:text-xs md:text-[1.125rem] font-bold ">03д  <span class="text-neutral-600 font-bold">:</span>  02ч  <span class="text-neutral-600">:</span>  33м  <span class="text-neutral-600">:</span>  45с</p>
                        </div>
                        <!-- line-timer -->
                        <img class="w-[12.5rem] sm:w-[14rem] md:w-[17.4375rem] h-[.3125rem] mt-3 md:mt-[1.25rem]" src="/svg/line-timer.svg" alt="timer">
                        <!-- button -->
                        <button class="w-[6.25rem] sm:w-[8.125rem] md:w-[10.3125rem] h-[1.5625rem] sm:h-[1.875rem] md:h-[2.5rem] text-blue-500 bg-[#1E2024] justify-center flex items-center gap-[.1875rem] rounded-[.3125rem] font-bold text-[.625rem] sm:text-xs md:text-[.9375rem] mt-2.5 md:mt-[2.1875rem]">
                             <p>Участвовать</p>
                             <img class="w-[.8125rem] sm:w-[1.125rem]" src="/svg/arrow.svg" alt="arrow">
                        </button>
                        <!-- <div class="max-w-full w-">
                             <SliderItems/>
                        </div> -->
                   </div>
              </div>
              <div class="w-full bg-[#16191B] rounded-[.625rem] mx-auto mt-1 md:mt-0 p-[.625rem] md:p-[.9375rem] lg:p-[1.25rem]">
              <!-- title -->
                   <img src="/svg/top-icon.svg" alt="top" class="w-[200px] h-[37px] sm:w-[17.4375rem] sm:h-[3.0625rem] mx-auto">
              <!-- item -->
              <div class="grid grid-cols-3 gap-2 md:gap-5 mx-auto w-full mt-2 sm:mt-2.5">
                   <IndexItem/>
                   <IndexItem/>
                   <IndexItem/>
              </div>
          </div>
         </div>
    </div>
</template>
<script setup>
    import SliderIndex from '@/components/SliderIndex.vue';
    import SliderItems from '@/components/SliderItems.vue';
    import IndexItem from '@/components/IndexItem.vue';
    import Button from '@/components/button/Button.vue';

const props = defineProps({
    colorLink: String,
});
</script>