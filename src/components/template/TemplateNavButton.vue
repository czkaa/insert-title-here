<template>
    <button basic-nav-button class="relative group filter-outline">
        <div class="wireframe-text whitespace-nowrap uppercase group-hover:tracking-widest transition-all duration-500 filter-blur group-hover:filter-blur-hover" >{{text}}</div>
        <div class="whitespace-nowrap uppercase w-full z-50 absolute top-0 group-hover:tracking-widest transition-all duration-500 wireframe-text-sm">{{props.text}}</div>
    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    realText: String
})
</script>