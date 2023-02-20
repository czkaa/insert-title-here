<template>
  <main page-input class="fixed top-0 left-0 mx-12 my-2 bg-tertiary rounded-xl p-3 pointer-events-auto" style="min-height: 80vh" v-if="route.name !== 'Home'">
    <div class="flex justify-between">
      <h3 class="text-secondary text-md filter-outline">Title</h3>
      <SnippetCloseButton/>
    </div>
  </main>
</template>

<script setup>
import SnippetCloseButton from '../snippets/SnippetCloseButton.vue';

const props = defineProps({
    content: Object
  })


  import { useRoute } from 'vue-router'
  const route = useRoute();
</script>


