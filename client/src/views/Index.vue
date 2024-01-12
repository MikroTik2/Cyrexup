<template>
     <div class="w-full mx-auto">
          <SliderIndex class="2xl:w-[1440px] min-w-[220px]"/>
          <div class="max-w-full mx-auto w-[1440px] grid xl:grid-cols-2 gap-2.5 md:gap-[15px] mt-2">
               <div class="w-full bg-[#16191B] p-2.5 rounded-[10px] mx-auto">
                    <div class="grid w-[200px] sm:w-[282px] md:w-[415px]">
                         <!-- title -->
                         <h2 class="text-[13px] sm:text-[15px] md:text-[30px] font-bold">Активные конкурсы</h2>
                         <!-- desc -->
                         <p class="text-[6px] sm:text-[8px]  md:text-[14px] text-[var(--gray-800)] mt-[3px] sm:mt-[5px] lg:mr-2.5">Сейчас имеется 3 интереснейших конкурса с полезными призами, которые точно вас заинтересуют. Мы предлагаем один ежемесячный, еженедельный и ежедневный конкурс, а точнее ваш уникальный шанс получить награду. Для этого вам всего лишь нужно выполнить легчайшие условия, которые точно всем под силу. Дальше дело за малым. Просто нужно набраться немного терпения, уверенности и удачи для получения желаемого приза.</p>
                         <!-- timer-title -->
                         <h2 class="text-[9px] sm:text-xs md:text-[17px] font-bold mt-1 sm:mt-2.5 md:mt-[25px]">Время до обновления ежемечного конкурса:</h2>
                         <!-- timer -->
                         <div class="flex items-center gap-2.5 mt-1 md:mt-2.5">
                              <img class="w-3.5  md:w-6 md:h-6" src="/svg/clock.svg" alt="timer">
                              <p class="text-[10px] sm:text-xs md:text-[18px] font-bold ">03д  <span class="text-[var(--gray-900)] font-bold">:</span>  02ч  <span class="text-[var(--gray-900)]">:</span>  33м  <span class="text-[var(--gray-900)]">:</span>  45с</p>
                         </div>
                         <!-- line-timer -->
                         <img class="w-[200px] sm:w-[224px] md:w-[279px] h-[5px] mt-3 md:mt-[20px]" src="/svg/line-timer.svg" alt="timer">
                         <!-- button -->
                         <button class="w-[100px] sm:w-[130px] md:w-[165px] h-[25px] sm:h-[30px] md:h-[40px] text-[var(--blue-400)] bg-[var(--black-400)] justify-center flex items-center gap-[3px] rounded-[5px] font-bold text-[10px] sm:text-xs md:text-[15px] mt-2.5 md:mt-[35px]">
                              <p>Участвовать</p>
                              <img class="w-[13px] sm:w-[18px]" src="/svg/arrow.svg" alt="arrow">
                         </button>
                         <!-- <div class="max-w-full w-">
                              <SliderItems/>
                         </div> -->
                    </div>
               </div>
               <div class="w-full w xl:w-[760px] bg-[#16191B] rounded-[10px] mx-auto mt-1 md:mt-0 p-[10px] md:p-[15px] lg:p-[20px]">
               <!-- title -->
               <div class="w-full mx-auto">
                    <h2 class="text-[10px] sm:text-[15px] md:text-[25px] lg:text-[30px] text-3xl font-extrabold uppercase text-center mb-[10px]">Топ игроков</h2>
                    <!-- absolute block top-[60%] left-[35%] xl:left-[35%] oriin-[50%_50%] -->
               </div>
               <!-- item -->
               <div class="inline-flex gap-5 mx-auto w-full">
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