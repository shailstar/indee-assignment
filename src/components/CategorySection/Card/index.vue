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
import { ref, onMounted, onUnmounted } from "vue";
import {
  PARENT_CONTAINER_PADDING,
  CARD_GAP,
  DEFAULT_CARD_WIDTH,
} from "../index.constant";

const minCardWidth = ref(DEFAULT_CARD_WIDTH); // px
const calcWidth = ref(DEFAULT_CARD_WIDTH); //px
const card = ref();
const props = defineProps(["value"]);

function calculateDynamicCardWidth() {
  //Added Breakpoint for screen bigger than 640px
  if (window.innerWidth > 640) {
    minCardWidth.value = 192;
  }else{
    minCardWidth.value = DEFAULT_CARD_WIDTH;
  }

  //Number tiles that can be fitted in View Port Width
  let numTiles = Math.floor(
    (window.innerWidth - PARENT_CONTAINER_PADDING * 2) / minCardWidth.value
  );

  //Calculating Card Width after adjustment for Parent Padding and Gap
  calcWidth.value =
    (window.innerWidth -
      PARENT_CONTAINER_PADDING * 2 -
      (numTiles - 1) * CARD_GAP) /
    numTiles;
}

onMounted(() => {
  calculateDynamicCardWidth();

  //Calcualting Dynamic Card Width with screen size change
  window.addEventListener("resize", calculateDynamicCardWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", calculateDynamicCardWidth);
});
</script>
