<script setup>
  import {computed} from 'vue';
  import Footer from '/components/Footer.vue';

  definePageMeta({ layout: 'custom' })

  // reactiveを付けてオブジェクトをリアクティブにする
  const user = reactive({
    first_name: "takuma",
    last_name: "okamoto",
    height: 170
  })

  // v-if用
  const checkChange = () => {
    return user.first_name == 'takuma'
  }

  // v-for用
  const users = [
    {
      userId:'001',
      name:'okamoto'
    },
    {
      userId:'002',
      name:'sakakida'
    }
  ]

</script>

<template>
    <h2>05_ディレクティブ</h2>

    <h3>v-xxxをディレクティブという。</h3>
    他にも、色々ある。（see. https://ja.vuejs.org/api/built-in-directives.html）

    <h3>v-if、v-elseで条件分岐を書ける。(v-showはcssのdisplayで表示を制御するだけ)</h3>
    user.first_name: <input v-model="user.first_name"><br>
    <div v-if="checkChange()">変更していない</div>
    <div v-else>名前変えた</div>

    <h3>v-forを使うことでループ処理が書ける。※keyにはindexを指定しないように</h3>
    <li v-for="(user, index) in users" :key="user.userId">
      {{ user.name }} - {{ index }} - {{ user.userId }}
    </li>

    <Footer prePage="04_method" prePageName="メソッド" nextPage="06_layout" nextPageName="layout"></Footer>
</template>

<style scoped>
  .pageLink {
	  margin:0px 20px;
  }
</style>