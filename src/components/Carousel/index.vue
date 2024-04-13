<template>
  <div class="flex">
    <div v-if="showNavigators">
      <button @click="prevClick" class="bg-orange-200 w-10 h-10">P</button>
    </div>
    <div
      class="parent-container overflow-hidden w-screen h-[60vw] sm:h-[50vw] lg:h-[40vw]"
    >
      <div id="items-container" class="flex h-full" ref="itemsContainer">
        <div
          v-for="item in value"
          :key="item.id + 'coursel'"
          class="bg-gray-400 h-full"
          :style="{ minWidth: `${100 / numVisible}%` }"
        >
          <img :src="item.image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <div v-if="showNavigators">
      <button @click="nextClick" class="bg-orange-200 w-10 h-10">N</button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const itemsContainer = ref();
const props = defineProps([
  "value",
  "numVisible",
  "autoplay",
  "numScroll",
  "showNavigators",
  "autoplayInterval",
  "width",
  "height",
]);
const totalShiftedItems = ref(0);
const autoPlayIntervalId = ref("");

function prevClick() {
  if (totalShiftedItems.value > 0) {
    totalShiftedItems.value = totalShiftedItems.value - props.numScroll;
    itemsContainer.value.style.transform = `translate(-${
      totalShiftedItems.value * (100 / props.numVisible)
    }%, 0px)`;
  }
}

function nextClick() {
  if (totalShiftedItems.value <= props.value.length - props.numVisible) {
    if (totalShiftedItems.value === props.value.length - props.numVisible) {
      totalShiftedItems.value = 0;
    } else {
      totalShiftedItems.value = totalShiftedItems.value + props.numScroll;
    }

    itemsContainer.value.style.transform = `translate(-${
      totalShiftedItems.value * (100 / props.numVisible)
    }%, 0px)`;
  }
}

function autoPlayStart() {
  autoPlayIntervalId.value = setInterval(() => {
    nextClick();
  }, props.autoplayInterval * 1000);
}

onMounted(() => {
  if (props.autoplay) {
    autoPlayStart();
  }
});

onUnmounted(() => {
  clearInterval(autoPlayIntervalId.value);
});
</script>
<style scoped></style>
