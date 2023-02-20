<template>
  <div input class="w-full h-full">
    <PageInput :content="content"/>

    <UtilityFilters/>
  </div>
</template>

<script setup>
import UtilityFilters from '../components/utilities/UtilityFilters.vue';

const props = defineProps({
    content: Object
  })
</script>
