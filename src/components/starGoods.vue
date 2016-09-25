<template lang="html">
  <div class="star-container">
    <div class="star-title clearfix">
      <h2>小米明星单品</h2>
      <div class="star-change">
        <span :class="{'prev':true,'star-disabled':changeStatus}" @click="nextSlide">
          <i class="fa fa-angle-left"></i>
        </span>
        <span :class="{'next':true,'star-disabled':!changeStatus}" @click="prevSlide">
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <star-slider :goods="goods" :status.sync="changeStatus"></star-slider>
  </div>
</template>

<script>
import starSlider from './common/starSlider.vue';
export default {
  data () {
    return {
      goods:[
        {
          sourceUrl:'http://item.mi.com/buyphone/mi5',
          imgUrl:'http://i3.mifile.cn/a4/0df5d106-ab01-4013-87de-a9793094245d',
          title:'小米5 高配64GB',
          intro:'赠 49元智能插座 基础版',
          price:'2099',
          topColor:'#ffac13'
        },
        {
          sourceUrl:'http://item.mi.com/buyphone/mimax',
          imgUrl:'http://i3.mifile.cn/a4/ac9d56f1-65c6-4174-940b-b3c79aafe0a2',
          title:'小米Max',
          intro:'赠 59元智能显示保护套',
          price:'1799',
          topColor:'#83c44e'
        },
        {
          sourceUrl:'http://item.mi.com/buymibook/air',
          imgUrl:'http://i3.mifile.cn/a4/f35e0d0a-afae-443c-a7e6-3a49c40e2df1',
          title:'小米笔记本',
          intro:'独立显卡、超轻薄、金属机身',
          price:'3499',
          topColor:'#2196f3'
        },
        {
          sourceUrl:'http://item.mi.com/static/buymipad',
          imgUrl:'http://i3.mifile.cn/a4/4c68c352-fbd3-452d-be90-7b47e4f6ce76',
          title:'小米平板2 16GB现货',
          intro:'轻薄全金属，海量内容',
          price:'999',
          topColor:'#e53935'
        },
        {
          sourceUrl:'http://item.mi.com/buyphone/mi5',
          imgUrl:'http://i3.mifile.cn/a4/0df5d106-ab01-4013-87de-a9793094245d',
          title:'小米5 高配64GB',
          intro:'赠 49元智能插座 基础版',
          price:'2099',
          topColor:'#ffac13'
        },
        {
          sourceUrl:'http://item.mi.com/buyphone/mimax',
          imgUrl:'http://i3.mifile.cn/a4/ac9d56f1-65c6-4174-940b-b3c79aafe0a2',
          title:'小米Max',
          intro:'赠 59元智能显示保护套',
          price:'1799',
          topColor:'#83c44e'
        },
        {
          sourceUrl:'http://item.mi.com/buymibook/air',
          imgUrl:'http://i3.mifile.cn/a4/f35e0d0a-afae-443c-a7e6-3a49c40e2df1',
          title:'小米笔记本',
          intro:'独立显卡、超轻薄、金属机身',
          price:'3499',
          topColor:'#2196f3'
        },
        {
          sourceUrl:'http://item.mi.com/static/buymipad',
          imgUrl:'http://i3.mifile.cn/a4/4c68c352-fbd3-452d-be90-7b47e4f6ce76',
          title:'小米平板2 16GB现货',
          intro:'轻薄全金属，海量内容',
          price:'999',
          topColor:'#e53935'
        },
        {
          sourceUrl:'http://item.mi.com/buyphone/mimax',
          imgUrl:'http://i3.mifile.cn/a4/ac9d56f1-65c6-4174-940b-b3c79aafe0a2',
          title:'小米Max',
          intro:'赠 59元智能显示保护套',
          price:'1799',
          topColor:'#83c44e'
        },
        {
          sourceUrl:'http://item.mi.com/buymibook/air',
          imgUrl:'http://i3.mifile.cn/a4/f35e0d0a-afae-443c-a7e6-3a49c40e2df1',
          title:'小米笔记本',
          intro:'独立显卡、超轻薄、金属机身',
          price:'3499',
          topColor:'#2196f3'
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
    'star-slider':starSlider
  }
}
</script>

<style lang="scss">
  .star-container{
    width:1226px;
    height:438px;
    margin: 20px auto;
    .star-title{
      height:58px;
      h2{
        color:#333;
        font-weight:200;
        font-size:22px;
        line-height: 58px;
        height:58px;
        margin:0;
        float: left;
      }
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
