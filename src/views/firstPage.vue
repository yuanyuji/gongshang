<template>
  <div class="firstPage">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Content/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from '../components/Head/Header.vue'
import mainFirst from '../components/mainFirst/mainFirst.vue'
export default {
  components: {
    Header
  }
}
</script>
