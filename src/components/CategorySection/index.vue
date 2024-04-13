<template>
  <div
    class="flex flex-col gap-2"
    :style="{ padding: `0 ${PARENT_CONTAINER_PADDING}px` }"
  >
    <div class="text-3xl font-medium font-sans text-white">
      {{ value.name }}
    </div>
    <div
      id="cards-container"
      class="flex gap-3 flex-wrap"
      :style="{ gap: `${CARD_GAP}px` }"
    >
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
import { PARENT_CONTAINER_PADDING, CARD_GAP } from "./index.constant";
defineProps(["value"]);
</script>
