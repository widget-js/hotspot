<template>
  <HotspotBox class="weibo-box">
    <template #header>
      <div class="weibo_header">
        <img src="./images/weibo.svg" style="margin-right: 8px" height="18" alt="">
        <div class="weibo-top-nav">微博热搜</div>
      </div>
    </template>
    <template #body>
      <HotspotItem
          v-for="(item, index) in viewList"
          @click="openLink(item.word)"
          :key="index"
          :title="item.word"
          :position="index + 1"
      >
        <template #append>
           <span class="weibo-label" :style="{backgroundColor:item.small_icon_desc_color}"
                 v-if="getLabel(item)">{{ getLabel(item) }}</span>
        </template>
      </HotspotItem>
    </template>
  </HotspotBox>
</template>

<script lang="ts" setup>
import axios from "axios";
import {useIntervalFn} from "@vueuse/core";
import {nextTick, onMounted, Ref, ref} from "vue";
import {WeiBoModel} from "./model/WeiBoModel";
import {BrowserWindowApi, WidgetParams} from "@widget-js/core";
import HotspotBox from "@/widgets/components/HotspotBox.vue";
import HotspotItem from "@/widgets/components/HotspotItem.vue";

const viewList: Ref<WeiBoModel[]> = ref([]);

onMounted(async () => {
  await nextTick();
  await getHotList();
});

useIntervalFn(() => {
  getHotList();
  console.log("refresh")
}, 20 * 60 * 1000)

function openLink(keyword: string) {
  BrowserWindowApi.openUrl(`https://s.weibo.com/weibo?q=${keyword}`)
}

function getLabel(item: WeiBoModel): string {
  if (item.icon_desc) {
    return item.icon_desc
  } else if (item.label_name) {
    return item.label_name
  } else {
    return item.small_icon_desc
  }
}

// 知乎热榜
async function getHotList() {
  const res = await service.get("/ajax/side/hotSearch");
  viewList.value = res.data.data.realtime;
  console.info("weibo hot list", viewList.value)
}

const service = axios.create({
  baseURL: "https://weibo.com",
  withCredentials: true,
  timeout: 50000,
});
</script>

<style scoped lang="scss">
.weibo-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, "Microsoft Yahei", serif;
  background-color: #f5f5f5;
  border-radius: 22px;
  padding: 16px;

  // 顶部
  .weibo_header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    font-size: 14px;
    font-weight: bold;

    .logo {
      position: absolute;
      right: 8px;
    }

  }
  .weibo-label {
    width: 18px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    color: white;
    border-radius: 4px;
  }

}
</style>
