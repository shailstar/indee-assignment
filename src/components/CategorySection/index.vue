<template>
  <div class="flex flex-col gap-2 ">
    <div class="text-3xl font-bold font-sans text-white">{{ value.name }}</div>
    <div id="cards-container" class="flex gap-3 flex-wrap">
      <Card
        v-for="(poster, index) in value.posters"
        :key="'poster' + index"
        :value="poster"
      />
    </div>
  </div>
</template>
<script setup>
import Card from "./Card/index.vue";

const props = defineProps(["value"]);
</script>
