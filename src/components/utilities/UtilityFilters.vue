<template>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="h-0">
    <defs>
        <filter id="blur" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="3.75" in="SourceGraphic" flood-color="white" result="blur" flood-opacity="1"></feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix>
        </filter>
    </defs>

    <defs>
        <filter id="blur-hover" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="3.75" in="SourceGraphic" flood-color="var(--color-tertiary)" result="blur" flood-opacity="1"></feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix>
        </filter>
    </defs>

    <defs>
        <filter id="blur-xl" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="11" in="SourceGraphic" flood-color="white" result="blur" flood-opacity="1"></feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix>
        </filter>
    </defs>

    <defs>
        <filter id="blur-xl-hover" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="11" in="SourceGraphic" flood-color="var(--color-tertiary)" result="blur" flood-opacity="1"></feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix>
        </filter>
    </defs>

    <defs>
        <filter id="outline" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="2" in="SourceGraphic" flood-color="var(--color-secondary)" result="blur" flood-opacity="1">
            </feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="goo">
            </feColorMatrix><feBlend in="SourceGraphic" in2="goo">
            </feBlend>
        </filter>
    </defs>

    <defs>
        <filter id="outline-xs" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="0.3" in="SourceGraphic" flood-color="var(--color-secondary)" result="blur" flood-opacity="1"></feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 45 -7" in="blur" result="blur"></feColorMatrix>
        </filter>
    </defs>

    <defs>
        <filter id="outline-tertiary" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="1.75" in="SourceGraphic" flood-color="var(--color-tertiary)" result="blur" flood-opacity="2"></feDropShadow>
            <feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix>
        </filter>
        </defs>
    </svg>
</template>