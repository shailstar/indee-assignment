<template>
  <div
    class="flex flex-col rounded-b-lg overflow-hidden"
    :style="{
      width: calcWidth + 'px',
    }"
    id="card"
    ref="card"
  >
    <div>
      <img :src="value.image" />
    </div>
    <div
      class="h-24 p-5 text-white bg-gradient-to-r from-neutral-800 to-neutral-950"
    >
      {{ value.name }}
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const DEFAULT_CARD_WIDTH = 175; //px
const PARENT_CONTAINER_PADDING = 40; //px
const CARD_GAP = 12; //px
const minCardWidth = ref(DEFAULT_CARD_WIDTH); // px
const calcWidth = ref(DEFAULT_CARD_WIDTH); //px
const card = ref();
const props = defineProps(["value"]);

onMounted(() => {
  //Added Breakpoint for screen bigger than 640px
  if (window.innerWidth > 640) {
    minCardWidth.value = 192;
  }

  let numTiles = Math.floor(
    (window.innerWidth - PARENT_CONTAINER_PADDING) / minCardWidth.value
  );

  calcWidth.value =
    (window.innerWidth - PARENT_CONTAINER_PADDING - (numTiles - 1) * CARD_GAP) /
    numTiles;
});
</script>
<style scopped></style>
