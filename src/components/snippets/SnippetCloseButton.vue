<template>
    <button @click="setView('Home')" snippet-close-button class="w-8 h-8 mt-0.25 transform rotate-45 flex-shrink-0 filter-outline-xs">
        <div class="w-full top-1/2 absolute h-1 -mt-0.5 rounded-full bg-secondary"></div>
        <div class="w-1 h-full -ml-0.5 top-0 left-1/2 absolute rounded-full bg-secondary"></div>
    </button>
</template>

<script setup>

  import { useStore } from 'vuex';
  
  const store = useStore();

  function setView(string) {
    store.commit('setView', string)
  }

</script>