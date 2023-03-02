<template>
  <div>
    <Template
      :class="[
        'fixed w-full h-full top-0 left-0 -z-50',
        view !== 'Home' ? 'pointer-events-none' : 'pointer-events-auto'
      ]"/>

        <!-- <router-view  v-slot="{ Component }">
          <transition name="slide">
            <component :is="Component" :key="route.path" :content="content" class="z-50"  v-if="route.name !== 'Home'"  />
          </transition>
        </router-view> -->

      <transition name="slide">
        <PageInput v-if="view === 'Input'"/>
        <PageSchedule v-else-if="view === 'Schedule'"/>
      </transition>

      <LayoutNav class="fixed top-0 right-0"/>

     <UtilityFilters/>
  </div>
</template>

<script setup>
  import axios from "axios";
  import { useRoute } from 'vue-router'
  import { ref, computed, watch, onMounted } from 'vue'
  import { useStore } from 'vuex';
  
  const store = useStore();
  const route = useRoute();
  const isLoading = ref(true);
  const content = ref(null)
  const view = computed(() => { return store.state.view});

  // watch(() => route.path, (val) => {
  //   console.log('SET')
  //   if (val !== '/') {
  //     document.documentElement.style.setProperty('--color-secondary', 'hsl(221, 100%, 82%)');
  //     document.documentElement.style.setProperty('--color-tertiary', 'rgb(133, 110, 103)');
  //   } else {
  //     document.documentElement.style.setProperty('--color-secondary', 'rgb(133, 110, 103)');
  //     document.documentElement.style.setProperty('--color-tertiary', 'hsl(221, 100%, 82%)');
  //   }
  // })

  async function fetchContent() {
    axios
      .get("/content.json")
      .then((res) => {
        content.value = res.data
        isLoading.value = false;
      })
      .catch((err) => console.log(err));
  }

  onMounted(() => {
    console.log('MOUNTING')
    fetchContent();
  })

</script>

<style lang="scss">

  .filter-outline {
    filter: url(http://localhost:8080/input/#outline);
  }

  .filter-outline-xs {
    filter: url(/#outline-xs);
  }

  .filter-blur {
    filter: url(/#blur);
    &:hover {
      filter: url(/#blur-hover);
    }
  }

  .filter-blur-xl {
    filter: url(/#blur-xl);
  }

  .wireframe-border {
    @apply  border border-secondary;
  }
  
  .wireframe-text {
    @apply text-white;
    -webkit-text-stroke: 0.9rem white;
  }

  .wireframe-text-hover {
    @apply text-white;
    -webkit-text-stroke: 0.9rem var(--color-tertiary);
  }

   .wireframe-text-sm {
    @apply text-white;
    filter: url(/#outline);
  }


    
//  .wireframe-text-sm {
//     @apply text-white;
//     -webkit-text-stroke: 0.9rem white;
//   }

  .wireframe-visible {
    @apply opacity-100;
  } 
  
  .wireframe-background {
    @apply bg-transparent;
  }
 

  .slide-enter-active,
  .slide-leave-active {
    transition: all 800ms ease-out;
    position: fixed;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100vw);
  }

</style>
