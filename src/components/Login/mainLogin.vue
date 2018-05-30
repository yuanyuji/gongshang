<template>
  <div class="content">
    <div style='clear: both'></div>
    <el-row type="flex" class="row-bg main1" justify="center">
      <el-col :span="4" v-for="site in sites" class="main_top">
        <div class="grid-content">
          <p><img :src="site.imgsrc" width="140" height="140"></p>
          <p class="font_b14">{{site.font_b14}}</p>
        </div>
      </el-col>
    </el-row>
    <h1 class="h1"><span></span></h1>
    <div style='clear: both'></div>
    <div class="about">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="9">
          <div class="grid-content">
            <div class="grid-content about01">
              <span class="font_b14">关于中智外企服务分公司</span><br>
              <img src="../../assets/icon_login07.gif" width="22" height="22">
              <a href="http://weibo.com/bjciic">官方微博</a>
              <img src="../../assets/icon_login08.gif" width="22" height="22">微信公众号：<span class="figure">ciicbj</span>
            </div>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content">
            <div class="grid-content about02">
              <span class="font_b14">功能亮点，欢迎观看</span>
              <br>
              <a href="">
                <img src="../../assets/icon_login09.gif" width="48" height="17">
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: "mainLogin",
  data () {
    return {
      sites: [
      { 
        font_b14: '出行无忧' ,
        imgsrc: require('../../assets/car.gif')
      },
      { 
        font_b14: '多彩生活' ,
        imgsrc: require('../../assets/life.gif')
      },
      { 
        font_b14: '健康关怀' ,
        imgsrc: require('../../assets/health.gif')
      },
      { 
        font_b14: '亲子教育' ,
        imgsrc: require('../../assets/education.gif')
      }
    ]
    }
  }
}
</script>

<style scoped>
.h1{
  text-align: center
}
.h1 span{
  display: inline-block;
  width: 80%;
  height: 1px;
  background: #ccc
}
.main1{width:100%; padding:15px 0}
.main_top{text-align:center;font-size:14px;color:#3F3F3F;width:250px;}
.main_top p{ margin-bottom:20px;}
.about{margin:28px 0;width:100%;}
.about img{vertical-align:middle;margin:0 6px 0 0;}
.about a{color:#333;}
.about01,.about02{padding-left:60px;line-height:26px;color:#333;float:left;height:50px;margin-left: 30%}
.about01{background:url(../../assets/icon_login05.gif) center left no-repeat;}
.about02{background:url(../../assets/icon_login06.gif) center left no-repeat;}
.font_b14{font-size:14px;}
</style>
