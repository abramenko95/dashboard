<script>
import { mapGetters, mapActions } from 'vuex'
import TheContent from '../components/TheContent.vue'
import TheHeader from '../components/TheHeader.vue'
import TheSidebar from '../components/TheSidebar.vue'
export default {
  name: 'Home',
  components: {
    'TheContent': TheContent,
    'TheHeader': TheHeader,
    'TheSidebar': TheSidebar,
  },
  props: {
    // msg: String
  },
  computed: {
  ...mapGetters([
    'isVisible',
  ])
  },
  mounted() {
    console.log (this.isVisible);
  },
  watch: {
    isVisible: function (val) {
      console.log (val)
    }
  },
  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    onToggleSidebar() {
      console.log ('on toggle sidebar')
      this.toggleSidebar();
    }
  }
}
</script>

<template>
  <div class="home">
    <TheHeader @toggle="onToggleSidebar"/>
    <div class="home-wrapper">
      <TheSidebar :isVisible="isVisible"/>
      <TheContent/>
    </div>
  </div>
</template>

<style scoped lang="less">
.home {
  width: 100vw;
  height: 100vh;
  background: #000000;
}
.home-wrapper {
  display: flex;
}



</style>
