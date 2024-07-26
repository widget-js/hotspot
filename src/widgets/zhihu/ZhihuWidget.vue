<script lang="ts" setup>
import axios from 'axios'
import type { Ref } from 'vue'
import { nextTick, onMounted, ref } from 'vue'
import { slice } from 'lodash'
import dayjs from 'dayjs'
import { useIntervalFn } from '@vueuse/core'
import type { ZhihuModel } from './model/ZhihuModel'
import { ZhihuConvert } from './model/ZhihuModel'
import HotspotItem from '@/widgets/components/HotspotItem.vue'
import HotspotBox from '@/widgets/components/HotspotBox.vue'

type NavType = 'hot' | 'news'

const activeNav: Ref<NavType> = ref('hot')

const hotList: Ref<ZhihuModel[]> = ref([])
const newsList: Ref<ZhihuModel[]> = ref([])
const viewList: Ref<ZhihuModel[]> = ref([])

onMounted(async () => {
  await nextTick()
  await getHotList()
  await getNews()
  const yesterday = dayjs().subtract(1, 'day').format('YYYYMMDD')
  getBeforeNews(yesterday)
  handleChangeNav(activeNav.value)
})

function getUrl(url: string) {
  return url.replaceAll('api.', '').replaceAll('questions', 'question')
}

const service = axios.create({
  baseURL: 'https://www.zhihu.com/',
  withCredentials: true,
  timeout: 50000,
})

const newsService = axios.create({
  baseURL: 'https://news-at.zhihu.com/',
  withCredentials: true,
  timeout: 50000,
})

// 知乎热榜
async function getHotList() {
  const res = await service.get('/api/v3/feed/topstory/hot-lists/total?limit=30&desktop=true')
  const result = ZhihuConvert.hot2Model(res.data.data)
  hotList.value = result
}

// 知乎日报
async function getNews() {
  const res = await newsService.get('/api/4/stories/latest')
  const result = ZhihuConvert.news2Model(res.data.top_stories)
  newsList.value = result
}

// 知乎日报-往日
async function getBeforeNews(dateStr: string) {
  const res = await newsService.get(`/api/4/stories/before/${dateStr}`)
  const result = ZhihuConvert.news2Model(res.data.stories)
  newsList.value = newsList.value.concat(result)
}

function handleChangeNav(nav: NavType) {
  activeNav.value = nav
  if (nav == 'hot') {
    viewList.value = slice(Object.assign([], hotList.value), 0, 10)
  }
  if (nav == 'news') {
    viewList.value = slice(Object.assign([], newsList.value), 0, 10)
  }
}

useIntervalFn(() => {
  getHotList()
  getNews()
}, 20 * 60 * 1000)
</script>

<template>
  <HotspotBox class="zhihu-box">
    <template #header>
      <div class="zhihu-header">
        <div class="zhihu-logo" />
        <div class="zhihu-top-nav">
          <span class="hot_text zhihu-nav-item" :class="{ active: activeNav == 'hot' }" @click="handleChangeNav('hot')">热榜</span>
          <span
            class="news_text zhihu-nav-item"
            :class="{ active: activeNav == 'news' }"
            @click="handleChangeNav('news')"
          >日报</span>
        </div>
        <div class="zhihu-liukanshan" />
      </div>
    </template>
    <template #body>
      <HotspotItem
        v-for="(item, index) in viewList"
        :key="index"
        :url="getUrl(item.url)"
        :title="item.title"
        :position="index + 1"
      >
        <template #append>
          <div v-if="item.hot" class="zhihu-hot" @click="getUrl(item.url)">
            <span class="mgc_fire_fill" />
            <span class="zhihu-hot-count">{{ item.hot.replaceAll(' ', '') }}</span>
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
  font-family: OPPOSans-Bold, 'Microsoft Yahei', serif;

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
      background-image: url('@/widgets/zhihu/images/logo.svg');
      background-size: cover;
      position: relative;
      margin-right: 8px;

      &::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 2px;
        background-color: #fff;
        border-radius: 2px;
        overflow: hidden;
        right: -8px;
        bottom: 8px;
      }
    }

    .zhihu-top-nav {
      color: #fff;
      font-size: 14px;

      .zhihu-nav-item {
        margin-left: 12px;
        cursor: pointer;
      }

      .active {
        border-radius: 1px;
        width: 28px;
        height: 2px;
        border-bottom: 2px solid rgba(255, 244, 183, 1);
      }
    }

    .zhihu-liukanshan {
      position: absolute;
      bottom: -10px;
      right: 20px;
      width: 36px;
      height: 36px;
      background-image: url('@/widgets/zhihu/images/liukanshan.png');
      background-size: cover;
    }
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
