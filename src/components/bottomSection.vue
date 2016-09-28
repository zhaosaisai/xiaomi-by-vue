<template>
  <div class="bottom-container">
    <hardware-goods></hardware-goods>
    <go-with></go-with>
    <fitting></fitting>
    <around></around>
    <hot-comment></hot-comment>
    <content></content>
    <vedio-com></vedio-com>
  </div>
</template>
<script>
  import hardwareGoods from './hardwareGoods';
  import goWith from './goWith';
  import fitting from './fitting';
  import around from './around';
  import hotComment from './hotComment';
  import content from './content';
  import vedioCom from './vedioCom';
  export default{
    components:{
      'hardware-goods':hardwareGoods,
      'go-with':goWith,
      'hot-comment':hotComment,
      'vedio-com':vedioCom,
      fitting,
      around,
      content
    }
  }
</script>
<style lang="scss">
  .bottom-container{
    width:100%;
    padding-top:60px;
    background-color:#f5f5f5;
    padding-bottom:30px;
  }
</style>
