<script setup>
  definePageMeta({ layout: 'custom' })

  //定義したストア（の関数）をインポート
  import { useCounterStore } from '@/stores/counter'
  import { useFooterStore } from '@/stores/footer'
  //インポートした関数を呼び出してストアをインスタンス化（ストアを生成）して変数に代入
  const store = useCounterStore()  //setup() 内で useXxxxStore() を実行
  const footerStore = useFooterStore();

  // storeの値を直接修正もできる
  const changeFooterShow = () => {
    footerStore.displayFooter = !footerStore.displayFooter
  }
</script>
 
<template>
  <h2>08_pinia</h2>
  <h3>storesにdefineStoreを用いて定義したオブジェクトに、生成したストアからアクセスできる</h3>
  <p>store.count : {{ store.count }}</p>

  <h3>コンポーネントを超えてアクセスできる。ボタンをクリックするとfooterに表示される※画面リロードしない限り別ページを開いても共有し続ける</h3>
  <div>
    <button @click="footerStore.showFooter">footer表示</button>
  </div>

  <h3>おそらく実践上使わない方が良いと思うが、直接値を書き換えることもできる。</h3>
  <div>
    <button @click="changeFooterShow">footer表示変更</button>
  </div>

  <h4>以下参考サイト。ここ一通り実装すればほぼ理解できる気がする</h4>
  https://www.webdesignleaves.com/pr/plugins/vue-basic-05.html
  <br/><br/>

  <Footer prePage="07_component" prePageName="component" nextPage="" nextPageName=""></Footer>
</template>