<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { useIntervalFn } from '@vueuse/core'
import axios from 'axios'
import { ref } from 'vue'
import HotspotBox from '@/widgets/components/HotspotBox.vue'
import HotspotItem from '@/widgets/components/HotspotItem.vue'

interface Item {
  id: number
  title?: string
  brief: string
  shareurl: string
  // need *1000
  ctime: number
  // 1
  is_ad: number
}
interface TelegraphRes {
  data: {
    roll_data: Item[]
  }
}
const viewList = ref<{ title: string, url: string, id: number }[]>([])
useWidget()
useIntervalFn(() => {
  getHotList()
}, 5 * 60 * 1000, { immediate: true, immediateCallback: true })

async function getHotList() {
  const res = await axios.get('https://www.cls.cn/nodeapi/updateTelegraphList')
  const data = res.data as TelegraphRes
  viewList.value = data.data.roll_data.filter(k => !k.is_ad).map((k) => {
    return {
      id: k.id,
      title: k.title || k.brief,
      mobileUrl: k.shareurl,
      pubDate: k.ctime * 1000,
      url: `https://www.cls.cn/detail/${k.id}`,
    }
  })
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
