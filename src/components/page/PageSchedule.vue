<template>
  <div class="fixed w-full h-full pointer-events-auto py-6 px-16">
    <main page-schedule class="bg-tertiary rounded-xl p-3 transition-all duration-500 h-full flex flex-col">
      <div class="flex justify-between">
        <h3 class="text-secondary text-md" style="filter: url(/#outline-xs)">Schedule</h3>

        <SnippetCloseButton/>
      </div>

      <table class="w-full h-full table-fixed text-secondary mt-4">
        <tr class="h-10 w-full border border-secondary">
          <th class="w-1/6 border-2 border-secondary"></th>
          <th class="w-1/6 border-2 border-secondary">Session 1</th>
          <th class="w-1/6 border-2 border-secondary">Session 2</th>
          <th class="w-1/6 border-2 border-secondary">Session 3</th>
          <th class="w-1/6 border-2 border-secondary">Session 4</th>
          <th class="w-1/6 border-2 border-secondary">Session 5</th>
        </tr>
        <tr v-for="index in 5" class="h-1/6 border-2 border-secondary">
          <td v-for="index in 6" class=" w-1/6 h-10 border-2 border-secondary"></td>
        </tr>
      </table>
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

