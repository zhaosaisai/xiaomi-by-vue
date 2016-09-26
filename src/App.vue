<template>
  <div id="app">
    <top-bar></top-bar>
    <top-header></top-header>
    <top-banner></top-banner>
    <top-last></top-last>
    <star-goods></star-goods>
    <bottom-section></bottom-section>
  </div>
</template>
<script>
  import TopBar from './components/TopBar';
  import TopHeader from './components/TopHeader';
  import TopBanner from './components/TopBanner';
  import TopLast from './components/TopLast';
  import starGoods from './components/starGoods';
  import bottomSection from './components/bottomSection';
  export default{
    components:{
      'top-bar':TopBar,
      'top-header':TopHeader,
      'top-banner':TopBanner,
      'top-last':TopLast,
      'star-goods':starGoods,
      'bottom-section':bottomSection
    }
  }
</script>
<style lang="scss">
  @import "./assets/css/base.css"
</style>
