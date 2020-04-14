<script>
export default {
  name: 'TheSidebar',
  components: {

  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="sidebar" :class="{sidebar_hidden : !isVisible}">
    
  </div>
</template>

<style scoped lang="less">
  .sidebar {
    flex: 0 240px; // max 300px
    float: left;
    // width: 240px; // max 300px
    height: calc(100vh - 60px);
    // margin-right: 10px;
    background: #272A38;
    transition: width 0.5s;
  }

  .sidebar_hidden {
    flex: 0 0;
    // width: 0;
  }

</style>