<script setup>
  import {computed} from 'vue';
  import Footer from '/components/Footer.vue';

  // reactiveを付けてオブジェクトをリアクティブにする
  const user = reactive({
    first_name: "takuma",
    last_name: "okamoto",
    height: 170
  })

  const inputChange = () => {
    console.log(user.first_name);
  }
  const buttonClick = () => {
    alert(user.first_name);
  }

  definePageMeta({ layout: 'custom' })
</script>

<template>
    <h2>04_method</h2>

    <h3>v-on:処理=メソッドと記載すると処理を定義できる</h3>

    full_name: <input v-on:change="inputChange" v-model="user.first_name"><br>

    <h3>v-onは@で省略できる</h3>

    <button @:click="buttonClick">button</button>
    <br/>

    <Footer prePage="03_computed" prePageName="computed" nextPage="05_directive" nextPageName="ディレクティブ"></Footer>
</template>

<style scoped>
  .pageLink {
	  margin:0px 20px;
  }
</style>