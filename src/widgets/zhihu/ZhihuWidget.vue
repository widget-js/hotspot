<script lang="ts" setup>
import axios from 'axios'
import type { Ref } from 'vue'
import { nextTick, onMounted, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import type { ZhihuModel } from './model/ZhihuModel'
import { ZhihuConvert } from './model/ZhihuModel'
import HotspotItem from '@/widgets/components/HotspotItem.vue'
import HotspotBox from '@/widgets/components/HotspotBox.vue'

const hotList: Ref<ZhihuModel[]> = ref([])

onMounted(async () => {
  await nextTick()
  await getHotList()
})

function getUrl(url: string) {
  return url.replaceAll('api.', '').replaceAll('questions', 'question')
}

const service = axios.create({
  baseURL: 'https://www.zhihu.com/',
  withCredentials: true,
  timeout: 50000,
})

// 知乎热榜
async function getHotList() {
  const res = await service.get(
    '/api/v3/feed/topstory/hot-lists/total?limit=30&desktop=true',
  )
  const result = ZhihuConvert.hot2Model(res.data.data)
  hotList.value = result
}

useIntervalFn(() => {
  getHotList()
}, 20 * 60 * 1000)
</script>

<template>
  <HotspotBox class="zhihu-box">
    <template #header>
      <div class="zhihu-header">
        知乎热榜
        <div class="zhihu-liukanshan" />
      </div>
    </template>
    <template #body>
      <HotspotItem
        v-for="(item, index) in hotList"
        :key="index"
        :url="getUrl(item.url)"
        :title="item.title"
        :position="index + 1"
      >
        <template #append>
          <div v-if="item.hot" class="zhihu-hot" @click="getUrl(item.url)">
            <span class="mgc_fire_fill" />
            <span class="zhihu-hot-count">{{
              item.hot.replaceAll(" ", "")
            }}</span>
          </div>
        </template>
      </HotspotItem>
    </template>
  </HotspotBox>
</template>

<style scoped lang="scss">
.zhihu-box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, "Microsoft Yahei", serif;

  // 顶部
  .zhihu-header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .zhihu-logo {
      width: 35px;
      height: 16px;
      background-image: url("@/widgets/zhihu/images/logo.svg");
      background-size: cover;
      position: relative;
      margin-right: 8px;

      &::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 2px;
        background-color: var(--widget-color);
        border-radius: 2px;
        overflow: hidden;
        right: -8px;
        bottom: 8px;
      }
    }

    .zhihu-liukanshan {
      position: absolute;
      bottom: -10px;
      right: 20px;
      width: 36px;
      height: 36px;
      background-image: url("@/widgets/zhihu/images/liukanshan.png");
      background-size: cover;
    }
  }

  .zhihu-hot-count{
    color: var(--widget-color);
  }

  .zhihu-hot {
    &-count {
      display: inline-block;
    }

    .mgc_fire_fill {
      &::before {
        color: #ff6252;
      }
    }
  }
}
</style>
