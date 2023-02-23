<template>
  <div input class="w-full h-full">
    <PageInput :content="content"/>
  </div>
</template>

<script setup>
const props = defineProps({
    content: Object
  })
</script>
