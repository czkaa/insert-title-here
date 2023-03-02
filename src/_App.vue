<template>
  <div>
    <Template
      :class="[
        'fixed w-full h-full top-0 left-0',
        route.name !== 'Home' ? 'pointer-events-none' : 'pointer-events-auto'
      ]"/>

    <main class="fixed top-0 left-0 mx-16 my-3 bg-tertiary rounded-xl p-3 relative pointer-events-auto" style="min-height: 85vh" v-if="route.name !== 'Home'">
      <router-view  v-slot="{ Component }">
        <component :is="Component" :key="route.path" :content="content" class=""/>
      </router-view>

      <h3 class="text-secondary text-md filter-outline">Title</h3>

      <router-link to="/" class="absolute top-3 right-3 w-14 h-14 filter-outline transform rotate-45">
          <div class="w-full top-1/2 absolute h-1 -mt-0.5 rounded-full bg-secondary"></div>
          <div class="w-1 h-full -ml-0.5 top-0 left-1/2 absolute rounded-full bg-secondary"></div>
       </router-link>
    </main>
    

      <!-- <div class="absolute top-28 right-8 space-y-2 filtr-outline">
        <div class="w-20 h-2 bg-white rounded-full"/>
        <div class="w-20 h-2  bg-white rounded-full transform rotate-6"/>
        <div class="w-20 h-2  bg-white rounded-full"/>
      </div> -->
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
  // const isWireframe = computed(() => { return store.state.isWireframe});
  const isLoading = ref(true);
  const content = ref(null)

  // watch(() =>isWireframe.value, (val) => {
  //   if(!val) {
  //     document.body.classList.add('themed-filled')
  //   } else {
  //     document.body.classList.remove('themed-filled')
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
    filter: url(/#outline);
  }

  .filter-outline-xs {
    filter: url(/#outline-xs);
  }

  .filter-blur {
    filter: url(/#blur);
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
  
  .themed-filled {
    .filter-outline {
      filter: none;
    }

    .filter-outline-xs {
      filter: none;
    }

    .filter-blur {
      @apply bg-tertiary;
      filter: url(/#blur-w);
    }

    .filter-blur-xl {
      filter: url(/#blur-xl-w);

      div {
        @apply bg-tertiary w-full h-full m-0;
      }
    }

    .wireframe-text {
      -webkit-text-stroke: 0.9rem var(--color-tertiary);
    }

    .wireframe-border {
      @apply border-none;
    } 
    
    .wireframe-background {
      @apply bg-tertiary;
    }

    .wireframe-visible {
      @apply opacity-0;
    } 

    .wireframe-text-sm {
       @apply text-white placeholder-white;
      filter: none;
    }
  }

</style>
