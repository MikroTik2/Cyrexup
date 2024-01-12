<template>
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
    delay: 20000,
    disableOnInteraction: false,
    }"
    :pagination="{
    clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    >
      <swiper-slide><img class="w-full" src="/img/banner.jpg" alt="snowman"></swiper-slide>
      <swiper-slide><img class="w-full" src="/img/banner.jpg" alt="snowman"></swiper-slide><swiper-slide><img class="w-full" src="/img/banner.jpg" alt="snowman"></swiper-slide>
    </swiper>
  </template>
<script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

 // Import Swiper styles
 import 'swiper/css';

 import 'swiper/css/pagination';

 // import required modules
 import { Autoplay, Pagination,} from 'swiper/modules';

 export default {
   components: {
     Swiper,
     SwiperSlide,
   },
   setup() {
     return {
       modules: [Autoplay, Pagination,],
     };
   },
 };
</script>
