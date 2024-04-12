<template>
  <div class="w-full bg-black h-screen">
    <div class="text-white absolute z-50 top-5 left-5">
      Indee
    </div>
    <Carousel
      :value="carouselData"
      :numVisible="1"
      :autoplay="true"
      :autoplayInterval="2"
      :numScroll="1"
      :showNavigators="false"
      width="100vw"
      height="50vh"
    />
    <div>
      <CategorySection/>
    </div>
  </div>
</template>

<script setup>
import Carousel from "./components/Carousel/index.vue";
import CategorySection from './components/CategorySection/index.vue'
import { ref } from "vue";
import banner1 from './assets/banners/banner1.jpg'
import banner2 from './assets/banners/banner2.jpg'
import banner3 from './assets/banners/banner7.jpg'
import banner4 from './assets/banners/banner4.jpg'
import banner5 from './assets/banners/banner5.jpg'
import banner6 from './assets/banners/banner6.jpg'


const initCarouselData = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: banner1,
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: banner2,
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1002",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: banner3,
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1003",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: banner4,
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1004",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: banner5,
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
];

const initCategoryData = [

]

const carouselData = ref(initCarouselData);
const categoryData = ref(initCategoryData);
</script>

<style scoped></style>
