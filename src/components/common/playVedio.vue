<template>
  <div class="vedio-mask" v-show="vedioStatus" transition="opacity">
    <div class="vedio-div" transition="translate" v-show="vedioStatus">
      <div class="vedio-title">
        {{vedioTitle}}
        <a href="javascript:;" @click="close"><i class="fa fa-close"></i></a>
      </div>
      <iframe :src="vedioUrl" width="880" height="536" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    props:['vedioStatus', 'vedioUrl','vedioTitle'],
    methods:{
      close:function(){
        this.vedioStatus = false;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .vedio-mask{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.6);
    z-index:99999;
    .vedio-div{
      position: absolute;;
      width:880px;
      height:596px;
      background-color:#fff;
      top:100px;
      left:50%;
      margin-left:-440px;
      .vedio-title{
        width:100%;
        height:60px;
        line-height:60px;
        background-color:#f5f5f5;
        text-indent: 20px;
        a{
          float: right;
          margin-right:20px;
          width:30px;
          height:30px;
          margin-top:15px;
          line-height: 30px;
          font-size:14px;
          position: relative;
          border-radius: 50%;
          i{
            position: absolute;
            top:8px;
            left:-9px;
            width:14px;
            height:14px;
          }
          &:hover{
            background-color:red;
            i{
              color:#fff;
            }
          }
        }
      }
    }
  }

  .opacity-transition{
    opacity:1;
  }
  .opacity-enter{
    opacity:0;
    transition:opacity .8s ease;
  }
  .opacity-leave{
    opacity:0;
    transition: opacity .8s .3s ease;
  }
  .translate-transition{
    opacity:1;
    transform:translateY(0);
    transition:all .8s ease;
  }
  .translate-enter{
    opacity:0;
    transform:translateY(-1000px);
    transition: opacity .8s .3s ease;
  }
  .translate-leave{
    opacity:0;
    transform:translateY(-1000px);
  }
</style>
