<template>
  <div class="absolute w-full h-full pointer-events-auto py-6 px-16 sm:pb-24">
    <main page-input class="bg-tertiary rounded-xl p-3 transition-all duration-500 h-full">
      <div class="flex justify-between">
        <h3 class="text-secondary text-md filter-outline-xs">Input</h3>
        <SnippetCloseButton/>
      </div>

      <div  class="text-secondary space-y-4 mt-4 text-sm" >

        <p class="mb-4">In this course, we will examine our own idea of a (dys)functional template. Starting with an introduction to HTML and CSS HTML, CSS, and JS, prior coding skills are not required. The sessions will contain input, coding tutorials, discussions, collective coding and consultations.
        </p>
        <details v-for="index in 6">
          <summary>Session {{ index }}</summary>
          <p>...</p>
        </details>
      </div>

    </main>
  </div>
</template>

<script setup>

const props = defineProps({
    content: Object
  })
  import { useRoute } from 'vue-router'
  const route = useRoute();
</script>


