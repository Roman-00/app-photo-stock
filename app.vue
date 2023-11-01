<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue';
import debounce from 'lodash.debounce';

const WAIT = 100;

/**
 * Записывает значение скролла в кастомную переменную.
 */
const spyScroll = debounce(() => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}, WAIT);

onMounted(() => {
    window.addEventListener('scroll', spyScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', spyScroll);
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
