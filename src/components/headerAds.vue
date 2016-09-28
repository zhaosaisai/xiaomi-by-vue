<template>
  <div class="ads" :style="{'backgroundImage':'url('+ad.imgUrl+')'}">
    <a :href="ad.sourceUrl" class="a-link">
    </a>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        ad:{
          sourceUrl:'http://hd.mi.com/y/09271d/index.html#mi5',
          imgUrl:'http://i3.mifile.cn/a4/cms_14749734836621_lZosC.jpg'
        }
      }
    }
  }
</script>
<style lang="scss">
.ads{
  height:60px;
  background-position:center 0;
  background-repeat:no-repeat;
  .a-link{
    width:1226px;
    height:60px;
    display: block;
    margin:0 auto;
  }
}
</style>
