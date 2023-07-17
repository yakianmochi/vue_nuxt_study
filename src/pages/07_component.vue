<script setup>
  definePageMeta({ layout: 'custom' })
</script>

<template>
    <h2>07_component</h2>

    <h3>画面下部Footerのように作成できる。ポイントとしては以下（参考：Footer.vue）</h3>
    <ol>
      <li>ディレクトリに指定はない。どこかにYYY.vueファイルを作成する</li>
      <li>YYY.vueファイルをimportすることで、画面下部Footerのように利用できる。</li>
      <li>NUXTではimportがなくてもcomponentsディレクトリであれば自動importしてくれる！！</li>
      <li>親から子へ渡す値の定義は子側でpropsを使う(see. Footer.vue)</li>
      <li>子へ親から渡す定義はemit</li>
    </ol>
    <Footer prePage="06_layout" prePageName="layout" nextPage="08_pinia" nextPageName="pinia"></Footer>
</template>
