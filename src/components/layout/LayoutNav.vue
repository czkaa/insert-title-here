<template>
    <nav class="h-full">
        <router-link :to="'input'" class="flex w-20 h-40 mt-24 rounded-xl transition-transform duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer filter-outline z-50 group">
            <div class="w-2.5 h-2/3 bg-secondary flex-shrink-0 mt-4 group-hover:bg-tertiary transition-all duration-500"/>
            <div class="w-full h-full bg-secondary rounded-md text-white group-hover:bg-tertiary transition-all duration-500">
                <div class="text-md transform rotate-90 origin-top-left mt-10 ml-2.5">Input</div>
            </div>
        </router-link>

        <router-link :to="'schedule'" class="flex w-20 h-48 mt-24 rounded-xl transition-all duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer filter-outline z-50 group">
            <div class="w-full h-full bg-secondary rounded-md text-white group-hover:bg-tertiary transition-all duration-500">
                <div class="text-md transform rotate-90 origin-top-left mt-10 ml-4">Schedule</div>
            </div>
        </router-link>
    </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
    div {
        @apply bg-tertiary;
    }
}
</style>