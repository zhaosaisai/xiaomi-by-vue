<!-- 这是网页最上面的header部分 -->
<template>
  <header class="header-container">
    <div class="header-wrap clearfix">
      <ul class="list-wrap clearfix">
        <!-- 通过data里面的数据动态渲染 -->
        <li v-for="item in naviList">
          <!-- 首页是在当前页面打开 -->
          <template v-if="item.name === '小米商城'">
            <a :href="item.url">{{item.name}}</a>
          </template>
          <!-- 非首页是在新tap页面打开 -->
          <template v-else>
            <a :href="item.url" target="_blank">{{item.name}}</a>
          </template>
          <span class="delimite" v-if="$index !== naviList.length-1">|</span>
        </li>
      </ul>
      <div class="rightCon">
        <div class="loginAndReg">
          <a href="javascript:;">登录</a>
          <span class="delimite">|</span>
          <a href="javascript:;">注册</a>
          <span class="delimite">|</span>
          <a href="javascript:;">消息通知</a>
        </div>
        <div class="shopCar" @mouseenter="carEnter" @mouseleave="carLeave">
          <i class="car"></i>
          <span>购物车({{count}})</span>
          <div class="carList" v-show="carStatus" transition="fade">
            你还没有任何物品
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default{
    data(){
      return {
        naviList:[
          {name:'小米商城',url:'http://www.mi.com/index.html'},
          {name:'MIUI', url:'http://www.miui.com/'},
          {name:'米聊',url:'http://www.miliao.com/'},
          {name:'游戏', url:'http://game.xiaomi.com/'},
          {name:'多看阅读', url:'http://www.duokan.com/'},
          {name:'云服务', url:'https://i.mi.com/'},
          {name:'小米网移动版', url:'http://www.mi.com/c/appdownload/'},
          {name:'问题反馈', url:'http://static.mi.com/feedback/'},
          {name:'Select Region', url:'http://www.mi.com/index.html'},
        ],
        count:0,
        carStatus:false
      }
    },
    methods:{
      carEnter:function(){
        clearTimeout(this.timer);
        this.carStatus = true;
      },
      carLeave:function(){
        let self = this;
        this.timer = setTimeout(()=>{
          self.carStatus = false;
        },300);
      }
    }
  }
</script>
<style lang="scss">
  // 这个是header的样式
  $header-bg:#333;
  $font-color:#B0B0B0;
  $hover-color:#fff;
  $height:40px;
  $wrap-width:1226px;
  .header-container{
    width:100%;
    height:$height;
    background-color: $header-bg;
    .header-wrap{
      width:$wrap-width;
      height:$height;
      margin:0 auto;
      color:$font-color;
      font-size:12px;
      a{
        color:$font-color;
        &:hover{
          color:$hover-color;
        }
      }
      .list-wrap{
        float:left;
        li{
          float: left;
          height:$height;
          line-height: $height;
          .delimite{
            margin:0 5px;
          }
        }
      }
      .rightCon{
        float: right;
        height:$height;
        line-height: $height;
        text-align:center;
        .loginAndReg{
          float: left;
          margin-right:20px;
        }
        .shopCar{
          float: right;
          width:120px;
          height:$height;
          background-color:#424242;
          text-align:center;
          cursor: pointer;
          position: relative;
          .carList{
            position: absolute;
            width:300px;
            line-height: 100px;
            text-align: center;
            right:0;
            top:$height;
            background-color:#fff;
            box-shadow: 0 0 5px #ccc;
            overflow:hidden;
            z-index:101;
          }
          i{
            $size:20px;
            $top:( $height - $size) /2;
            width:$size;
            height:$size;
            background:url('../assets/images/car.png') no-repeat center center;
            background-size:contain;
            margin-top:$top;
            display: inline-block;
            vertical-align: top;
            margin-right:6px;
          }
          &:hover{
            background-color:#fff;
            i{
              background-image: url('../assets/images/car-hover.png');
            }
            span{
              color:#FF6700;
            }
          }
        }
      }
    }
    .fade-transition{
      transition: all .5s ease;
      height: 100px;
    }
    .fade-enter, .fade-leave{
      height:0;
    }
  }

</style>
