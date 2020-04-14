<script>
import * as d3 from 'd3'
export default {
  name: 'TheContentChartBar',
  components: {
  },
  data: () => ({
    layout: [
    ],
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
  watch: {
    width: function (value){
      this.renderSvg()
      console.log (`width ${this.width}`)
    
      console.log (`heigth ${this.height}`)
    }
  },
  methods: {
    renderSvg() {
      this.$refs.plot.innerHTML = ''
      console.log (this.width)
      console.log (this.height)
      d3.select(this.$refs.plot)
        .append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
    }
  },
  mounted() {
    this.renderSvg();

  }
}
</script>

<template>
  <div class="content__bar-chart" ref="plot">
    
  </div>
</template>

<style scoped lang="less">
  .content__bar-chart {
    width: 100%;
    height: 100%;
    background-color: #272A38;
  }

</style>