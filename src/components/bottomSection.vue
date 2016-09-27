<template>
  <div class="bottom-container">
    <hardware-goods></hardware-goods>
    <go-with></go-with>
    <fitting></fitting>
    <around></around>
    <hot-comment></hot-comment>
    <content></content>
  </div>
</template>
<script>
  import hardwareGoods from './hardwareGoods';
  import goWith from './goWith';
  import fitting from './fitting';
  import around from './around';
  import hotComment from './hotComment';
  import content from './content';
  export default{
    components:{
      'hardware-goods':hardwareGoods,
      'go-with':goWith,
      fitting,
      around,
      'hot-comment':hotComment,
      content
    }
  }
</script>
<style lang="scss">
  .bottom-container{
    width:100%;
    padding-top:60px;
    background-color:#f5f5f5;
  }
</style>
