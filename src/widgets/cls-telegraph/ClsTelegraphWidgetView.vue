<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { useIntervalFn } from '@vueuse/core'
import axios from 'axios'
import { ref } from 'vue'
import HotspotBox from '@/widgets/components/HotspotBox.vue'
import HotspotItem from '@/widgets/components/HotspotItem.vue'

interface TelegraphItem {
  id: number
  title: string
  brief: string
  content: string
  ctime: number
}
interface TelegraphRes {
  errno: number
  data: {
    l: Record<string, TelegraphItem>
    i: number
    a: number
  }
}

function getApiUrl() {
  const lastTime = Math.floor(Date.now() / 1000)
  return `https://www.cls.cn/api/cache?app=CailianpressWeb&lastTime=${lastTime}&name=refreshTenTelegraph&os=web&sv=8.7.9`
}

const viewList = ref<{ title: string, url: string, id: number }[]>([])
useWidget()
useIntervalFn(() => {
  getHotList()
}, 5 * 60 * 1000, { immediate: true, immediateCallback: true })

async function getHotList() {
  const res = await axios.get(getApiUrl())
  const data = res.data as TelegraphRes
  const list = Object.values(data.data?.l ?? {}).sort((a, b) => b.ctime - a.ctime)
  viewList.value = list.map(k => ({
    id: k.id,
    title: k.title || k.brief || k.content,
    url: `https://www.cls.cn/detail/${k.id}`,
  }))
}
</script>

<template>
  <widget-wrapper>
    <div class="content">
      <HotspotBox class="hotspot-box">
        <template #header>
          <div class="header flex items-center gap-1">
            <img src="@/assets/icons/cls.png" style="width: 1rem;height: 1rem">财联社电报
          </div>
        </template>
        <template #body>
          <HotspotItem
            v-for="(item, index) in viewList"
            :key="item.id"
            :url="item.url"
            :title="item.title"
            :position="index + 1"
          />
        </template>
      </HotspotBox>
    </div>
  </widget-wrapper>
</template>

<style scoped>
</style>
