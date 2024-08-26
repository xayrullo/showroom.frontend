<template>
  <div
    class="p-[72px] bg-[url('/images/mainBG.svg')] bg-[length:100%_100%] max-w-[1500px] w-full h-[800px] flex justify-between"
  >
    <div>
      <h1
        class="uppercase font-bold text-[64px] leading-[77.5px] max-w-[399px] font-sans"
      >
        {{ $t("CATEGORIES.COLLECTION") }}
      </h1>
      <RouterLink to="/products"
        ><button
          id="collection"
          class="w-[170px] h-[42px] rounded-[24px] bg-white"
        >
          <h4
            class="capitalize font-bold text-[15px] leading-[19.8px] bg-gradient-to-r from-pink-600 to-pink-900 bg-clip-text text-transparent"
          >
            {{ $t("COMMANDS.SEE_COLLECTION") }}
          </h4>
        </button></RouterLink
      >
    </div>
    <div class="felx flex-col max-w-[360px] w-full mt-[80px]">
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="max-w-[400px] w-full"
      >
        <swiper-slide
          class="flex flex-col max-w-[400px] w-full"
          v-for="cards in 4"
        >
          <RouterLink
            :to="{
              path: '/products',
            }"
          >
            <img src="/images/summerImg.svg" alt="IMG" />
            <div class="flex justify-between mt-[14px] w-[100%] px-[13px]">
              <h4 class="font-bold text-[14px] leading-[18.48px] text-black">
                Платье <span>SS24WBA-52155</span>
              </h4>
              <h4 class="font-bold text-[14px] leading-[18.48px] text-red-600">
                <span>120</span> <span>USD</span>
              </h4>
            </div>
          </RouterLink>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const modules = [EffectCards];
</script>
<style scoped>
.swiper {
  max-width: 400px;
  width: 100%;
  max-height: 470px;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
  background-color: white;
}
</style>
