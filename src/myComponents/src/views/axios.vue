<template>
  <div>
    <span>axios</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

const x = 1
console.log(x)

export default defineComponent({
  setup() {
    axios
      .get('/users/xPoet')
      .then((res) => {
        console.log('res:', res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
</script>

<style lang="less" scoped>
div {
  background-color: red;
  span {
    color: white;
  }
}
</style>
