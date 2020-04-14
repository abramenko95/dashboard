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
      this.chartWidth = this.$refs.content.clientWidth - 20;
      this.chartHeight = this.$refs.content.clientHeight - 20;
    },
    // renderSvg() {
    //   console.log(this.$refs.wrapper)
    // }
  },
  mounted() {
    setTimeout(this.updateChartSize, 1000);
  }
}
</script>

<template>
  <div class="item gpn-block">
    <div class="gpn-block__header"><div class="label"><span class="text">Заголовок</span></div></div>
    <div class="gpn-block__content" ref="content">
      <the-content-chart-bar 
        :width="chartWidth"
        :height="chartHeight"
      />

    </div>
  </div>
</template>

<style scoped lang="less">
  .item {
    width: 100%;
    height: 100%;
    background-color: #1C1F2B;
  }
  .gpn-block__header {
    background-color: #272A38;
    .label .text {
    color: white;

    }
  }
  .gpn-block__content {
    border: none;
    background-color: #1C1F2B;
  }
</style>