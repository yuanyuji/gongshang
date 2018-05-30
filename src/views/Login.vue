<template>
  <div class="login">
    <el-container>
      <el-header>
        <header-login/>
      </el-header>
      <el-main>
        <section-login/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderLogin from '../components/Head/HeaderLogin.vue'
import SectionLogin from '../components/Body/SectionLogin.vue'
export default {
  name: 'Login',
  data(){
    return {
      classH2:'custome-20a0ff'//默认class
    }
  },
  mounted(){
      let curcolor  = this.$store.state.themecolor;
      this.classH2 = 'custome-' + curcolor;
  },
  components: {
    HeaderLogin,
    SectionLogin
  }
}
</script>

