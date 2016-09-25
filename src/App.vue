<template>
  <div id="app">
    <top-bar></top-bar>
    <top-header></top-header>
    <top-banner></top-banner>
    <top-last></top-last>
    <star-goods></star-goods>
  </div>
</template>
<script>
  import TopBar from './components/TopBar';
  import TopHeader from './components/TopHeader';
  import TopBanner from './components/TopBanner';
  import TopLast from './components/TopLast';
  import starGoods from './components/starGoods';
  export default{
    components:{
      'top-bar':TopBar,
      'top-header':TopHeader,
      'top-banner':TopBanner,
      'top-last':TopLast,
      'star-goods':starGoods
    }
  }
</script>
<style lang="scss">
  @import "./assets/css/base.css"
</style>
