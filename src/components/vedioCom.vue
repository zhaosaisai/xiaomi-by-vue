<template>
  <div class="vedio-container clearfix" >
    <div class="vedio-titles clearfix">
      <h2 class="goods-title">视频</h2>
      <a href="http://www.mi.com/video/" class="get-more" target="_blank">
        查看全部
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
    <ul class="vedio-list clearfix">
      <li v-for="item in vedioItems" class="common-translate">
        <a href="javascript:;" class="img-link" @click="playVedio(item.vedioUrl, item.title)">
          <img :src="item.imgUrl" alt="" />
          <span><i class="fa fa-play"></i></span>
        </a>
        <span class="title">
          {{item.title}}
        </span>
        <p class="intro">
          {{item.intro}}
        </p>
      </li>
    </ul>
    <play-vedio :vedio-status.sync="vedioStatus" :vedio-url="vedioUrl" :vedio-title="vedioTitle"></play-vedio>
  </div>
</template>
<script>
  import playVedio from "./common/playVedio";
  export default{
    data(){
      return {
        vedioStatus:false,
        vedioUrl:'',
        vedioTitle:'',
        vedioItems:[
          {
            vedioUrl:'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1ODg5ODA0MA==',
            imgUrl:'http://i3.mifile.cn/a4/73d67577-cbc7-4bd0-8678-4b1e95f4f4dc',
            title:'红米年度品牌视频',
            intro:'一亿人喜爱你，是一种责任。'
          },
          {
            vedioUrl:'//hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg3NjQ4OA==',
            imgUrl:'http://i3.mifile.cn/a4/f7e434fb-8ce4-4442-bf78-0d66e409dfc3',
            title:'小米笔记本Air最全介绍视频',
            intro:'带独立显卡的轻薄笔记本'
          },
          {
            vedioUrl:'//hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg4NjY0OA==',
            imgUrl:'http://i3.mifile.cn/a4/e2df3ad8-4147-44e1-8a54-b6bcafdc6c66',
            title:'小米笔记本Air可靠性测试视频',
            intro:'小米笔记本Air是如何炼成的？'
          },
          {
            vedioUrl:'//hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTU2NDM3NjEzMg==',
            imgUrl:'http://i3.mifile.cn/a4/T1v3LgBTxv1RXrhCrK.jpg',
            title:'小米Max 绝美外观视频',
            intro:'6.44" 大屏黄金尺寸，看什么都震撼'
          }
        ]
      }
    },
    components:{
      'play-vedio':playVedio
    },
    methods:{
      playVedio:function(url, text){
        this.vedioStatus = true;
        this.vedioUrl = url;
        this.vedioTitle = text;
      }
    }
  }
</script>
<style lang="scss">
@import '../assets/css/common.scss';
.vedio-container{
  $width:1226px;
  width:$width;
  margin:0 auto;
  overflow: hidden;
  .vedio-titles{
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
  .vedio-list{
    width:$width;
    height:299px;
    float: left;
    li{
      width:296px;
      height:285px;
      margin:0 0 14px 14px;
      background-color:#fff;
      float: left;
      text-align: center;
      .img-link{
        display: block;
        width: 100%;
        height:180px;
        position: relative;
        text-align: center;
        margin-bottom: 30px;
        span{
          position: absolute;
          bottom: 10px;
          left:20px;
          border:solid 2px #fff;
          color: #fff;
          width: 30px;
          height:20px;
          border-radius: 10px;
          text-align:center;
          line-height:20px;
          padding-left:3px;
          font-size:12px;
          transition: all .5s ease;
          background-color:rgba(0,0,0,0.6);
        }
        &:hover{
          span{
            background-color:#ff6700;
            border-color:#ff6700;
          }
        }
        img{
          width:296px;
          height:180px;
        }
      }
      .title{
        font-size:14px;
        cursor: pointer;
        &:hover{
          color:#ff6700;
        }
      }
      .intro{
        font-size:12px;
        width:90%;
        margin:10px auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color:#b0b0b0;
      }
      &:nth-of-type(1){
        margin-left:0;
      }
    }
  }
}
</style>
