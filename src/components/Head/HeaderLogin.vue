<template>
  <div class='headerLogin' id='headerLogin'>
    <div class="content">
      <el-dropdown  class="colorBtn " trigger="click"  @command="changeColor">
        <span class="el-dropdown-link">换肤</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="ffc0cb"  @click="change_type(a)">梦幻粉</el-dropdown-item>
          <el-dropdown-item command="4ab6f0"  @click="change_type(b)">天空蓝</el-dropdown-item>
          <el-dropdown-item command="8b8383"  @click="change_type(c)">雾霾灰</el-dropdown-item>
          <el-dropdown-item command="fa4f52"  @click="change_type(d)">橘子橙</el-dropdown-item>
          <el-dropdown-item command="008000"  @click="change_type(e)">青草绿</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="14"><div class="grid-content">
          <div class="logo"><img src="../../assets/logo.png"/></div>  
           </div>
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { toggleClass } from '../../utils/index.js'
export default {
  name: 'HeaderLogin',
  methods:{
    changeColor(command){
      toggleClass(document.getElementById('headerLogin'), "theme-"+ this.$store.state.themecolor)
      this.$store.commit('setThemeColor',command);
       console.log(command)
    }
  }
}
</script>
<style scoped>
.el-dropdown{
  position: absolute;
  top: 0;
  left: 5px;
  color: #fff
}
</style>
