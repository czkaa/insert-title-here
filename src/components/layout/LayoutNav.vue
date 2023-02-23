<template>
    <nav class="h-full flex flex-col justify-center space-y-10 text-secondary" style="filter: url(#outline-3)">
        <router-link :to="'input'" class="flex w-20 h-40 rounded-xl transition-transform duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer filter-outline z-50 group">
            <div class="w-2.5 h-2/3 bg-tertiary flex-shrink-0 mt-4 group-hover:bg-tertiary transition-all duration-500"/>
            <div class="w-full h-full bg-tertiary rounded-md group-hover:bg-tertiary transition-all duration-500">
                <div class="text-md transform rotate-90 origin-top-left mt-10 ml-3" style="filter: url(#outline-xs)">Input</div>
            </div>
        </router-link>

        <router-link :to="'schedule'" class="flex w-20 h-48 rounded-xl transition-all duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer filter-outline z-50 group">
            <div class="w-full h-full bg-tertiary rounded-md group-hover:bg-tertiary transition-all duration-500">
                <div class="text-md transform rotate-90 origin-top-left mt-10 ml-6" style="filter: url(#outline-xs)">Schedule</div>
            </div>
        </router-link>
    </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
    @apply pointer-events-none;
}
</style>