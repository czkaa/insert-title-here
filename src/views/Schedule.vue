<template>
  <div schedule class="w-full h-full">
    <PageSchedule :content="content"/>

    <UtilityFilters/>
  </div>
</template>

<script setup>
const props = defineProps({
    content: Object
  })
</script>
