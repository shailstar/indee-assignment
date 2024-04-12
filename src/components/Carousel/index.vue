<template>
  <div class="flex">
    <div v-if="showNavigators">
      <button @click="prevClick" class="bg-orange-200 w-10 h-10">P</button>
    </div>
    <div
      class="parent-container overflow-hidden border-solid border-2 border-indigo-600"
      :style="{
        width: width,
        height: height,
      }"
    >
      <div id="items-container" class="flex" ref="itemsContainer">
        <div
          v-for="item in value"
          :key="item.id + 'coursel'"
          class="bg-gray-400"
          :style="{ minWidth: `${100 / numVisible}%` }"
        >
          <img :src="item.image" class="w-full object-cover" />
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
