<template>
  <div class="flex">
    <div
      class="parent-container relative overflow-hidden w-screen h-[60vw] sm:h-[50vw] lg:h-[40vw] before:block before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-black before:z-10 before:via-50% before:to-95%"
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
      <div
        v-if="showIndicators"
        id="indicators"
        class="w-full absolute bottom-5 flex justify-center z-20"
      >
        <div id="indicators-container" class="flex gap-2 items-center">
          <div
            v-for="pageNumber in totalNumbersOfPages"
            :key="'page ' + pageNumber"
            class="bg-white rounded-full"
            :class="{
              'w-2 h-2': currentPageNumber !== pageNumber,
              'w-3.5 h-3.5': currentPageNumber === pageNumber,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
const itemsContainer = ref();

const props = defineProps({
  value: {
    //Array of Objects each containing id, image
    type: Array,
    required: true
  },
  numVisible: {
    //Number of visible images in a page
    type: Number,
    default: 1
  },
  autoplay: {
    //flag for enabling/disabling autoplay (If we add navigation button)
    type: Boolean,
    default: true
  },
  numScroll: {
    //Number of items in one scroll 
    type: Number,
    default: 1
  },
  showIndicators: {
    //Flag for showing indicators
    type: Boolean,
    default: true
  },
  autoplayInterval: {
    //Time interval for autoplay in seconds
    type: Number,
    default: 5
  },
});
const totalShiftedItems = ref(0);
const autoPlayIntervalId = ref("");

const totalNumbersOfPages = computed(() => {
  return Math.ceil(props.value.length / props.numVisible);
});

const currentPageNumber = computed(() => {
  return totalShiftedItems.value + 1;
});

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
