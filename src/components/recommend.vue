<template lang="html">
  <div class="star-container">
    <div class="star-title clearfix">
      <h2 class="goods-title">为你推荐</h2>
      <div class="star-change">
        <span :class="{'prev':true,'star-disabled':changeStatus}" @click="nextSlide">
          <i class="fa fa-angle-left"></i>
        </span>
        <span :class="{'next':true,'star-disabled':!changeStatus}" @click="prevSlide">
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <recommend-slide :goods="goods" :status.sync="changeStatus"></recommend-slide>
  </div>
</template>

<script>
import recommendSlide from './common/recommend-slide.vue';
export default {
  data () {
    return {
      goods:[
        {
          sourceUrl:'http://item.mi.com/1154900069.html',
          imgUrl:'http://i1.mifile.cn/a1/T1PyZ_Bjdv1RXrhCrK.jpg?width=140&height=140',
          title:'小米智能插座 基础版',
          intro:'9524',
          price:'49'
        },
        {
          sourceUrl:'http://item.mi.com/buyphone/mimax',
          imgUrl:'http://i3.mifile.cn/a4/ac9d56f1-65c6-4174-940b-b3c79aafe0a2',
          title:'小米Max',
          intro:'赠 59元智能显示保护套',
          price:'1799'
        },
        {
          sourceUrl:'http://item.mi.com/1153300030.html',
          imgUrl:'http://i1.mifile.cn/a1/T1LrdvBbAT1RXrhCrK.jpg?width=140&height=140',
          title:'小米手环',
          intro:'12万',
          price:'69'
        },
        {
          sourceUrl:'http://item.mi.com/1155100006.html',
          imgUrl:'http://i1.mifile.cn/a1/T1_tEgBmVv1RXrhCrK.jpg?width=140&height=140',
          title:'米兔儿童电话手表',
          intro:'9622',
          price:'299'
        },
        {
          sourceUrl:'http://item.mi.com/1162400064.html',
          imgUrl:'http://i1.mifile.cn/a1/pms_1471314891.14933270.jpg?width=140&height=140',
          title:'米家骑记电助力折叠自行车',
          intro:'365',
          price:'2999'
        },
        {
          sourceUrl:'http://item.mi.com/1153700018.html',
          imgUrl:'http://i1.mifile.cn/a1/T1Ay_gBKKv1RXrhCrK.jpg?width=140&height=140',
          title:'90分旅行箱 20寸',
          intro:'1.6万',
          price:'299'
        },
        {
          sourceUrl:'http://item.mi.com/1162500031.html',
          imgUrl:'http://i1.mifile.cn/a1/pms_1473125484.8332236.jpg?width=140&height=140',
          title:'米家飞利浦智睿台灯二代',
          intro:'900',
          price:'199'
        },
        {
          sourceUrl:'http://item.mi.com/1155100011.html',
          imgUrl:'http://i1.mifile.cn/a1/T1CDbjBgAT1RXrhCrK.jpg?width=140&height=140',
          title:'90分旅行箱 24寸',
          intro:'1.2万',
          price:'349'
        },
        {
          sourceUrl:'http://item.mi.com/1161000003.html',
          imgUrl:'http://i1.mifile.cn/a1/T1LpWjB4bv1RXrhCrK.jpg?width=140&height=140',
          title:'小米空气净化器滤芯 经济版',
          intro:'707',
          price:'149'
        },
        {
          sourceUrl:'http://item.mi.com/1163500007.html',
          imgUrl:'http://i1.mifile.cn/a1/pms_1472711253.2453066.jpg?width=140&height=140',
          title:'8H护颈乳胶枕',
          intro:'209',
          price:'239'
        },
        {
          sourceUrl:'http://item.mi.com/1154300036.html',
          imgUrl:'http://i1.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=140&height=140',
          title:'小米小钢炮蓝牙音箱2',
          intro:'1.4万',
          price:'239'
        },
        {
          sourceUrl:'http://item.mi.com/1161800001.html',
          imgUrl:'http://i1.mifile.cn/a1/T1HQA_BCd_1RXrhCrK.jpg?width=140&height=140',
          title:'8H护颈乳胶枕',
          intro:'209',
          price:'239'
        },
        {
          sourceUrl:'http://item.mi.com/1154900069.html',
          imgUrl:'http://i1.mifile.cn/a1/T1PyZ_Bjdv1RXrhCrK.jpg?width=140&height=140',
          title:'小米智能插座 基础版',
          intro:'9524',
          price:'49'
        },
        {
          sourceUrl:'http://item.mi.com/buyphone/mimax',
          imgUrl:'http://i3.mifile.cn/a4/ac9d56f1-65c6-4174-940b-b3c79aafe0a2',
          title:'小米Max',
          intro:'赠 59元智能显示保护套',
          price:'1799'
        },
        {
          sourceUrl:'http://item.mi.com/1153300030.html',
          imgUrl:'http://i1.mifile.cn/a1/T1LrdvBbAT1RXrhCrK.jpg?width=140&height=140',
          title:'小米手环',
          intro:'12万',
          price:'69'
        }
      ],
      changeStatus:false
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    nextSlide:function(){
      if(!this.changeStatus){
        this.$broadcast('next');
      }
    },
    prevSlide:function(){
      if(this.changeStatus){
        this.$broadcast('prev');
      }
    }
  },
  components: {
    'recommend-slide':recommendSlide
  }
}
</script>

<style lang="scss">
@import '../assets/css/common.scss';
  .star-container{
    width:1226px;
    height:438px;
    margin: 20px auto;
    .star-title{
      height:58px;
      .star-change{
        width:70px;
        height:25px;
        border:solid 1px #e0e0e0;
        float: right;
        margin-top: 17px;
        span{
          width:35px;
          height:25px;
          float: left;
          text-align: center;
          line-height: 25px;
          box-sizing: border-box;
          cursor: pointer;
          color:#b0b0b0;
          &+span{
            border-left: solid 1px #e0e0e0;
          }
          &.star-disabled{
            color:#e0e0e0;
            cursor: default;
            &:hover{
              color:#e0e0e0;
            }
          }
          &:hover{
            color:#ff6700;
          }
        }
      }
    }
  }
</style>
