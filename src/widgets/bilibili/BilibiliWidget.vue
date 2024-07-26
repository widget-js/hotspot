<script lang="ts" setup>
import axios from 'axios'
import { useIntervalFn } from '@vueuse/core'
import type { Ref } from 'vue'
import { nextTick, onMounted, ref } from 'vue'
import { WidgetParams } from '@widget-js/core'
import type { BilibiliModel } from './model/BilibiliModel'
import HotspotBox from '@/widgets/components/HotspotBox.vue'
import HotspotItem from '@/widgets/components/HotspotItem.vue'

const widgetParams = WidgetParams.fromCurrentLocation()

const viewList: Ref<BilibiliModel[]> = ref([])

onMounted(async () => {
  await nextTick()
  await getHotList()
})

useIntervalFn(() => {
  getHotList()
}, 20 * 60 * 1000)

const service = axios.create({
  baseURL: 'https://s.search.bilibili.com/',
  withCredentials: true,
  timeout: 50000,
})

// 知乎热榜
async function getHotList() {
  const res = await service.get('/main/hotword')
  viewList.value = res.data.list
}
</script>

<template>
  <HotspotBox class="bilibili-box" :height="widgetParams.heightPx">
    <template #header>
      <div class="bilibili-header">
        <img src="./images/bilibili_tv.png" style="margin-right: 8px" height="18" alt="">
        <div class="bilibili-title">
          bilibili热搜
        </div>
      </div>
    </template>
    <template #body>
      <HotspotItem
        v-for="(item, index) in viewList"
        :key="index"
        :url="`https://search.bilibili.com/all?keyword=${item.keyword}`"
        :title="item.show_name"
        :position="index + 1"
      >
        <template #append>
          <img v-if="item.icon" :src="item.icon" style="height: 18px" alt="">
        </template>
      </HotspotItem>
    </template>
  </HotspotBox>
</template>

<style scoped lang="scss">
.bilibili-box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, 'Microsoft Yahei', serif;

  // 顶部
  .bilibili-header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;

    .logo {
      position: absolute;
      right: 8px;
    }
  }
}
</style>
