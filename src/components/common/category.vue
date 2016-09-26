<template>
  <div class="category-container clearfix">
    <div class="category-title clearfix">
      <h2 class="goods-title">{{categories.title}}</h2>
      <ul class="category-index">
        <li v-for="category in categories.category" :class="{active: active === category['type']}" @mouseover="cateOver(category.title,category.type)">
          {{category.title}}
        </li>
      </ul>
    </div>
    <div class="category-content clearfix">
      <ul class="category-left">
        <li v-for="item in categories.left" class="common-translate">
          <a :href="item.sourceUrl">
            <img :src="item.imgUrl" alt="" />
          </a>
        </li>
      </ul>
      <ul class="category-right">
        <template v-for="item in categories[active]">
          <li  v-if="$index < (categories[active].length - 1)" class="common-li common-translate">
            <h5 class="special-title" v-show="item.isSpecial" :style="{'backgroundColor':item.specialColor}">{{item.specialText}}</h5>
            <a :href="item.sourceUrl">
              <img :src="item.imgUrl" alt="" />
              <span class="title">{{item.title}}</span>
            </a>
            <p class="price">
              {{item.price}}元
            </p>
            <p class="comment">
              {{item.commentNum}}人评价
            </p>
            <div class="newestComment">
              <p>
                {{item.newestComment}}
              </p>
              <p class="newestFrom">
                来自于 {{item.newestFrom}} 的评价
              </p>
            </div>
          </li>
          <li v-else class="last-li">
            <div class="last-top common-translate">
              <a :href="item.sourceUrl1" class="last-title">{{item.title}}</a>
              <span>{{item.price}}元</span>
              <a :href="item.sourceUrl1" class="last-img">
                <img :src="item.imgUrl" alt="" />
              </a>
            </div>
            <div class="last-bottom common-translate">
              <a href="item.sourceUrl2">
                <span class="look-more">浏览更多</span>
                <span class="look-category">
                  {{hoverText}}
                </span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        active:'hot',
        hoverText:'热门'
      };
    },
    props:{
      categories:{
        type:Object,
        required:true
      }
    },
    methods:{
      cateOver:function(text,type){
        this.hoverText = text;
        this.active = type;
      }
    }
  }
</script>
<style lang="scss">
  .category-container{
    width:1226px;
    margin:10px auto;
    .category-title{
      height:58px;
      line-height: 58px;
      .category-index{
        float: right;
        li{
          float: left;
          margin-left:30px;
          border-bottom:solid 3px transparent;
          height:30px;
          line-height:30px;
          margin-top:14px;
          cursor: pointer;
          transition:all .3s ease;
          &.active{
            color:#ff6700;
            border-bottom-color:#ff6700;
          }
        }
      }
    }
    .category-content{
      width:1226px;
      height:628px;
      margin: 0 auto;
      .category-left{
        width:234px;
        height:614px;
        float: left;
        overflow: hidden;
        img{
          width:234px;
          height:300px;
          margin-bottom:14px;
        }
      }
      .category-right{
        float: right;
        width:992px;
        li{
          float: left;
          width:234px;
          height:300px;
          margin:0 0 14px 14px;
          overflow: hidden;
          box-sizing: border-box;
          text-align: center;
          font-size:14px;
          position: relative;
          &.common-li{
            background-color:#fff;
            padding:34px 0 20px 0;
            a{
              display: block;
              img{
                width:150px;
                height:150px;
              }
              .title{
                display: block;
                color:#333;
              }
            }
            .price{
              color:#ff5700;
              margin-top:6px;
            }
            .comment{
              font-size: 12px;
              color:#b0b0b0;
            }
            .newestComment{
              width:100%;
              background-color:#ff5700;
              position: absolute;
              bottom: 0;
              left:0;
              font-size: 12px;
              color:#fff;
              box-sizing: border-box;
              transition: all .5s ease;
              padding-top:10px;
              height:0;
              opacity: 0;
              p{
                margin:0 auto;
                padding:0;
                width:70%;
                text-align: left;
                line-height: 20px;
                overflow: hidden;
                max-height: 40px;
                &.newestFrom{
                  color:rgba(255,255,255,0.6);
                }
              }
            }
            &:hover{
              .newestComment{
                opacity: 1;
                height: 76px;
              }
            }
          }
          &.last-li{
            .title-position{
              display: block;
              top:40px;
              position: absolute;
              left: 30px;
              font-size:18px;
              width:130px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: left;
            }
            .price{
              position: absolute;
              top:65px;
              left:30px;
              color: #ff5700;
            }
            .img{
              position: absolute;
              top:42px;
              right: 30px;
              font-size:26px;
              border:solid 2px #ff5700;
              width:40px;
              height:40px;
              border-radius: 50%;
              line-height: 40px;
              text-align: center;
              color: #ff5700;
              font-style: normal;
              padding: 0;
              margin: 0;
            }
            div{
              width:100%;
              height:143px;
              margin-bottom: 14px;
              background-color:#fff;
              position: relative;
              &.last-top{
                span{
                  @extend .price;
                }
                .last-title{
                  @extend .title-position;
                  font-size:12px;
                }
                .last-img{
                  position: absolute;
                  right: 20px;
                  top:32px;
                  width:80px;
                  height:80px;
                  img{
                    width:80px;
                    height:80px;
                  }
                }
              }
              &.last-bottom{
                .look-more{
                  @extend .title-position;
                }
                .look-category{
                  @extend .price;
                  color: #b0b0b0;
                }
                i{
                  @extend .img;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
