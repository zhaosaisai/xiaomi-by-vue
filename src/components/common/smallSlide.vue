<template>
  <!-- 这是一个小的slide组件 -->
  <div class="small-container common-translate">
      <p class="name">
        MIUI 主题
      </p>
      <ul class="small-items">
          <li class="small-item">
          <a href="#" class="content">
            <span class="title">剑侠世界</span>
            <span class="intro">游戏同名主题，免费下载！吴亦凡陪你仗剑江湖！</span>
            <span class="free">免费</span>
            <span class="img-span"><img src="http://i3.mifile.cn/a4/f824eaec-20c3-4163-aa82-b0b3b324714b" alt="" /></span>
          </a>
          </li>
      </ul>
      <ul class="slide-index clearfix">
        <li v-for="n in 4"></li>
      </ul>
      <a href="javascript:;" class="fa fa-angle-left left" ></a>
      <a href="javascript:;" class="fa fa-angle-right right"></a>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      };
    },
    // props:{
    //   datas:{
    //     type:Object,
    //     required:true
    //   }
    // }
  }
</script>
<style lang="scss">
  .small-container{
    .nowrap{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    width:296px;
    height:420px;
    background-color:#fff;
    box-sizing: border-box;
    padding-top:40px;
    text-align:center;
    border-top:solid 1px #ccc;
    position: relative;
    float: left;
    overflow: hidden;
    .name{
      height:30px;
      font-size:16px;
      @extend .nowrap;
    }
    span{
      display: block;
      width:270px;
      margin:0 auto;
    }
    .title{
      font-size: 20px;
      @extend .nowrap;
    }
    .intro{
      font-size: 12px;
      color:#b0b0b0;
      margin-top:10px;
      line-height:20px;
    }
    .free{
      font-size:14px;
      margin-top:10px;
    }
    .img-span{
      width:216px;
      height: 154px;
      margin:15px auto;
      overflow: hidden;
      img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .slide-index{
      width:100%;
      height:30px;
      line-height: 30px;
      li{
        display: inline-block;
        width:6px;
        height:6px;
        background-color:#b0b0b0;
        margin-right:15px;
        border-radius: 50%;
        transition:all 0.5s ease;
        cursor: pointer;
        border:solid 2px #fff;
        &:hover{
          background:#ff6700;
        }
        &.active{
          border:solid 2px #ff6700;
          background-color:#fff;
        }
      }
    }
    a.left, a.right{
      width:20px;
      height:48px;
      position: absolute;
      top:50%;
      margin-top: -24px;
      background-color: rgba(0,0,0,0);
      color:#fff;
      line-height: 48px;
      transition: all .5s ease;
      &:hover{
        background-color:rgba(0,0,0,0.8);
      }
    }
    a.left{
      left:0;
    }
    a.right{
      right:0;
    }
  }
</style>
