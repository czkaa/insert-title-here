<template>
  <section basic-input>
    <textarea v-if="props.resize" :class="classNames" class="transition-all duration-500" spellcheck="false" :style="styleObject" wrap="hard" :placeholder="props.placeholder" v-model="value" @input="handleInput"/>
    <input v-else :class="classNames" class="transition-all duration-500" spellcheck="false" :style="styleObject" wrap="hard" :placeholder="props.placeholder" v-model="value" @input="handleInput"/>
    <div :class="classNames" ref="root" class="absolute top-0 invisible p-2 overflow-hidden h-0">{{ isInit ? value : placeholder }}</div>
  </section> 
</template>

<script setup>
    import { ref, reactive, onMounted, onUnmounted, computed, watch } from 'vue'
    import { useStore } from 'vuex';
    const store = useStore();
    const root = ref(null);
    const root2 = ref(null);
    const styleObject = ref({resize: 'none'})

   const props = defineProps({
    placeholder: String,
    text: String,
    classNames: String,
    resize: {
      type: Boolean,
      default: false
    }
  })

  const value = ref('')
  const counter = ref(0)
  var interval = null
  const intervalCount = ref(1)
  const isWireframe = computed(() => { return store.state.isWireframe});
  const isInit = ref(false)

  function writeText () {
    if (counter.value < props.text.length) {
        counter.value += intervalCount.value
        intervalCount.value ++;
        value.value  = props.text.slice(0, counter.value)
    } else {
        clearInterval(interval)
    }
  }

  function handleInput() {

    if (!isInit.value) {
      if (props.resize.value) {
        resizeObserver.observe(root.value);
      }
      isInit.value = true;
    }

    counter.value ++;

    console.log(counter.value, props.text.slice(0, counter.value))

    if (counter.value < 10) {
        value.value  = props.text.slice(0, counter.value)
        
    } else {
        if (isWireframe.value) {
            store.commit('toggleIsWireframe')
        }

       interval = setInterval(writeText, 100);
    }
  }

  onMounted(() => {
    console.log('ROOT', root.value.scrollHeight)

    if (props.resize) {
      styleObject.value.height = `${root.value.scrollHeight}px`
    }
  })

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        console.log('RESIZE')
        console.log(root.value.scrollHeight)
        setTimeout(() => {
          styleObject.value.height = `${root.value.scrollHeight}px`
        }, 500)
       
    }
   })
</script>