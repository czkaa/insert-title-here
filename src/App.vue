<template>
  <div class="w-full h-screen flex flex-col items-center overflow-hidden" >

           <!-- <div class="w-full h-8 bg-secondary flex items-center p-2 space-x-2">
          <div class="w-4 h-4 bg-white rounded-full"/>
          <div class="w-4 h-4 bg-white rounded-full"/>
          <div class="w-4 h-4 bg-white rounded-full"/>
        </div> -->

    <LayoutGrid/>

    <LayoutHeader class="z-50"/>

    <LayoutNav class="z-50"/>

    <!-- <div class="w-full h-full" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5%'}"> -->
    <div class="w-full h-full grow-1 mb-12 overflow-y-auto" >
      <router-view  v-slot="{ Component }">
        <component :is="Component" :key="route.path"/>
      </router-view>
    </div>

    <LayoutFooter/>

    <SnippetDraggable class="absolute left-8 top-12 filter-outline">
        <div class="w-56 h-5 rounded-full transform" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
        <div class="w-28 h-5 rounded-full transform -rotate-45 -mt-5" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
        <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-4">
          <div class="w-full h-1/2 border-b-2 border-secondary"/>
          <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
        </div>
    </SnippetDraggable>

    <div class="w-5 h-6 rounded-full absolute left-7 top-24 mt-0.5 transform rotate-45 filter-outline" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}" />

    <!-- <div class="absolute top-28 right-8 space-y-2 filtr-outline">
      <div class="w-20 h-2 bg-white rounded-full"/>
      <div class="w-20 h-2  bg-white rounded-full transform rotate-6"/>
      <div class="w-20 h-2  bg-white rounded-full"/>
    </div> -->

    <div class="fixed -right-72 top-36 flex w-80 h-52 rounded-xl transition-all duration-500 transform hover:-translate-x-40 cursor-pointer filter-outline">
      <div class="w-2.5 h-2/3 bg-secondary flex-shrink-0 mt-4"></div>
      <div class="w-full h-full bg-secondary rounded-md"></div>
    </div>

     <UtilityFilters/>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute();
</script>

<style lang="scss">

  .filter-outline {
    filter: url(/#outline);
  }

  .filter-outline-xs {
    filter: url(/#outline-xs);
  }

  .filter-blur {
    filter: url(/#blur);
  }
  
  .themed-filled {
    .filter-outline {
      filter: none;
      transition: all 1s ease;
      @apply bg-tertiary;
      border: none;
    }

    .filter-outline-xs {
      filter: none;
      transition: all 1s ease;
      @apply bg-tertiary;
      border: none;
    }

    .filter-blur {
      filter: none;
      transition: all 1s ease;
      @apply bg-tertiary;
      border: none;
    }
  }

</style>
