<template>
  <div class="top-header">
    <div class="top-container clearfix">
      <a href="" class="logo-icon"></a>
      <a href="" class="gif-icon"></a>
      <ul class="product-item clearfix">
        <li v-for="item in titleList">
          <template v-if="item.type">
            <a href="javascript:;" class="list-item" @mouseover="titleOver(item.type)" @mouseout="titleOut">{{item.title}}</a>
          </template>
          <template v-else>
            <a :href="item.sourceUrl" class="list-item" target="_blank">{{item.title}}</a>
          </template>
        </li>
      </ul>
      <!-- 搜索框的布局 -->
      <div :class="{'search':true, 'active-border':hotStatus}">
        <input type="text" :class="{'search-text':true, 'active-border':hotStatus}" @focus="textFocus" @blur="textblur" v-model="filterFields">
        <input type="button" class="search-btn" >
        <!-- 热卖商品 -->
        <ul class="hot-goods clearfix" v-show="!hotStatus">
          <li v-for="item in hotItem" v-show="$index < 2">
            {{item}}
          </li>
        </ul>
        <ul class="hotResults" v-show="hotStatus">
          <li v-for="result in hotResults | filterBy filterFields in 'name' " v-show="$index < 10">
            <span class="name">{{result.name}}</span>
            <span class="number">约有{{result.number}}件</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 各个种类商品详情的展示 -->
    <div class="listDetail" v-show="titleHover" transition="fade" @mouseover="titleOver()" @mouseout="titleOut()">
      <ul class="detailWrap">
        <li v-for="item in currentType" class="detailItem">
          <a :href="item.sourcePath" :class="{rightBorder:$index ==(currentType.length - 1)}">
            <img :src="item.imgUrl">
          </a>
          <span class="name">{{item.name}}</span>
          <span class="price">{{item.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        titleHover:false,
        tid:'',
        hotStatus:false,
        hotItem:['红米pro','小米笔记本air'],
        currentType:'',
        filterFields:'',
        titleList:[
          {title:'小米手机',type:'xiaomi'},
          {title:'红米',type:'red'},
          {title:'平板·笔记本',type:'notebook'},
          {title:'电视',type:'watch'},
          {title:'盒子·影音',type:'vedio'},
          {title:'路由器',type:'router'},
          {title:'智能硬件',type:'hardware'},
  				{title: '服务', sourceUrl: '//www.mi.com/service/'},
  				{title: '社区', sourceUrl: 'http://www.xiaomi.cn'}
        ],
        xiaomi:[
          {name: '小米Max', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元起'},
  				{name: '小米手机5', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1499元起'},
  				{name: '小米手机4c', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1099元'}
        ],
        red:[
          {name: '红米pro', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1499元起'},
  				{name: '红米note3', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '899元起'},
  				{name: '红米手机3S', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '699元起'},
  				{name: '红米手机3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '699元起'},
  				{name: '红米手机3X', imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '799元'}
        ],
        notebook:[
          {name: '小米平板2 16GB', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '999元'},
  				{name: '小米平板2 64GB', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元'},
  				{name: '小米平板2 64GB Windows版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元'},
  				{name: '小米笔记本Air 12.5', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '3499元'},
  				{name: '小米笔记本Air 13.3', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '4999元'}
        ],
        watch:[
          {name: '小米电视3S 43英寸', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/43/', price: '1499元'},
  				{name: '小米电视3S 48英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/48/', price: '1999元'},
  				{name: '小米电视3 55英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/55/', price: '3299元起'},
  				{name: '小米电视3 60英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/60/', price: '3499元'},
  				{name: '小米电视3S 65英寸 曲面', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '8999元'},
  				{name: '小米电视3 70英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/70/', price: '8999元'}
        ],
        vedio:[
          {name: '小米盒子mini版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png', sourcePath: 'http://www.mi.com/hezimini/', price: '179元'},
  				{name: '小米盒子3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png', sourcePath: 'http://www.mi.com/hezi3/', price: '249元'},
  				{name: '小米盒子3 增强版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg', sourcePath: 'http://www.mi.com/hezi3s/', price: '399元'},
  				{name: '小米电视主机', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg', sourcePath: 'http://www.mi.com/tvzj/', price: '999元'},
  				{name: '小米家庭音响 金属版', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg', sourcePath: 'http://item.mi.com/1160800073.html', price: '899元'},
  				{name: '小米家庭音响 标准版', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg', sourcePath: 'http://item.mi.com/1160800074.html', price: '699元'}
        ],
        router:[
          {name: '全新小米路由器', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/43/', price: '699元起'},
  				{name: '小米路由器 3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifi-3!160x110.jpg', sourcePath: 'http://www.mi.com/miwifi3/', price: '149元'},
  				{name: '小米路由器 mini', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifimini!160x110.jpg', sourcePath: 'http://www.mi.com/miwifimini/', price: '119元'},
  				{name: '小米路由器 3C', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/60/', price: '99元'},
  				{name: '小米路由器 青春版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifilite!160x110.jpg', sourcePath: 'http://www.mi.com/miwifilite/', price: '69元'},
  				{name: '小米WiFi放大器', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/wifiExtension!160x110.jpg', sourcePath: 'http://item.mi.com/1153200003.html', price: '35元'}
        ],
  			hardware: [
  				{name: '九号平衡车', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg', sourcePath: 'http://www.mi.com/scooter/', price: '1999元'},
  				{name: '小米净水器', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg', sourcePath: 'http://www.mi.com/water/', price: '1299元起'},
  				{name: '米家压力IH电饭煲', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg', sourcePath: 'http://www.mi.com/dianfanbao/', price: '999元'},
  				{name: '小米空气净化器 2', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg', sourcePath: 'http://www.mi.com/air2/', price: '649元'},
  				{name: '智能摄像机', imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg', sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji', price: '149元起'}
  			],
        hotResults:[
          {name:'小米手机5',number:11},
          {name:'空气净化器2',number:1},
          {name:'活塞耳机',number:4},
          {name:'小米路由器',number:8},
          {name:'移动电源',number:21},
          {name:'运动相机',number:3},
          {name:'小米摄像机',number:2},
          {name:'小米体重秤',number:1},
          {name:'小米插线板',number:12},
          {name:'配件优惠套装',number:11},
        ]
      }
    },
    methods:{
      titleOver:function(type){
        clearTimeout(this.tid);
        this.titleHover = true;
        if(type){
          this.currentType = this[type];
        }
      },
      titleOut:function(){
        let self = this;
        this.tid = setTimeout(function(){
          self.titleHover = false;
        },300);
      },
      textFocus:function(){
        this.hotStatus = true;
      },
      textblur:function(){
        this.hotStatus = false;
      },
    },
    // computed:{
    //   currentType:function(){
    //     return this[this.type];
    //   }
    // }
  }
</script>
<style lang="scss">
  .top-header{
    $height:100px;
    $wrap-width:1226px;
    @mixin margin-top($top, $height:$height){
      margin-top:($height - $top) / 2;
    }
    width:100%;
    height:$height;
    .top-container{
      height:$height;
      width:$wrap-width;
      margin:0 auto;
      .logo-icon{
        width:55px;
        height:55px;
        display: inline-block;
        background:url('../assets/images/logo.png') no-repeat;
        @include margin-top(55);
      }
      .gif-icon{
        width:163px;
        height:66px;
        display: inline-block;
        // background:url('../assets/images/gif.gif') no-repeat;
        margin-left:10px;
        @include margin-top(66);
      }
      .product-item{
        display: inline-block;
        height:88px;
        line-height:88px;
        margin:0;
        padding:0;
        vertical-align: top;
        @include margin-top(88);
        li{
          float: left;
          .list-item{
            display: block;
            height:88px;
            line-height:88px;
            padding:0 10px;
            color:#333;
            &:hover{
              color:#ff6700;
            }
          }
        }
      }
    }
    .listDetail{
      width:100%;
      background-color:#fff;
      box-shadow: 0px 0px 5px #ccc;
      overflow: hidden;
      position: relative;
      z-index:999;
      .detailWrap{
        min-width:1500px;
        padding:30px 0 0 150px;
        .detailItem{
          float:left;
          a{
            display: block;
            padding:0 30px;
            border-right :solid 1px #ccc;
            img{
              width:160px;
              height:110px;
            }
            &.rightBorder{
              border-right:none;
            }
          }
          span{
            display: block;
            text-align: center;
            margin-top:10px;
            font-size:12px;
            width:100%;
            &.name{
              color:#333;
              margin-top:16px;
            }
            &.price{
              color:#ff6700;
            }
          }
        }
      }
    }
    .search{
      $width:240px;
      width:295px;
      float:right;
      height:50px;
      border:1px solid #e0e0e0;
      position: relative;
      @include margin-top(52);
      .search-text{
        width:$width;
        height:50px;
        padding:0;
        margin:0;
        border:none;
        border-right:1px solid #e0e0e0;
        box-sizing: border-box;
        outline: none;
        font-size:14px;
        padding-left:5px;
      }
      .search-btn{
        width:55px;
        height:50px;
        border:none;
        padding:0;
        float: right;
        box-sizing: border-box;
        outline: none;
        background:#ff6700 url('../assets/images/search-hover.png') no-repeat center center;
        background-size:20px;
      }
      .hot-goods{
        position: absolute;
        top:17px;
        right:60px;
        li{
          height:18px;
          line-height: 18px;
          background-color: #eee;
          color:#757575;
          padding:0 3px;
          float: left;
          margin-right:5px;
          font-size:12px;
          cursor: pointer;
          &:hover{
            color:#fff;
            background-color:#ff6700;
          }
        }
      }
      .hotResults{
        width:$width;
        width: 241px;
        background-color: #fff;
        border: solid 1px #ff6700;
        position: relative;
        left: -1px;
        box-sizing: border-box;
        z-index: 100;
        li{
          height:30px;
          line-height:30px;
          font-size:12px;
          width:100%;
          .name{
            float: left;
            margin-left:5px;
          }
          .number{
            float: right;
            margin-right:5px;
          }
          &:hover{
            background-color:#ff6700;
            color:#fff;
          }
        }
      }
      .active-border{
        border-color:#ff6700;
      }
    }
    .active-border{
      border-color:#ff6700;
    }
    .fade-transition{
      transition:all 0.5s ease;
      height:230px;
      opacity:1;
    }
    .fade-enter, .fade-leave{
      height:0;
      opacity:0;
    }
  }
</style>
