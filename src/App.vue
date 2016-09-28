<template>
  <div id="app">
    <header-ads></header-ads>
    <top-bar></top-bar>
    <top-header></top-header>
    <top-banner></top-banner>
    <top-last></top-last>
    <star-goods></star-goods>
    <bottom-section></bottom-section>
    <footer-one></footer-one>
    <footer-end></footer-end>
  </div>
</template>
<script>
  import headerAds from './components/headerAds';
  import TopBar from './components/TopBar';
  import TopHeader from './components/TopHeader';
  import TopBanner from './components/TopBanner';
  import TopLast from './components/TopLast';
  import starGoods from './components/starGoods';
  import bottomSection from './components/bottomSection';
  import footerOne from './components/footerOne';
  import footerEnd from './components/footerEnd';
  export default{
    components:{
      'header-ads':headerAds,
      'top-bar':TopBar,
      'top-header':TopHeader,
      'top-banner':TopBanner,
      'top-last':TopLast,
      'star-goods':starGoods,
      'bottom-section':bottomSection,
      'footer-one':footerOne,
      'footer-end':footerEnd
    }
  }
</script>
<style lang="scss">
  @import "./assets/css/base.css"
</style>
