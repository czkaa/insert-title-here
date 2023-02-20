<template>
  <main page-schedule class="fixed top-0 left-0 mx-12 my-2 bg-tertiary rounded-xl p-3 relative pointer-events-auto" style="min-height: 80vh" v-if="route.name !== 'Home'">
    <div class="flex justify-between">
      <h3 class="text-secondary text-md filter-outline">Title</h3>

      <router-link to="/" class="block w-10 h-10 filter-outline transform rotate-45">
        <div class="w-full top-1/2 absolute h-1 -mt-0.5 rounded-full bg-secondary"></div>
        <div class="w-1 h-full -ml-0.5 top-0 left-1/2 absolute rounded-full bg-secondary"></div>
      </router-link>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
    content: Object
  })


  import { useRoute } from 'vue-router'
  const route = useRoute();
</script>

