<template>
  <div id="app">
    <div class="page-group">
      <div class="page page-current">
        <!-- 网站的公共头部 -->
        <v-header></v-header>

        <!-- 这里是页面内容区 -->
        <router-view/>

      </div>
    </div>
   

    <!-- 网站的中间内容部分 -->
   

  </div>
</template>

<script>
  // 1：import xx from 路径  导入一个组件
  import Header from "./components/header.vue";

  export default {
    mounted(){
      console.log(this.$config.GetWeather)
    },
    name: 'app',
    // 2：注册组件，并给组件起个名字 v-header
    components : {
      'v-header': Header
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}



</style>
