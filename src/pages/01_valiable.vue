<script setup>
　import Footer from '/components/Footer.vue';

  const name = 'takuma okamoto'
  const nameClass = 'name-class'

  const user = {
    first_name: "takuma",
    last_name: "okamoto",
    height: 170
  }
  definePageMeta({ layout: 'custom' })

  const bindStr = '{{}}'
</script>

<template>
    <h2>変数定義</h2>

    <h3>{{bindStr}}で変数定義したものを参照できる</h3>
    <p>名前:{{ name }}</p>
    <p>名前2:{{ name }}</p>

    <h3>v-bindで変数定義したものをhtml属性に設定できる</h3>

    <input v-bind:value="name"><br>
    <input v-bind:class="nameClass"><br>
    <input v-bind:value="user.first_name"><br>
    <input v-bind:value="user.height"><br>

    <h3>v-bindは:に省略できる</h3>

    <input :value="name"><br>
    <input :class="nameClass"><br>
    <input :value="user.first_name"><br>
    <input :value="user.height"><br>

    <h3>v-bindはデータの流れが1方向なので↓のinputタグを書き換えても他の値は変わらない</h3>
    <input :value="name"><br>

    <Footer prePage="/" prePageName="HOME" nextPage="02_reactive" nextPageName="リアクティブ"></Footer>
</template>