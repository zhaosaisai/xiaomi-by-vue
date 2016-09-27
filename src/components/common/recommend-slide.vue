<template lang="html">
<div class="goods-list clearfix">
  <ul class="goods-items clearfix" v-width="234" :style="{'transform':'translateX('+(-iNow*oneLength)+'px)'}">
    <li v-for="good in goods" class="common-translate">
      <a :href="good.sourceUrl">
        <img :src="good.imgUrl" alt="" />
        <span class="goods-title">
          {{good.title}}
        </span>
      </a>
      <p class="price">
        {{good.price}}元
      </p>
      <p class="intro">
        {{good.intro}}人好评
      </p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      timer:'',
      iNow:0,
      oneLength:1240
    }
  },
  computed: {
    cateGoods:function(){
      let result = [[],[]];
      this.goods.forEach(function(v,i){
        var index = Math.floor(i % 5);
        result[index].push(v);
      })
      return result;
    },
    allLength:function(){
      return Math.ceil(this.goods.length / 5);
    }
  },
  ready () {},
  attached () {},
  components: {},
  props:{
    goods:{
      type:Array,
      required:true
    },
    status:{
      type:Boolean
    },
    isend:{
      type:Boolean
    }
  },
  directives:{
    'width':function(val){
      this.el.style.width = this.vm.goods.length * (parseInt(val)+14) + 'px';
    }
  },
  methods:{
    next:function(){
      if(this.iNow < this.allLength - 1){
        this.iNow = this.iNow + 1;
      }else{
        this.iNow = 0;
      }
      if(this.iNow == this.allLength - 1){
        this.status = true;
      }else{
        this.status = false;
      }
    },
    prev:function(){
      if(this.iNow > 0){
        this.iNow = this.iNow - 1;
      }else{
        this.status = !this.status;
        this.iNow = this.allLength - 1;
      }
      if(this.iNow == 0){
        this.status = false;
      }else{
        this.status = true;
      }
    }
  },
  events:{
    next:'next',
    prev:'prev'
  }
}
</script>

<style lang="scss" scoped>
  .goods-list{
    height:300px;
    overflow: hidden;
    font-size: 12px;
    .goods-items{
      height:300px;
      transition: all 0.5s ease;
      li{
        width:234px;
        height:300px;
        margin-right: 14px;
        padding-top:29px;
        float: left;
        text-align: center;
        background:#fafafa;
        a{
          display: block;
          margin-bottom: 15px;
          span{
            display: block;;
            color: #212121;
          }
          img{
            width:140px;
            height:140px;
            margin-bottom: 15px;
          }
        }
        .intro{
          color:#b0b0b0;
        }
        .price{
          color:#ff6700;
          font-size:14px;
        }
      }
    }
  }
</style>
