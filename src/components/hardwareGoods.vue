<template>
  <div class="hardware-goods">
    <div class="hardware-titles clearfix">
      <h2 class="goods-title">智能硬件</h2>
      <a :href="moreUrl" class="get-more" target="_blank">
        查看全部
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
    <div class="hardware-content clearfix">
      <div class="content-left common-translate">
        <a :href="goodsLeft.sourceUrl">
          <img :src="goodsLeft.imgUrl">
        </a>
      </div>
      <ul class="content-right">
        <li v-for="goods in goodsList" class="common-translate">
          <h5 class="special-title" v-show="goods.isSpecial" :style="{'backgroundColor':goods.specialColor}">{{goods.specialText}}</h5>
          <a :href="goods.sourceUrl" target="_blank">
            <img :src="goods.imgUrl" alt="">
            <span class="goods-title">{{goods.title}}</span>
          </a>
          <p class="goods-intro">{{goods.intro}}</p>
          <p class="goods-price">{{goods.price}}元</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
          moreUrl:'http://www.mi.com/smart/',
          goodsLeft:{
            sourceUrl:'http://www.mi.com/water2/',
            imgUrl:'http://i3.mifile.cn/a4/57c2f4fb-6743-44c6-b447-6bd55aaeef89'
          },
          goodsList:[
            {
              sourceUrl:'http://www.mi.com/miwifi3/',
              imgUrl:'http://i3.mifile.cn/a4/376f5f19-d1f5-4f87-8ef9-38e86891bc87',
              title:'小米路由器3',
              intro:'四天线设计，更安全更稳定',
              price:149,
              isSpecial:true,
              specialColor:'#ffac13',
              specialText:'免邮费'
            },
            {
              sourceUrl:'http://www.mi.com/roomrobot/',
              imgUrl:'http://i1.mifile.cn/a1/pms_1472609961.95298675!220x220.jpg',
              title:'米家扫地机器人',
              intro:'扫得干净扫得快，9月27日早10点开售',
              price:1699,
              isSpecial:true,
              specialColor:'#83c44e',
              specialText:'新品'
            },
            {
              sourceUrl:'http://www.mi.com/LocatePhone/',
              imgUrl:'http://i3.mifile.cn/a4/cbabf443-1ff1-4014-a1bf-06c45476f1e6',
              title:'米兔定位电话',
              intro:'时刻定位，守护你所爱',
              price:169,
              isSpecial:true,
              specialColor:'#83c44e',
              specialText:'新品'
            },
            {
              sourceUrl:'http://www.mi.com/scooter/',
              imgUrl:'http://i1.mifile.cn/a1/T1PXhgBbdT1RXrhCrK!220x220.jpg',
              title:'九号平衡车',
              intro:'年轻人的酷玩具，骑行遥控两种玩法',
              price:1999,
              isSpecial:false
            },
            {
              sourceUrl:'http://www.mi.com/mitu/',
              imgUrl:'http://i1.mifile.cn/a1/pms_1464615180.86261317!220x220.jpg',
              title:'米兔智能故事机',
              intro:'宝宝又不好好吃饭，让米兔来哄宝宝吧',
              price:199,
              isSpecial:true,
              specialColor:'#83c44e',
              specialText:'新品'
            },
            {
              sourceUrl:'http://www.mi.com/dianfanbao/',
              imgUrl:'http://i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg',
              title:'米家压力IH电饭煲',
              intro:'智能定时烹饪，花呗6期免息',
              price:999,
              isSpecial:true,
              specialColor:'#ffac13',
              specialText:'免邮费'
            },
            {
              sourceUrl:'http://item.mi.com/buymibook/air',
              imgUrl:'http://i1.mifile.cn/a1/pms_1469583266.7193851!220x220.jpg',
              title:'小米笔记本Air 13.3英寸',
              intro:'9月27日早10点开售',
              price:3499,
              isSpecial:true,
              specialColor:'#ffac13',
              specialText:'免邮费'
            },
            {
              sourceUrl:'http://item.mi.com/1162100021.html',
              imgUrl:'http://i1.mifile.cn/a1/pms_1464071511.37197399!220x220.jpg',
              title:'米家 LED 智能台灯',
              intro:'无可视频闪，亮度色温无级调节',
              price:169,
              isSpecial:false
            }
          ]
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/css/common.scss';
  .hardware-goods{
    width:1226px;
    margin:0 auto;
    .hardware-titles{
      height:58px;
      line-height:58px;
      .get-more{
        float: right;
        font-size:16px;
        color:#424242;
        i{
          display: inline-block;
          width:12px;
          height:12px;
          padding:4px;
          color:#fff;
          background-color:#b0b0b0;
          line-height: 12px;
          text-align: center;
          vertical-align: middle;
          margin-left:4px;
          border-radius: 50%;
        }
        &:hover{
          color:#ff6700;
          i{
            background-color:#ff6700;
          }
        }
      }
    }
    .hardware-content{
      width:1226px;
      height:628px;
      margin:0 auto;
      .content-left{
        width:234px;
        height:614px;
        float: left;
        img{
          width:234px;
          height:614px;
        }
      }
      .content-right{
        float: right;
        width:992px;
        text-align: center;
        li{
          width:234px;
          height:260px;
          float: left;
          margin:0 0 14px 14px;
          padding:20px 0;
          background-color:#fff;
          font-size:12px;
          position: relative;
          a{
            display: block;
            width:100%;
            span{
              display: block;
              color: #333;
            }
            img{
              width:160px;
              height:160px;
            }
          }
          .goods-intro{
            color:#b0b0b0;
            margin:10px 0  20px 0;
          }
          .goods-price{
            color:#ff6700;
            font-size:14px;
          }
        }
      }
    }
  }
</style>
