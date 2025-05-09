<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import axios from 'axios'
import HotspotItem from '@/widgets/components/HotspotItem.vue'
import HotspotBox from '@/widgets/components/HotspotBox.vue'

useWidget()
interface Res {
  data: {
    ClusterIdStr: string
    Title: string
    HotValue: string
    Image: {
      url: string
    }
    LabelUri?: {
      url: string
    }
  }[]
}

const viewList = ref<{ title: string, url: string, labelUrl?: string }[]>([])
useWidget()
useIntervalFn(() => {
  getHotList()
}, 5 * 60 * 1000, { immediate: true, immediateCallback: true })

async function getHotList() {
  const res = await axios.get('https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc')
  const data = res.data as Res
  viewList.value = data.data.map((item) => {
    return {
      title: item.Title,
      url: `https://www.toutiao.com/trending/${item.ClusterIdStr}/`,
      labelUrl: item.LabelUri?.url,
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
            <img src="@/assets/icons/toutiao.png" style="width: 1rem;height: 1rem">头条热榜
          </div>
        </template>
        <template #body>
          <HotspotItem
            v-for="(item, index) in viewList"
            :key="item.url"
            :url="item.url"
            :title="item.title"
            :position="index + 1"
          >
            <template #append>
              <img v-if="item.labelUrl" :src="item.labelUrl" style="height: 1.2rem">
            </template>
          </HotspotItem>
        </template>
      </HotspotBox>
    </div>
  </widget-wrapper>
</template>

<style scoped>
</style>
