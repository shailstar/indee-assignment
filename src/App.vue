<template>
  <div class="w-full bg-black h-full">
    <div class="text-white absolute z-50 top-5 left-5 text-lg">Indee</div>
    <Carousel
      :value="carouselData"
      :numVisible="1"
      :autoplay="true"
      :autoplayInterval="2"
      :numScroll="1"
      :showNavigators="false"
      width="100vw"
      :height="`${100 / 2.45}vw`"
    />
    <div class="flex flex-col gap-2">
      <CategorySection
        v-for="(category, index) in categoryData"
        :key="'category' + index"
        :value="category"
      />
    </div>
  </div>
</template>

<script setup>
import Carousel from "./components/Carousel/index.vue";
import CategorySection from "./components/CategorySection/index.vue";
import { initCarouselData, initCategoryData } from "./store/data";
import { ref } from "vue";

const carouselData = ref(initCarouselData());
const categoryData = ref(initCategoryData());
</script>

<style scoped></style>
