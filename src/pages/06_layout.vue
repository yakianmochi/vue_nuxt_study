<script setup>
  definePageMeta({ layout: 'custom' })
</script>

<template>
    <h2>06_layout</h2>

    <h3>以下のように作成する（参考：custom.vue）</h3>
    <ol>
      <li>layoutsディレクトリを作って、XXX.vueファイルを作成する(see. custom.vue)</li>
      <li>XXX.vueファイルに各ページが入るslotタグを含むようにレイアウトを作成する</li>
      <li>layoutを適用するページにはdefinePageMeta({ layout: 'XXX' })と記載する</li>
      <li>このページの上下のようにlayoutを定義できる</li>
    </ol>
    <Footer prePage="05_directive" prePageName="ディレクティブ" nextPage="07_component" nextPageName="component"></Footer>
</template>
