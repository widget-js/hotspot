<template>
  <HotspotBox class="zhihu-box">
    <template #header>
      <div class="zhihu-header">
        <div class="zhihu-logo"/>
        <div class="zhihu-top-nav">
        <span class="hot_text zhihu-nav-item" :class="{active: activeNav == 'hot'}"
              @click="handleChangeNav('hot')">热榜</span>
          <span class="news_text zhihu-nav-item" :class="{active: activeNav == 'news'}"
                @click="handleChangeNav('news')">日报</span>
        </div>
        <div class="zhihu-liukanshan"/>
      </div>
    </template>
    <template #body>
      <HotspotItem
        v-for="(item, index) in viewList"
        :url='getUrl(item.url)'
        :key="index"
        :title="item.title"
        :position="index + 1"
      >
        <template #append>
          <div class="zhihu-hot" v-if="item.hot" @click="getUrl(item.url)">
            <span class="mgc_fire_fill"/>
            <span class="zhihu-hot-count">{{ item.hot.replaceAll(" ", '') }}</span>
          </div>
        </template>
      </HotspotItem>
    </template>
  </HotspotBox>
</template>

<script lang="ts" setup>
import axios from "axios";
import {nextTick, onMounted, Ref, ref} from "vue";
import {ZhihuConvert, ZhihuModel} from "./model/ZhihuModel";
import {slice} from "lodash";
import {BrowserWindowApi, WidgetParams} from "@widget-js/core";
import dayjs from "dayjs";
import HotspotItem from "@/widgets/components/HotspotItem.vue";
import HotspotBox from "@/widgets/components/HotspotBox.vue";
import {useIntervalFn} from "@vueuse/core";

type NavType = 'hot' | 'news';

const props = defineProps({
  backgroundColor: {
    type: String,
  },
});

const activeNav: Ref<NavType> = ref('hot');

const hotList: Ref<ZhihuModel[]> = ref([]);
const newsList: Ref<ZhihuModel[]> = ref([]);
const viewList: Ref<ZhihuModel[]> = ref([]);

onMounted(async () => {
  await nextTick();
  await getHotList();
  await getNews();
  const yesterday = dayjs().subtract(1, 'day').format('YYYYMMDD');
  getBeforeNews(yesterday);
  handleChangeNav(activeNav.value);
});

function getUrl(url: string) {
  return url.replaceAll("api.", "").replaceAll("questions", "question")
}

// 知乎热榜
async function getHotList() {
  const res = await service.get("/api/v3/feed/topstory/hot-lists/total?limit=30&desktop=true");
  const result = ZhihuConvert.hot2Model(res.data.data);
  hotList.value = result;
}

// 知乎日报
async function getNews() {
  const res = await newsService.get("/api/4/stories/latest");
  const result = ZhihuConvert.news2Model(res.data.top_stories);
  console.log(result)
  newsList.value = result;
}

// 知乎日报-往日
async function getBeforeNews(dateStr: string) {
  const res = await newsService.get("/api/4/stories/before/" + dateStr);
  const result = ZhihuConvert.news2Model(res.data.stories)
  newsList.value = newsList.value.concat(result);
}

function handleChangeNav(nav: NavType) {
  activeNav.value = nav;
  if (nav == 'hot') {
    viewList.value = slice(Object.assign([], hotList.value), 0, 10);
  }
  if (nav == 'news') {
    viewList.value = slice(Object.assign([], newsList.value), 0, 10);
  }
}

const service = axios.create({
  baseURL: "https://www.zhihu.com/",
  withCredentials: true,
  timeout: 50000,
});

const newsService = axios.create({
  baseURL: "https://news-at.zhihu.com/",
  withCredentials: true,
  timeout: 50000,
});


useIntervalFn(() => {
  getHotList()
  getNews()
  console.log('refresh')
}, 20 * 60 * 1000)

</script>

<style scoped lang="scss">
.zhihu-box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, "Microsoft Yahei", serif;
  background-image: linear-gradient(46deg, rgba(5, 109, 232, 1) 0, rgba(0, 168, 255, 1) 100%);
  border-radius: 22px;

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
      bottom: -12px;
      right: 20px;
      width: 36px;
      height: 36px;
      background-image: url("@/widgets/zhihu/images/liukanshan.png");
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
