<template>
  <div class="hot-container">
    <div class="hot-title clearfix">
        <h2 class="goods-title">热评产品</h2>
    </div>
    <div class="hot-content clearfix">
      <ul class="clearfix">
        <li v-for="information in goodsInformation" class="common-translate">
          <a :href="information.sourceUrl" class="top-link">
            <img :src="information.imgUrl" alt="" />
            <span class="comment">{{information.comment}}</span>
          </a>
          <p class="comment-author">
            来自于 {{information.author}} 的评价
          </p>
          <p class="title-price">
            <a :href="information.sourceUrl" class="title">{{information.title}}</a>
            <span>{{information.price}}元</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        goodsInformation:[
          {
            sourceUrl:'http://item.mi.com/1153700018.html',
            imgUrl:'http://i3.mifile.cn/a4/62d44838-f464-4c11-887c-9168645ae797',
            comment:'真的非常喜欢，从包装到内在都很美，爱不释手',
            author:'jiangnanjiang',
            title:'90分旅行箱 20寸',
            price:299
          },
          {
            sourceUrl:'http://www.mi.com/powerstrip/',
            imgUrl:'http://i3.mifile.cn/a4/aa6b038a-2946-4549-acff-17c58e701556',
            comment:'东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...',
            author:'yinyin19891117',
            title:'90分旅行箱 20寸',
            price:299
          },
          {
            sourceUrl:'http://www.mi.com/miwifi3/',
            imgUrl:'http://i3.mifile.cn/a4/8949026b-fa9a-4370-989b-5d5e2f149106',
            comment:'安装简洁方便，信号不错！！！！！',
            author:'追逆',
            title:'小米路由器3',
            price:149
          },
          {
            sourceUrl:'http://www.mi.com/note3/pro/',
            imgUrl:'http://i3.mifile.cn/a4/a14bd55a-2a7f-4e5f-9d8d-79e3e1bdb467',
            comment:'手机很不错 外观大气金属质感 一直都用的红米手机 很不错 很漂亮也很好用',
            author:'1108656217',
            title:'红米Note 3全网通版',
            price:799
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .hot-container{
    width:1226px;
    margin:10px auto;
    .hot-content{
      height:415px;
      ul{
        width: 100%;
        li{
          float:left;
          width:296px;
          height:415px;
          margin:0 0 14px 14px;
          background-color:#fff;
          font-size:14px;
          .top-link{
            span{
                display: block;
                margin:20px 20px 0 30px;
                height:72px;
                overflow: hidden;
                line-height: 20px;
            }
            img{
              width:100%;
              height:220px;
            }
          }
          .comment-author{
            height:30px;
            line-height: 30px;
            margin-left:30px;
            font-size: 12px;
            color:#b0b0b0;
          }
          .title-price{
            margin-left:30px;
            .title{
              color:#333;
              border-right:solid 1px #ccc;
              display: inline-block;
              max-width:180px;
              display: inline-block;
              padding-right: 10px;
              margin-right: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: middle;
            }
            span{
              color:#ff5700;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              vertical-align: middle;
              display: inline-block;
              max-width:80px;
            }
          }
          &:nth-of-type(1){
            margin-left:0;
          }
        }
      }
    }
  }
</style>
