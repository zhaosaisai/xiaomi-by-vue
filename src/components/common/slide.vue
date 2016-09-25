<template>
  <div class="banner-wrap" @mouseover="over" @mouseout="out">
    <span class="prev banner-btn" @click="prevSlide">
      <i class="fa fa-chevron-left fa-2x fa-fw"></i>
    </span>
    <span class="next banner-btn" @click="nextSlide">
      <i class="fa fa-chevron-right fa-2x fa-fw"></i>
    </span>
    <div class="img-wrap" v-for="slide in slideBar" v-show="$index === currentImg" transition="bannerTran">
      <a :href="slide.sourceUrl" target="_blank">
        <img :src="slide.imgUrl" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        currentImg:0,
        timeId:''
      }
    },
    props:{
      slideBar:{
        type:Array,
        required:true
      }
    },
    methods:{
      nextSlide:function(){
        if(this.currentImg === this.slideBar.length - 1){
          this.currentImg = 0;
        }else{
          this.currentImg = this.currentImg + 1;
        }
      },
      prevSlide:function(){
        if(this.currentImg === 0){
          this.currentImg = this.slideBar.length - 1;
        }else{
          this.currentImg = this.currentImg - 1;
        }
      },
      autoPlay:function(){
        this.timeId = setInterval(() => {
          this.nextSlide();
        },3000)
      },
      over:function(){
        clearInterval(this.timeId);
      },
      out:function(){
        this.autoPlay();
      }
    },
    ready:function(){
      this.autoPlay();
    }
  }
</script>
<style lang="scss">
  .banner-wrap{
    width:1226px;
    height:100%;
    position: relative;
    .banner-btn{
      width:41px;
      height:69px;
      position: absolute;
      top:50%;
      margin-top: -35px;
      cursor: pointer;
      z-index:2;
      &:hover{
        background-color: rgba(0, 0, 0, 0.6);
          color:#fff;
      }
      i{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
      }
      &.next{
        right:0;
      }
    }
    .img-wrap{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .bannerTran-transition{
      transition: all 0.5s ease;
      opacity: 1;
    }
    .bannerTran-enter, .bannerTran-leave{
      opacity: 0;
    }
  }
</style>
