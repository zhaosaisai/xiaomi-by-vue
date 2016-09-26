<template>
  <div class="bottom-container">
    <hardware-goods></hardware-goods>
    <go-with></go-with>
    <fitting></fitting>
    <around></around>
  </div>
</template>
<script>
  import hardwareGoods from './hardwareGoods';
  import goWith from './goWith';
  import fitting from './fitting';
  import around from './around';
  export default{
    components:{
      'hardware-goods':hardwareGoods,
      'go-with':goWith,
      fitting,
      around
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
