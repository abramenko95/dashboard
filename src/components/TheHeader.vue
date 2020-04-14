<script>
export default {
  name: 'TheHeader',
  components: {

  },
  props: {
    msg: String
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle');
    }
  }
}
</script>

<template>
  <div class="header">
    <button @click="toggleSidebar">Меню</button>
  </div>
</template>

<style scoped lang="less">
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    // margin-bottom: 10px;
    background: #272A38;
  }

</style>