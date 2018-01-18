<template>
  <div class='v-header'>
    <header class="bar bar-nav">
        <a class="icon icon-left pull-left open-panel"></a>
        <a class="icon icon-settings pull-right open-panel"></a>
    </header>
  </div>
</template>

<script>
  export default {
    mounted(){

    },
    data () {
      return {
        msg: 'herder'
      }
    },
    methods : {
      demo () {
        console.log('demo fun')
      }
    }
  }
</script>


<style scoped>
.v-header{
  display:flex;
  height:44px;
}
 .bar{
   justify-content:center;
   background:rgba(0,0,0,0) ! important;
 }
 .bar:after{
   background:rgba(0,0,0,0) ! important;
 }
 .bar .icon{
   color:#fff;
 }
</style>

