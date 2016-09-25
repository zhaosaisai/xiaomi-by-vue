<template lang="html">
  <div class="top-last clearfix">
    <div class="last-left">
      <ul class="last-item">
        <li v-for="item in mapItems" :class="{top: $index < 3, left: $index % 3 != 0}">
          <a href="#">
            <i class="fa fa-2x" :class="item.icon"></i>
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="last-ad" v-for="bg in bgs">
      <a :href="bg.sourceUrl">
        <img :src="bg.url" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        mapItems:[
          {title:'选购手机',icon:'fa-mobile',sourceUrl:'http://www.mi.com/compare/'},
          {title:'企业团购',icon:'fa-shopping-bag',sourceUrl:'http://qiye.mi.com/'},
          {title:'官翻产品',icon:'fa-refresh',sourceUrl:'http://item.mi.com/re'},
          {title:'小米移动',icon:'fa-credit-card',sourceUrl:'http://www.mi.com/mimobile/'},
          {title:'以旧换新',icon:'fa-exchange',sourceUrl:'http://huanxin.mi.com/product/list'},
          {title:'话费充值',icon:'fa-credit-card-alt',sourceUrl:'http://recharge.10046.mi.com/'}
        ],
        bgs:[
          {url:'http://i3.mifile.cn/a4/594e4822-a3ea-4a09-8728-a1e4314310d1',sourceUrl:'http://item.mi.com/buyphone/note4'},
          {url:'http://i3.mifile.cn/a4/c7dcd82d-f40c-4bad-958d-b6d6c3b6a269',sourceUrl:'http://item.mi.com/buyphone/hongmi3s'},
          {url:'http://i3.mifile.cn/a4/e0d0431f-4369-42c5-8f4f-fa81622c3792',sourceUrl:'http://www.mi.com/dianfanbao/'}
        ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
  .top-last{
    width:1226px;
    height:170px;
    margin: 20px auto;
    .last-left{
      width:234px;
      height:164px;
      padding:3px;
      float:left;
      background-color: #5f5750;
      li{
        width:78px;
        height:80px;
        box-sizing: border-box;
        float: left;
        font-size: 12px;
        position: relative;
        text-align: center;
        &.top::after{
          content: "";
          width: 64px;
          height:1px;
          background-color: #665e57;
          position: absolute;
          top:80px;
          left:0;
        }
        &.left::before{
          content: "";
          width: 1px;
          height:64px;
          background-color: #665e57;
          position: absolute;
          top:8px;
          left:-5px;
        }
        a{
          display: block;
          padding-top:20px;
          color:rgba(255,255,255,0.6);
          i{
            width: 100%;
            height: 24px;
            display: block;
            margin-bottom: 10px;
          }
          &:hover{
            color:#fff;
          }
        }
      }
    }
    .last-ad{
      width:316px;
      height:100%;
      float: left;
      img{
        width:100%;
        height:100%;
      }
      margin-left: 12px;
    }
  }
</style>
