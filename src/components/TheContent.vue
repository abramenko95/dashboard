<script>
import VueGridLayout from 'vue-grid-layout'
import TheContentItem from './TheContentItem'
export default {
  name: 'TheContent',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    TheContentItem: TheContentItem
  },
  data: () => ({
    gridOptions: {
      colNum: 12,
      rowHeight: 96,
      margin: [10, 10]
    },
    layout: [
      {"x": 0, "y": 0, "w": 3, "h": 3, "i": "0"},
      {"x": 3, "y": 0, "w": 4, "h": 3, "i": "1"},
      {"x": 7, "y": 0, "w": 5, "h": 3, "i": "2"},
      {"x": 0, "y": 3, "w": 3, "h": 6, "i": "3"},
      {"x": 3, "y": 3, "w": 4, "h": 3, "i": "4"},
      {"x": 7, "y": 3, "w": 5, "h": 3, "i": "5"},
      {"x": 3, "y": 6, "w": 4, "h": 3, "i": "6"},
      {"x": 7, "y": 6, "w": 5, "h": 3, "i": "7"},
    ],
    data: {

    }
  }),
  props: {
    msg: String
  },
  methods: {
    updateLayout() {
      console.log(this.$refs.content.clientHeight)
      this.gridOptions.rowHeight = (this.$refs.content.clientHeight) / 9 - 10
      console.log(this.gridOptions.rowHeight)
    }
  },
  mounted() {
    this.updateLayout()
  }
}
</script>

<template>
  <div class="content" ref="content">
    <grid-layout
      :layout.sync="layout"
      :col-num="gridOptions.colNum"
      :row-height="gridOptions.rowHeight"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="gridOptions.margin"
      :use-css-transforms="true"
    >
    
      <grid-item v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
          <!-- {{item.i}} -->
          <the-content-item 
            :width="item.w"
            :height="item.h * gridOptions.rowHeight"
          />
      </grid-item>
    </grid-layout>
  </div>
</template>

<style scoped lang="less">
  .content {
    flex: 1 auto;
    // background: chartreuse;
    float: left;
    // width: calc(100vw - 250px);
    height: calc(100vh - 70px);
    // margin-top: 70px;
  }

</style>