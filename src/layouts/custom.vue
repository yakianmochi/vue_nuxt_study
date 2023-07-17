<script setup>
import { useCounterStore } from '@/stores/counter'
import { useFooterStore } from '@/stores/footer'
//インポートした関数を呼び出してストアをインスタンス化して変数に代入
const counterStore = useCounterStore()
const footerStore = useFooterStore()
</script>

<template>
  <header>
    <h1>■速習 Vue3(Nuxt.js)</h1>
    <NuxtLink to="/">← HOME</NuxtLink>
  </header>
  <hr/>
  <slot />　<!-- ← 各画面 -->
  <hr/>
  <footer>Footer
    <div v-if="footerStore.displayFooter">
      <p>counterStore.count: {{ counterStore.count }}</p>
      <p>counterStore.doubleCount: {{ counterStore.doubleCount }}</p>
      <div>
        <button @click="counterStore.increment">Increment</button>
      </div>
    </div>
  </footer>
</template>