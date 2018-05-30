<template>
  <div class='header' id="header">
    <div class="content">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="7"><div class="grid-content">
          <div class="logo"><img src="../../assets/logo.png"/></div>  
           </div>
        </el-col>
        <el-col :span="15">
          <div class="menu">
            <ul id="Menu">            
              <router-link to="/admin" tag='li'><i class="menu_sy" id="syimg"></i><font id="sy" class="font">首页</font></router-link>
              <li><i class="menu_md" id="mdimg"></i><font id="md" class="font">我的订单</font></li>          
              <li><i class="menu_zh" id="zhimg"></i><font id="zhz" class="font">我的账户</font></li>
              <li><i class="menu_hg" id="hgimg"></i><font id="hg" class="font">开放换购</font></li>
              <li><i class="menu_qb" id="qbimg"></i><font id="qb" class="font">全部产品</font></li>
              <li><i class="menu_xs" id="xsimg"></i><font id="xs" class="font">限时产品</font></li>         
              <li><i class="menu_dl"></i></a></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods:{
    changeColor(command){
      console.log(command);//能获取到当前点击的元素的command
      document.getElementById('aa').className ='theme'+command
    }
  }
}
</script>



