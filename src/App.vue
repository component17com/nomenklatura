<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
    .el-scrollbar__wrap{
      overflow: hidden!important;
    }
  .pointer{
    cursor: pointer;
  }
</style>
