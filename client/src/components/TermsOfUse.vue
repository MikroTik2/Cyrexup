<template>
    <swiper
      :direction="'vertical'"
      :slidesPerView="'auto'"
      :freeMode="true"
      :scrollbar="true"
      :mousewheel="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        
      </swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/free-mode';
    import 'swiper/css/scrollbar';
  
    import './style.css';
  
    // import required modules
    import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [FreeMode, Scrollbar, Mousewheel],
        };
      },
    };
  </script>
  