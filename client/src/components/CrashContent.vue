<template>
    <div class="m-auto max-w-[1165px] mt-[65px]">
        <div class="grid-cols-6">

            <!-- crash -->
            <div class="rounded-[15px] bg-[#16191B] bg-cover p-[15px_20px]">
                
                <!-- x-value -->
                <h2 class="text-[50px] text-[#3D74FF] font-bold">x0.00</h2>
                <p class="text-[18px]">Общий банк: <span class="text-[#3D74FF] font-semibold">0.00$</span></p>

                <!-- x-rate -->
                <div><ul class="text-[14px] font-bold"><li class="text-[#FF3737]">1.20</li><li class="text-[#8F70F8]">1.31</li><li class="text-[#5590F0]">2.36</li><li class="text-[#359D5A]">6.45</li></ul></div>
            </div>

            <!-- bid -->
            <div class="relative bg-[#16191B] rounded-[15px] ">
                <img src="/img/crash-rate-light.png" alt="mac-10" class="absolute w-[220px] animate-pulse">
                <div class="float-left flex flex-col items-center m-2">
                    <img src="/img/MAC-10.png" alt="mac-10" class="w-[75%] md:w-[100%] mb-2">
                    <p class="text-[12px] md:text-[15px] font-black"><span class="text-orange-400">StatTrak™</span> MAC-10<br/> <span class="text-blue-400 px-5 md:px-6">Neon Rider</span></p>
                </div>
                <div class="float-right p-5">
                    <div class="flex mx-auto">
                        <h2 class="text-[20px] md:text-[50px] font-semibold">0.00</h2>
                        <img class="w-[15%] md:w-[25%]" src="/svg/arrow-right.svg" alt=">">
                        <h2 class="text-[20px] md:text-[50px] font-semibold">0.00</h2>
                    </div>
                    <div class="flex bg-[#1E2327] items-center justify-between rounded-[10px] px-3 py-2">
                        <p class="sm:text-sm md:text-xl font-bold">0$</p>

                        <div class="gap-1 md:gap-2 flex">
                            <button type="button" class="rounded-[5px] text-[12px] md:text-[16px] bg-[#272E33] px-1.5 py-0.5 md:px-3 md:py-1">1.5х</button>
                            <button type="button" class="rounded-[5px] text-[12px] md:text-[16px] bg-[#272E33] px-1.5 py-0.5 md:px-3 md:py-1">2х</button>
                            <button type="button" class="rounded-[5px] text-[12px] md:text-[16px] bg-[#272E33] px-1.5 py-0.5 md:px-3 md:py-1"><img src="/svg/edit.svg" alt="edit"></button>
                        </div>

                    </div>
                    <button type="button" style="background: linear-gradient(90deg, #3D74FF 0%, #497DFF 52.35%, #003EDC 99.72%);" class="py-3 mt-2 bg-gradient-to-r w-full rounded-[10px] justify-center items-center">Поставить</button>
                </div>
            </div>

            <!-- statistic -->
            <div class="bg-[#16191B] rounded-[15px] py-[15px] px-[20px]">
                <div class="flex justify-between">
                    <p class="text-xl font-bold">Статистика раунда</p>

                    <div class="flex gap-1">
                        <img src="/svg/crash_users.svg" alt="users">
                        <p class="text-xl font-bold">20</p>
                    </div>
                </div>
                <div class="w-full bg-[#1E2427] rounded-[10px] flex justify-between items-center p-[15px] mt-[13px]">
                    <div class="flex items-center gap-5">
                        <img src="/img/ava.png" alt="avatar">
                        <p class="text-lg font-extrabold">1500$</p>
                    </div>
                    <div class="flex gap-1">
                        <button type="button" class="bg-zinc-800 rounded-[5px] justify-center items-center py-1.5 px-2 text-base font-extrabold">
                            1500$
                        </button>
                        <button type="button" class="bg-red-500 bg-opacity-20 rounded-[5px] justify-center items-center text-red-500 text-base font-extrabold py-1.5 px-2">
                            1.06x
                        </button>
                    </div>
                </div>
                <div class="w-full bg-[#1E2427] rounded-[10px] flex justify-between items-center p-[15px] mt-[13px]">
                    <div class="flex items-center gap-5">
                        <img src="/img/ava.png" alt="avatar">
                        <p class="text-lg font-extrabold">1500$</p>
                    </div>
                        <button type="button" class="bg-zinc-800 rounded-[5px] justify-center items-center py-1.5 px-2 text-base font-extrabold">
                            В игре
                        </button>
                </div>
                <div class="w-full bg-[#1E2427] rounded-[10px] flex justify-between items-center p-[15px] mt-[13px]">
                    <div class="flex items-center gap-5">
                        <img src="/img/ava.png" alt="avatar">
                        <p class="text-lg font-extrabold">1500$</p>
                    </div>
                    <div class="flex gap-1">
                        <button type="button" class="bg-zinc-800 rounded-[5px] justify-center items-center py-1.5 px-2 text-base font-extrabold">
                            1500$
                        </button>
                        <button type="button" class="bg-green-400 bg-opacity-20 rounded-[5px] justify-center items-center text-green-400 text-base font-extrabold py-1.5 px-2">
                            1.06x
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- inventory -->
            <div class="rounded-[15px] bg-[#16191B] px-[20px] py-[15px]">
                <p class="text-xl font-bold">Ваш инвентарь</p>


                <!-- items -->


                <div class="flex gap-1 mt-1">
                    <button type="button" class="bg-blue-400 text-blue-400 text-lg font-semibold bg-opacity-20 rounded-[5px] w-full py-2">
                        Маркет
                    </button>
                    <button type="button" class="bg-[#6A6A6A33] text-neutral-500 text-lg font-semibold bg-opacity-20 rounded-[5px] w-full py-2">Обменять</button>
                </div>
            </div>

            <!-- footer -->
        </div>
    </div>
</template>
<script setup>

    

</script>
