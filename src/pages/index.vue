<template>
  <h2>はじめに</h2>
    <ul>
      <li>基礎からの場合CDNから始まるが、本資料は単一ファイルコンポーネントを原則として記載する</li>
      <ul>
        <li>単一ファイルコンポーネント＝template＋script＋styleから構成されるファイル</li>
        <li>template=HTML、script＝javascript、style＝cssであり、1つの画面上の部品を1ファイルで構成する</li>
        <li>画面上の部品：ボタン1つから、テーブル、ページまで大小様々であり、vue.jsにおいて1画面はコンポーネントの集合でできている</li>
      </ul>
      <li>Composition APIを原則として記載する</li>
      <ul>
        <li>Composition APIはvue3から記載できるようになった記法。それ以前の記法をはOptionsAPIという</li>
        <li>世の中の情報はOptionsAPIのものもあふれているため注意が必要</li>
        <li>Composition APIを有効にするにはscriptタグにsetupと記載する必要がある。※ちょくちょく忘れて何故うまく動かないかわからなくなるので注意！</li>
      </ul>
    </ul>

  <h2>もくじ</h2>
    <NuxtLink to="/01_valiable">1.変数定義</NuxtLink><br/>
    <NuxtLink to="/02_reactive">2.リアクティブ</NuxtLink><br/>
    <NuxtLink to="/03_computed">3.computed</NuxtLink><br/>
    <NuxtLink to="/04_method">4.method</NuxtLink><br/>
    <NuxtLink to="/05_directive">5.directive</NuxtLink><br/>
    <NuxtLink to="/06_layout">6.layout</NuxtLink><br/>
    <NuxtLink to="/07_component">7.component</NuxtLink><br/>
    <NuxtLink to="/08_pinia">8.pinia</NuxtLink><br/>
    
</template>

<script setup>
    definePageMeta({ layout: 'custom' })
</script>
