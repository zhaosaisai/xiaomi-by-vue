<template>
  <!-- 这是一个小的slide组件 -->
  <div class="small-container common-translate":style="{borderTopColor:datas.color}" @mouseover="fade=true" @mouseout="fade=false">
      <p class="name" :style="{color:datas.color}">
        {{datas.name}}
      </p>
      <ul class="small-items clearfix" :style="{'transform':'translateX('+(-iNow*oneWidth)+'px)'}">
          <li class="small-item" v-for="data in datas.slides">
            <a :href="data.sourceUrl" class="content" target="_blank">
              <span class="title">{{data.title}}</span>
              <span class="intro">{{data.intro}}</span>
              <span class="free">{{data.freeText}}</span>
              <a @mouseover="changeColor(datas.color)" @mouseout="resetColor" class="btn" :href="data.btnUrl" v-show="data.hasBtn" :style="{color:datas.color,borderColor:datas.color}">{{data.btnText}}</a>
              <span class="img-span"><img :src="data.imgUrl" alt="" /></span>
            </a>
          </li>
      </ul>
      <ul class="slide-index clearfix">
        <li v-for="n in 4" @click="iNow = $index" :class="{'active':iNow === $index}"></li>
      </ul>
      <a href="javascript:;" class="fa fa-angle-left left" @click="next" v-show="fade" transition="fade"></a>
      <a href="javascript:;" class="fa fa-angle-right right" @click="prev" v-show="fade" transition="fade"></a>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        oneWidth:296,
        iNow:0,
        fade:false
      };
    },
     props:{
       datas:{
         type:Object,
         required:true
       }
     },
    methods:{
      next:function(){
        if(this.iNow === 0){
          this.iNow = 0;
        }else{
          this.iNow = this.iNow - 1;
        }
      },
      prev:function(){
        if(this.iNow === this.datas.slides.length - 1){
          this.iNow = this.datas.slides.length - 1;
        }else{
          this.iNow = this.iNow + 1;
        }
      },
      changeColor:function(){
        
      }
    }
  }
</script>
<style lang="scss">
  .small-container{
    $width:296px;
    .nowrap{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    width:$width;
    height:420px;
    background-color:#fff;
    box-sizing: border-box;
    padding-top:30px;
    text-align:center;
    border-top:solid 1px #ccc;
    position: relative;
    float: left;
    overflow: hidden;
    .small-items{
      width:$width * 4;
      transition: all .5s ease;
      .small-item{
        width:$width;
        float: left;
        height: 287px;
        .btn{
          display: block;
          margin: 0 auto 10px;
          width:130px;
          height:25px;
          line-height: 25px;
          border-radius: 5px;
          border:solid 1px;
        }
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
          height: 40px;
          overflow: hidden;
        }
        .free{
          font-size:14px;
          margin-top:10px;
          height:20px;
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
    .fade-transition{
      background-color: rgba(0,0,0,0.5);
    }
    .fade-enter,.fade-leave{
      background-color: rgba(0,0,0,0);
    }
  }
</style>
