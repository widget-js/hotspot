<script lang="ts" setup>
import axios from 'axios'
import type { Ref } from 'vue'
import { nextTick, onMounted, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import type { WeiBoModel } from './model/WeiBoModel'
import HotspotBox from '@/widgets/components/HotspotBox.vue'
import HotspotItem from '@/widgets/components/HotspotItem.vue'

const viewList: Ref<WeiBoModel[]> = ref([])

onMounted(async () => {
  await nextTick()
  await getHotList()
})

useIntervalFn(() => {
  getHotList()
}, 20 * 60 * 1000)

function getLabel(item: WeiBoModel): string {
  if (item.icon_desc) {
    return item.icon_desc
  }
  else if (item.label_name) {
    return item.label_name
  }
  else {
    return item.small_icon_desc
  }
}

const service = axios.create({
  baseURL: 'https://weibo.com',
  withCredentials: true,
  timeout: 50000,
})

// 知乎热榜
async function getHotList() {
  const res = await service.get('/ajax/side/hotSearch')
  viewList.value = res.data.data.realtime
}
</script>

<template>
  <HotspotBox class="weibo-box">
    <template #header>
      <div class="weibo_header">
        <img src="./images/weibo.svg" style="margin-right: 8px" height="18" alt="">
        <div class="weibo-top-nav">
          微博热搜
        </div>
      </div>
    </template>
    <template #body>
      <HotspotItem
        v-for="(item, index) in viewList"
        :key="index"
        :url="`https://s.weibo.com/weibo?q=${item.word}`"
        :title="item.word"
        :position="index + 1"
      >
        <template #append>
          <span v-if="getLabel(item)" class="weibo-label" :style="{ backgroundColor: item.small_icon_desc_color }">{{
            getLabel(item)
          }}</span>
        </template>
      </HotspotItem>
    </template>
  </HotspotBox>
</template>

<style scoped lang="scss">
.weibo-box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, 'Microsoft Yahei', serif;

  // 顶部
  .weibo_header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: bold;

    .logo {
      position: absolute;
      right: 8px;
    }
  }
  .weibo-label {
    padding: 0 3px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    color: white;
    border-radius: 4px;
  }
}
</style>
