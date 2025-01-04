<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { onMounted, ref } from 'vue'
import { ElScrollbar } from 'element-plus'
import { useIntervalFn, useWindowSize } from '@vueuse/core'
import { BrowserWindowApi } from '@widget-js/core'
import type { BilibiliVideoItem } from '@/api/BilibiliApi'
import { BilibiliApi } from '@/api/BilibiliApi'

useWidget()

const recommendedVideos = ref<BilibiliVideoItem[]>([])

async function refresh() {
  const latestShowVid = recommendedVideos.value.map(it => `av_${it.id}`)
  recommendedVideos.value = await BilibiliApi.getRecommendedVideos(latestShowVid)
}
const { height } = useWindowSize()

onMounted(async () => {
  refresh()
})

function openLink(url: string) {
  BrowserWindowApi.openUrl(url, { external: true })
}

useIntervalFn(() => {
  refresh()
}, 20 * 60 * 1000)
</script>

<template>
  <widget-wrapper class="bilibili-rcmd">
    <div class="root">
      <div class="header">
        <img src="@/widgets/bilibili/images/bilibili_pink.png" alt="bilibili" class="logo">
        <div class="search-bar">
          <div class="input" @click="openLink('https://search.bilibili.com/all?search_source=1')">
            搜索你感兴趣的视频
          </div>
          <div class="refresh-icon" @click="refresh">
            ⟳
          </div>
        </div>
      </div>
      <ElScrollbar :height="height - 70">
        <div class="video-list">
          <div v-for="video in recommendedVideos" :key="video.bvid" class="video-item" @click="openLink(video.uri)">
            <div class="thumbnail">
              <img :src="video.pic" :alt="video.title">
              <div class="view-count">
                {{ (video.stat.view / 10000).toFixed(1) }}万
              </div>
            </div>
            <div class="video-info">
              <div class="title">
                {{ video.title }}
              </div>
              <div class="uploader">
                <span class="up-icon">UP</span>
                {{ video.owner.name }}
              </div>
            </div>
          </div>
        </div>
      </ElScrollbar>
    </div>
  </widget-wrapper>
</template>

<style lang="scss" scoped>
.root {
  color: var(--widget-color);
}

img {
  -webkit-user-drag: none;
}

.video-list {
  display: grid;
  padding: 12px 12px 0 12px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  gap: 16px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.header {
  padding: 12px 12px 0 12px;
  display: flex;
  align-items: center;

  .logo {
    height: 18px;
    margin-right: 12px;
  }

  .search-bar {
    flex: 1;
    display: flex;
    cursor: pointer;
    align-items: center;
    background: color-mix(in srgb, var(--widget-background-color), var(--widget-color) 20%);
    border-radius: 20px;
    padding: 4px 16px;

    .input {
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      font-size: 12px;
    }

    .refresh-icon {
      cursor: pointer;
      color: #999;
    }
  }
}

.video-item {
  cursor: pointer;

  .thumbnail {
    position: relative;
    aspect-ratio: 16/10;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .view-count {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }
  }

  .video-info {
    padding: 8px 0;

    .title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .uploader {
      font-size: 12px;
      opacity: 0.8;
      display: flex;
      align-items: center;

      .up-icon {
        background: #FF6699;
        color: white;
        padding: 1px 4px;
        border-radius: 2px;
        margin-right: 4px;
        font-size: 10px;
      }
    }
  }
}
</style>
