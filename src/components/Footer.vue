<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    prePage: String,
    prePageName: String,
    nextPage: String,
    nextPageName: String
});
</script>

<template>
    <NuxtLink class="pageLink" :to="prePage">←{{prePageName}}</NuxtLink>
    <NuxtLink :to="nextPage">{{nextPageName}}→</NuxtLink>
</template>

<style scoped>
  .pageLink {
	  margin:0px 20px;
  }
</style>