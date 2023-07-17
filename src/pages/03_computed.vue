<script setup>
  import {computed} from 'vue';
  import Footer from '/components/Footer.vue';

  // reactiveを付けてオブジェクトをリアクティブにする
  const user = reactive({
    first_name: "takuma",
    last_name: "okamoto",
    height: 170
  })
  const full_name = computed(() => {
    return user.first_name + " " + user.last_name
  })

  definePageMeta({ layout: 'custom' })
</script>

<template>
    <h2>computed</h2>

    <h3>first_nameとlast_nameを動的に結合するには、computedを使う</h3>

    user.first_name: <input v-model="user.first_name"><br>
    user.last_name: <input v-model="user.last_name"><br>
    full_name: <input v-model="full_name"><br>

    <Footer prePage="02_reactive" prePageName="リアクティブ" nextPage="04_method" nextPageName="メソッド"></Footer>
</template>