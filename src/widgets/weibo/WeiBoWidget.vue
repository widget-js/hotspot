<template>
  <div class="weibo-box">
    <div class="weibo_header">
      <img src="./images/weibo.svg" style="margin-right: 8px" height="18" alt="">
      <div class="weibo-top-nav">微博热搜</div>
    </div>
    <el-scrollbar :height="widgetParams.heightPx - 64" :wrap-style="{backgroundColor:'white',borderRadius:'12px'}">
      <div class="weibo-content">
        <div class="weibo-content-item" v-for="(item, index) in viewList" :key="index" @click="openLink(item.word)">
          <div class="weibo-desc">
            <div class="weibo-serial-num" :level="index + 1">{{ index + 1 }}</div>
            <div class="weibo-title">{{ item.word }}</div>
          </div>
          <span class="weibo-label" :style="{backgroundColor:item.small_icon_desc_color}"
                v-if="getLabel(item)">{{ getLabel(item) }}</span>
        </div>
      </div>
    </el-scrollbar>

  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import {useIntervalFn} from "@vueuse/core";
import {nextTick, onMounted, Ref, ref} from "vue";
import {WeiBoModel} from "./model/WeiBoModel";
import {ElScrollbar} from "element-plus";
import {BrowserWindowApi, WidgetParams} from "@widget-js/core";

const widgetParams = WidgetParams.fromCurrentLocation();

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
    padding-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: bold;

    .logo {
      position: absolute;
      right: 8px;
    }

  }

  .el-scrollbar-wrap .el-scrollbar-wrap--hidden-default {
    background-color: #fff;
    border-radius: 16px;
  }

  // 内容
  .weibo-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;

    .weibo-content-item {
      display: flex;
      font-size: 14px;
      height: 18px;
      cursor: pointer;
      line-height: 18px;
      margin-bottom: 16px;
      width: 100%;
      justify-content: space-between;

      .weibo-label {
        width: 18px;
        height: 18px;
        font-size: 12px;
        text-align: center;
        color: white;
        border-radius: 4px;
      }

      .weibo-desc {
        display: flex;
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        .weibo-serial-num {
          background-color: #D2D2D2FF;
          border-radius: 6px;
          width: 18px;
          height: inherit;
          text-align: center;
          line-height: inherit;

          &[level='1'] {
            background-color: #FFE082FF;
          }

          &[level='2'] {
            background-color: #C5CAE9FF;
          }

          &[level='3'] {
            background-color: #CEB1A1FF;
          }
        }

        .weibo-title {
          font-weight: 500;
          margin-left: 8px;
          height: inherit;
          line-height: inherit;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          cursor: pointer;
          text-align: left;
          flex: 1;
        }
      }

      .weibo-hot {
        &-count {
          width: 4em;
          display: inline-block;
        }

        .mgc_fire_fill {
          &::before {
            color: #ff6252;
          }
        }
      }
    }
  }
}
</style>
