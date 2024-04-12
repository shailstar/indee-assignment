<template>
  <div class="flex flex-col rounded-b-lg overflow-hidden w-48">
    <div>
      <img :src="value.image" />
    </div>
    <div class="h-24 p-5 text-white bg-gradient-to-r from-neutral-800 to-neutral-950">
      {{ value.name }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["value"]);
</script>
