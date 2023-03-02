<template>
    <nav class="h-full flex flex-col justify-center space-y-10 text-secondary filter-tertiary">
        <button @click="setView('Input')" class="flex w-20 h-40  sm:h-48 rounded-xl transition-transform duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer filter-outline-tertiary z-50 group">
            <div class="w-2.5 h-2/3  sm:h-3/4 bg-tertiary flex-shrink-0 mt-4 group-hover:bg-tertiary transition-all duration-500"/>
            <div class="w-full h-full bg-tertiary rounded-md group-hover:bg-tertiary transition-all duration-500">
                <div class="text-md transform rotate-90 origin-top-left mt-10 ml-3 filter-outline-xs">Input</div>
            </div>
        </button>

        <button @click="setView('Schedule')" class="flex w-20 h-48  sm:h-60 rounded-xl transition-all duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer filter-outline-tertiary z-50 group">
            <div class="w-full h-full bg-tertiary rounded-md group-hover:bg-tertiary transition-all duration-500">
                <div class="text-md transform rotate-90 origin-top-left mt-10 ml-6 filter-outline-xs" >Schedule</div>
            </div>
        </button>
    </nav>
</template>

<script setup>

    import { useStore } from 'vuex';
  
  const store = useStore();

  function setView(string) {
    store.commit('setView', string)
  }

</script>

