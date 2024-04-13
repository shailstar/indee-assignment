<template>
  <div class="w-full bg-black h-full flex flex-col gap-5">
    <Header/>
    <Carousel
      :value="carouselData"
      :numVisible="1"
      :autoplay="true"
      :autoplayInterval="5"
      :numScroll="1"
      :showIndicators="true"
    />
    <div class="flex flex-col gap-10">
      <CategorySection
        v-for="(category, index) in categoryData"
        :key="'category' + index"
        :value="category"
      />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header/index.vue'
import Carousel from "./components/Carousel/index.vue";
import CategorySection from "./components/CategorySection/index.vue";
import { getCarouselData, getCategoryData } from "./dataModel/data";
import { ref } from "vue";

const carouselData = ref(getCarouselData());
const categoryData = ref(getCategoryData());
</script>

<style scoped></style>