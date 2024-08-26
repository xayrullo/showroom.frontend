<template>
  <div>
    <swiper
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="w-[100%] h-[100%]"
    >
      <swiper-slide v-for="(banner, ind) in banners" :key="ind">
        <img
          :src="banner.image"
          :alt="banner.title"
          class="w-full max-h-96 object-cover"
        />
        <div class="px-[24px] py-[32px] bg-black">
          <h1 class="font-bold text-[72px] leading-[86px] text-white font-sans">
            {{ banner.title }}
          </h1>
          <h5 class="font-bold text-[15px] leading-[22px] text-white w-[700px]">
            {{ banner.description }}
          </h5>
        </div>
      </swiper-slide>
    </swiper>
    <div class="bg-black z-100">
      <div></div>
      <div class="flex gap-[30px] items-center">
        <div class="flex">
          <h4 class="font-bold text-[16px] leading-[22px] text-white">
            {{ banners.length }}
          </h4>
          <h4 class="font-bold text-[16px] leading-[22px] text-white">|</h4>
          <h4 class="font-bold text-[16px] leading-[22px] text-white">2</h4>
        </div>
        <img src="/images/icons/pausaChevron.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import type { IBanner } from "@/types/home.ts";

const props = defineProps<{
  banners: IBanner[];
}>();

const modules = [Autoplay, Pagination, Navigation];
</script>
