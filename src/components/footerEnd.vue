<template>
  <div class="footer-end">
    <div class="end-container clearfix">
      <img src="../assets/images/logo.png" alt="" class="logo"/>
      <div class="center">
        <ul class="list-item clearfix">
          <li v-for="item in items">
            <a :href="item.sourceUrl">{{item.text}}</a>
          </li>
        </ul>
        <p>
          ©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号
        </p>
        <p>
          违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
      </div>
      <div class="right">
        <img src="../assets/images/ad.png" alt="" />
      </div>
      </div>
      <div class="xiaomi">
        <img src="../assets/images/font.png" alt="" />
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        items:[
          {sourceUrl:'http://www.mi.com/index.html',text:'小米商城'},
          {sourceUrl:'http://www.miui.com/',text:'MIUI'},
          {sourceUrl:'http://www.miliao.com/',text:'米聊'},
          {sourceUrl:'http://www.duokan.com/',text:'多看书城'},
          {sourceUrl:'http://www.miwifi.com/',text:'小米路由器'},
          {sourceUrl:'http://call.mi.com/',text:'视频电话'},
          {sourceUrl:'http://blog.xiaomi.com/',text:'小米后院'},
          {sourceUrl:'http://xiaomi.tmall.com/',text:'小米天猫店'},
          {sourceUrl:'http://shop115048570.taobao.com/',text:'小米淘宝直营店'},
          {sourceUrl:'http://union.mi.com/',text:'小米网盟'},
          {sourceUrl:'http://static.mi.com/feedback/',text:'问题反馈'},
          {sourceUrl:'http://www.mi.com/index.html#J_modal-globalSites',text:'Select Region'}
        ]
      }
    }
  }
</script>
<style lang="scss">
  .footer-end{
    $width:1226px;
    padding-top:40px;
    background-color:#fafafa;
    .end-container{
      width:$width;
      margin:0 auto;
      .logo{
        float: left;
        margin-right:10px;
      }
      .center{
        height:57px;
        float: left;
        font-size:12px;
        vertical-align: top;
        ul,p{
          height:19px;
          line-height:19px;
          margin:0;
          padding:0;
        }
        li{
          float: left;
          a{
            padding:0 5px;
            border-right:solid 1px #b0b0b0;
            &:hover{
              color:#ff6700;
            }
          }
          &:last-child{
            a{
              border:none;
            }
          }
          &:first-child{
            a{
              padding-left:0;
            }
          }
        }
        p{
          color:#b0b0b0;
        }
      }
      .right{
        float: right;
        vertical-align: top;
      }
    }
    .xiaomi{
      width:1226px;
      margin:30px auto 0;
      text-align: center;
      padding-bottom: 30px;
    }
  }
</style>
