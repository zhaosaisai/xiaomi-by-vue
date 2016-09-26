<template>
  <div class="bottom-container">
    <hardware-goods></hardware-goods>
    <go-with></go-with>
    <fitting></fitting>
    <around></around>
    <recommend></recommend>
  </div>
</template>
<script>
  import hardwareGoods from './hardwareGoods';
  import goWith from './goWith';
  import fitting from './fitting';
  import around from './around';
  import recommend from './recommend';
  export default{
    components:{
      'hardware-goods':hardwareGoods,
      'go-with':goWith,
      fitting,
      around,
      recommend
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
