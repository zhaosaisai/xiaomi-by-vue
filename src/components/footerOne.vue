<template>
  <div class="footer-one">
    <div class="footer-top-container">
      <div class="footer-top">
        <ul class="clearfix">
          <li v-for="service in services">
            <a :href="service.sourceUrl"><i class="fa" :class="service.className"></i>{{service.text}}</a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom clearfix">
        <div class="footer-bottom-left">
          <dl v-for="help in helps">
            <dt>{{help.title}}</dt>
            <dd v-for="item in help.items">
              <a :href="item.sourceUrl">{{item.text}}</a>
            </dd>
          </dl>
        </div>
        <div class="footer-bottom-right">
          <p class="phone">
            400-100-5678
          </p>
          <p class="other">周一至周日 8:00-18:00</p>
          <p class="other">（仅收市话费）</p>
          <a href="http://www.mi.com/service/contact" class="service-phone">
            <i class="fa fa-headphones"></i>
            24小时在线客服
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        services:[
          {
            sourceUrl:'http://www.mi.com/static/fast/',
            text:'预约维修服务',
            className:'fa-wrench'
          },
          {
            sourceUrl:'http://www.mi.com/service/exchange#back',
            text:'7天无理由退货',
            className:'fa-wrench'
          },
          {
            sourceUrl:'http://www.mi.com/service/exchange#free',
            text:'15天免费换货',
            className:'fa-wrench'
          },
          {
            sourceUrl:'http://www.mi.com/service/exchange#mail',
            text:'满150元包邮',
            className:'fa-wrench'
          },
          {
            sourceUrl:'http://www.mi.com/static/maintainlocation/',
            text:'520余家售后网点',
            className:'fa-wrench'
          }
        ],
        helps:[
          {
            title:'帮助中心',
            items:[
              {text:'账户管理',sourceUrl:'http://www.mi.com/service/account/register/'},
              {text:'购物管理',sourceUrl:'http://www.mi.com/service/buy/buytime/'},
              {text:'订单操作',sourceUrl:'http://www.mi.com/service/order/sendprogress/'},
            ]
          },
          {
            title:'服务支持',
            items:[
              {text:'售后政策',sourceUrl:'http://www.mi.com/service/exchange'},
              {text:'自助服务',sourceUrl:'http://fuwu.mi.com/'},
              {text:'相关下载',sourceUrl:'http://xiazai.mi.com/'},
            ]
          },
          {
            title:'线下门店',
            items:[
              {text:'小米之家',sourceUrl:'http://www.mi.com/c/xiaomizhijia/'},
              {text:'服务网点',sourceUrl:'http://www.mi.com/static/maintainlocation/'},
              {text:'零售网点',sourceUrl:'http://www.mi.com/static/familyLocation/'},
            ]
          },
          {
            title:'关于小米',
            items:[
              {text:'了解小米',sourceUrl:'http://www.mi.com/about'},
              {text:'加入小米',sourceUrl:'http://hr.xiaomi.com/'},
              {text:'联系我们',sourceUrl:'http://www.mi.com/about/contact'},
            ]
          },
          {
            title:'关注我们',
            items:[
              {text:'新浪微博',sourceUrl:'http://e.weibo.com/xiaomishouji'},
              {text:'小米部落',sourceUrl:'http://xiaoqu.qq.com/mobile/share/index.html?url=http%3A%2F%2Fxiaoqu.qq.com%2Fmobile%2Fbarindex.html%3Fwebview%3D1%26type%3D%26source%3Dindex%26_lv%3D25741%26sid%3D%26_wv%3D5123%26_bid%3D128%26%23bid%3D10525%26from%3Dwechat'},
              {text:'官方微信',sourceUrl:'http://www.mi.com/index.html#J_modalWeixin'},
            ]
          },
          {
            title:'特色服务',
            items:[
              {text:'F码通道',sourceUrl:'http://order.mi.com/queue/f2code'},
              {text:'小米移动',sourceUrl:'http://www.mi.com/mimobile/'},
              {text:'防伪查询',sourceUrl:'http://order.mi.com/misc/checkitem'},
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .footer-one{
    $width:1226px;
    .nowrap{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    background-color:#fff;
    .footer-top-container{
      width:$width;
      margin:0 auto;
      .footer-top{
        padding:27px 0;
        border-bottom:1px solid #e0e0e0;
        ul{
          width:$width;
          height:25px;
          line-height:25px;
          li{
            float: left;
            box-sizing: border-box;
            width:$width / 5;
            border-right:1px solid #e0e0e0;
            text-align: center;
            a{
              i{
                margin-right:6px;
              }
              &:hover{
                color:#ff6700;
              }
            }
            &:last-child{
              border:none;
            }
          }
        }
      }
      .footer-bottom{
        width:$width;
        padding:40px 0;
        .footer-bottom-left{
          float: left;
          border-right:solid 1px #e0e0e0;
          dl,dd{
            margin:0;
            padding:0;
          }
          dl{
            float: left;
            width:163px;
            height:112px;
            font-size:14px;
            dt{
              color:#333;
              margin-bottom:26px;
              line-height: 1.25;
            }
            dd{
              line-height: 20px;
              a{
                color:#757575;
                font-size:12px;
                &:hover{
                  color:#ff6700;
                }
              }
            }
          }
        }
        .footer-bottom-right{
          float: right;
          width:240px;
          margin:0 auto;
          height:112px;
          text-align: center;
          p{
            @extend .nowrap;
            margin:0;
            padding:0;
            &.phone{
              color:#ff6700;
              line-height: 1;
              margin: 0 0 8px;
              font-size: 22px;
            }
            &.other{
              font-size: 12px;
              color:#616161;
            }
          }
          .service-phone{
            display: block;
            margin:20px auto;
            width:118px;
            height:28px;
            font-size:12px;
            line-height:28px;
            border:solid 1px #ff6700;
            background-color:#fff;
            color:#ff6700;
            transition: all .5s ease;
            &:hover{
              color:#fff;
              background-color:#ff6700;
            }
          }
        }
      }
    }
  }
</style>
