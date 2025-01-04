<script lang="ts" setup>
import { ElScrollbar } from 'element-plus'
import { useWindowSize } from '@vueuse/core'

defineProps({
  bodyColor: {
    type: String,
    default: 'rgba(255,255,255,0.7)',
  },
})

const { height } = useWindowSize()
</script>

<template>
  <div class="hotspot-box">
    <div class="hotspot-header">
      <slot name="header" />
    </div>
    <!--  60是标题高度，24是组件上下空白的间距  -->
    <ElScrollbar :height="height - 60 - 24" :wrap-style="{ borderRadius: '12px' }">
      <div class="hotspot-content">
        <slot name="body" />
      </div>
    </ElScrollbar>
  </div>
</template>

<style lang="scss">
.hotspot-box {
  width: var(--widget-inner-width);
  height: var(--widget-inner-height);
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(widget-background-color);
  font-family: OPPOSans-Bold, 'Microsoft Yahei', serif;
  padding: 16px 16px 16px 16px;

  .hotspot-content{
    background: color-mix(in srgb, var(--widget-background-color), var(--widget-color) 10%);
  }
  .hotspot-header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 8px;
    color: var(--widget-color);
    font-size: 14px;
    font-weight: bold;
  }

  .el-scrollbar-wrap .el-scrollbar-wrap--hidden-default {
  }
}
</style>
