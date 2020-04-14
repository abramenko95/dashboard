<script>
import TheContentChartBar from './TheContentChartBar'
export default {
  name: 'TheContentItem',
  components: {
    TheContentChartBar: TheContentChartBar
  },
  data: () => ({
    chartWidth: 0,
    chartHeight: 0
  }),
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    // chartWidth() {
    //   if (this.$refs.wrapper) {
    //     return this.$refs.wrapper.clientWidth - 20;

    //   } else {
    //     return null
    //   }
    // },
    // chartHeight() {
      
    //   if (this.$refs.wrapper) {
    //     return this.$refs.wrapper.clientHeight - 20;

    //   } else {
    //     return null
    //   }
    // }
  },
  methods: {
    updateChartSize() {
      console.warn (this.$refs.wrapper)
      this.chartWidth = this.$refs.wrapper.clientWidth - 20;
      this.chartHeight = this.$refs.wrapper.clientHeight - 20;
    },
    // renderSvg() {
    //   console.log(this.$refs.wrapper)
    // }
  },
  mounted() {
    this.updateChartSize();
  }
}
</script>

<template>
  <div class="item" ref="wrapper">
    <the-content-chart-bar 
      :width="chartWidth"
      :height="chartHeight"
    />
  </div>
</template>

<style scoped lang="less">
  .item {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #272A38;
  }

</style>