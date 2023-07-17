<script>
import { defineProps } from 'vue';

const props = defineProps(['prePage', 'nextPage']);
</script>
<template>
    <NuxtLink class="pageLink" :to="prePage">←{{prePage}}</NuxtLink>
    <NuxtLink to="/nextPage">{{nextPage}}→</NuxtLink>
</template>