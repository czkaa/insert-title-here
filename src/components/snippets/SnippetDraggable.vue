<template>
    <div snippet-draggable resize 
      ref="root"
      class="z-50 cursor-pointer cursor-move h-fit"
      @mouseenter="isActivated = true"
      :style="styleObject"
      >
        <slot/>
        
    </div>
</template>
  
<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, watch } from 'vue'

const isActivated = ref(false);
const root = ref(null);
const styleObject = ref({})
const offset = ref({})
const offsetIsSet = ref((false))
const counter = ref(0)

function handleMousemove(e) {

  if (!offsetIsSet.value) {
    offset.value = {top: e.clientY - root.value.getBoundingClientRect().top, left: e.clientX - root.value.getBoundingClientRect().left}
    offsetIsSet.value = true
  }

  styleObject.value = {top: `${e.clientY - offset.value.top}px`, left: `${e.clientX - offset.value.left}px`, position: 'fixed' }
  counter.value ++

  if (counter.value > 25) {
    isActivated.value = false
  }
}


watch(() => isActivated.value, (newVal, oldVal) => {
    if (newVal) {
      window.addEventListener('mousemove', handleMousemove)
    } else {
      window.removeEventListener('mousemove', handleMousemove)
      offsetIsSet.value = false
    }
    counter.value = 0
})



</script>
