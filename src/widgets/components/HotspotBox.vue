<template>
  <div class="hotspot-box">
    <div class="hotspot-header">
      <slot name="header"></slot>
    </div>
    <el-scrollbar
      :height="height - 64"
      :wrap-style="{ backgroundColor: bodyColor, borderRadius: '12px' }"
    >
      <div class="hotspot-content">
        <slot name="body"></slot>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ElScrollbar } from 'element-plus'

const props = defineProps({
  bodyColor: {
    type: String,
    default: '#fff'
  },
  height: {
    type: Number,
    required: true
  }
})
</script>

<style scoped lang="scss">
.hotspot-box {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, 'Microsoft Yahei', serif;
  border-radius: 22px;
  padding: 16px 16px 16px 16px ;
  .hotspot-header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  .el-scrollbar-wrap .el-scrollbar-wrap--hidden-default {
    background-color: #fff;
    border-radius: 16px;
  }
}
</style>
