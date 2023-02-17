<template>
    <div basic-resizable class="w-full h-full">
        <svg   
            class="w-full h-full p-1"
            preserveAspectRatio="none"
            version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
            <rect vector-effect="non-scaling-stroke" class="custom-stroke" x="1" y="1"  width="398" height="398"/>
            <line vector-effect="non-scaling-stroke" class="custom-stroke" x1="0" y1="400" x2="400" y2="0"/>
            <line vector-effect="non-scaling-stroke" class="custom-stroke" x1="0" y1="0" x2="400" y2="400"/>
        </svg>

        <svg    
            class="absolute top-0 left-0 w-2.5"
            x="0px" y="0px" viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
            <rect vector-effect="non-scaling-stroke" class="custom-box" x="0.2" y="0.2" width="5.5" height="5.5"/>
        </svg>

        <svg    
            class="absolute top-0 right-0 w-2.5"
            x="0px" y="0px" viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
            <rect vector-effect="non-scaling-stroke" class="custom-box" x="0.2" y="0.2" width="5.5" height="5.5"/>
        </svg>

        <svg    
            class="absolute  bottom-0 w-2.5"
            x="0px" y="0px" viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
            <rect vector-effect="non-scaling-stroke" class="custom-box" x="0.2" y="0.2" width="5.5" height="5.5"/>
        </svg>

        <svg    
            class="absolute right-0 bottom-0 w-2.5"
            x="0px" y="0px" viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
            <rect vector-effect="non-scaling-stroke" class="custom-box custom-box-fill" x="0.2" y="0.2" width="5.5" height="5.5"/>
        </svg>
    </div>
</template>

<style lang="scss" scoped>

    .custom-stroke {
        stroke: var(--color-secondary);
        stroke-width: 0.05em;
        fill: transparent;
        stroke-miterlimit:10;
    }
    .custom-box {
        stroke: var(--color-secondary);
        stroke-width: 0.035rem;
        fill: white;
        stroke-miterlimit:10;
    }

    .custom-box-fill {
        fill: var(--color-secondary);
        fill-opacity: 0.5;
    }

</style>