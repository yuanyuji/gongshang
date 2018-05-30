<template>
  <div class="SectionLogin">
    <div id="bo" style="margin-bottom: 10px; height: 934px;">
      <per-login/>
      <main-login/>
    </div>
  </div>
</template>
<script>
import perLogin from '../../components/Login/perLogin.vue'
import mainLogin from '../../components/Login/mainLogin.vue'
export default {
  name: 'SectionLogin',
  components: {
    perLogin,
    mainLogin
  }
}
</script>
<style scoped>
 @import "../../statics/css/login.css";
</style>
