<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { toggleClass } from './utils/index.js'
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

