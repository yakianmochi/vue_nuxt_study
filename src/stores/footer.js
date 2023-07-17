import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useFooterStore = defineStore('footer', () => {
  const displayFooter = ref(false);
  const showFooter = () => {
    displayFooter.value = true;
  };

  return { displayFooter, showFooter };
});
