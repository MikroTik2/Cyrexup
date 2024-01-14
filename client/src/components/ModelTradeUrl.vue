<template>
     <div class="fixed top-0 right-0 left-0 bottom-0 z-50 max-w-full flex items-center justify-center" v-show="isVisibleTradeurl">
          <div class="w-[500px] z-50 relative bg-[#141618] p-5 rounded-[15px]">
               <span class="text-[18px] mb-[15px] block">Trader - URL ссылка</span>

               <form class="flex flex-col">
                    <div class="relative">
                         <input type="text" style="border: 0.5px dashed #3D74FF;" class="h-[50px] pl-10 outline-none w-full rounded-[10px] bg-transparent">
                         <img class="absolute left-[10px] top-[12px]" src="/svg/link.svg" alt="link">
                    </div>

                    <span class="text-[#FFFFFF8F] text-[12px] mt-[7px]">Ссылку на обмен можно получить в вашем профиле steam <span class="text-[#fff]">[тут]</span></span>
                    <button type="submit" style="background: linear-gradient(265deg, #237249 6.79%, #35C66B 97.2%);" class="text-[14px] transition duration-150 ease-in-out hover:opacity-70 mt-[12px] rounded-[10px] w-full flex items-center justify-center bg h-[45px] ">СОХРАНИТЬ ССЫЛКУ НА ОБМЕН</button>
               </form>

               <button type="button" class="absolute top-2.5 right-2.5" @click="closeTrade">
                    <img src="/svg/close-modal.svg" alt="close-modal">
               </button>
          </div>

          <div class="bg-[#101113FA] fixed top-0 right-0 bottom-0 left-0 bg-opacity-50 h-[100svh]" @click="closeTrade">
          
          </div>
     </div>
</template>

<script setup> 
     const emit = defineEmits();
     const props = defineProps({
          isVisibleTradeurl: Boolean,
     });

     const closeTrade = () => {
          emit("close-trade");
     };
</script>

<style lang="scss" scoped>

</style>