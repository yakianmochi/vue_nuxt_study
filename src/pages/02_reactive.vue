<script setup>
　import Footer from '/components/Footer.vue';
  // ref, reactiveを使うにはimportが必要
  import {ref, reactive} from 'vue';

  // refを付けてリアクティブに定義
  const name = ref('takuma okamoto')

  // refは.valueを付けてアクセス
  const name_sama = name + '様';
  const name_sama_value = name.value + '様';

  // reactiveを付けてオブジェクトをリアクティブにする
  const user = reactive({
    first_name: "takuma",
    last_name: "okamoto",
    height: 170
  })
  
  // reactiveは.valueをつけなくても良い
  const first_name_sama = user.first_name + '様';

definePageMeta({ layout: 'custom' })
</script>

<template>
    <h2>reactive</h2>
    <p>
        ↓のようにv-bindで定義しても値が連携されない
    </p>

    <p>名前:{{ name }}</p>

    <h3>ref()をつけてv-modelにすればOK</h3>
    name: <input v-model="name"><br>
    name: <input v-model="name"><br>

    <h3>refの値にアクセスするには.valueをつけてアクセスする</h3>
    name_sama: <input :value="name_sama"><br>
    name_sama_value: <input :value="name_sama_value"><br>

    <h3>オブジェクトにはreactiveをつければOK</h3>
    user.first_name: <input v-model="user.first_name"><br>
    user.first_name: <input v-model="user.first_name"><br>

    <h3>reactiveの場合は.valueをつけなくて良い</h3>
    first_name_sama: <input :value="first_name_sama"><br>

    <Footer prePage="01_valiable" prePageName="変数定義" nextPage="03_computed" nextPageName="computed"></Footer></template>