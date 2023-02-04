<template>
  <div class="bilibili-box">
    <div class="bilibili-header">
      <img src="./images/bilibili.png" style="margin-right: 8px" height="18" alt="">
      <img class="logo" src="./images/bilibili_tv.png" width="24" alt="">
      <div class="bilibili-title">热搜</div>
    </div>
    <el-scrollbar :height="widgetParams.heightPx - 64" :wrap-style="{backgroundColor:'white',borderRadius:'12px'}">
      <div class="bilibili-content">
        <div class="bilibili-content-item" v-for="(item, index) in viewList" :key="index">
          <div class="bilibili-desc" @click="openLink(item.keyword)">
            <div class="bilibili-serial-num" :level="index + 1">{{ index + 1 }}</div>
            <div class="bilibili-title">{{ item.show_name }}</div>
          </div>
          <img v-if="item.icon" :src="item.icon" style="height: 18px" alt="">
        </div>
      </div>
    </el-scrollbar>

  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import {useIntervalFn} from "@vueuse/core";
import {nextTick, onMounted, Ref, ref} from "vue";
import {BilibiliModel} from "./model/BilibiliModel";
import {ElScrollbar} from "element-plus";
import {BrowserWindowApi, WidgetParams} from "@widget-js/core";

const widgetParams = WidgetParams.fromCurrentLocation();

const viewList: Ref<BilibiliModel[]> = ref([]);

onMounted(async () => {
  await nextTick();
  await getHotList();
});

useIntervalFn(() => {
  getHotList();
  console.log("refresh")
}, 20 * 60 * 1000)

function openLink(keyword: string) {
  BrowserWindowApi.openUrl(`https://search.bilibili.com/all?keyword=${keyword}`)
}

// 知乎热榜
async function getHotList() {
  const res = await service.get("/main/hotword");
  viewList.value = res.data.list;
  console.info("bilibili hot list", res.data.list)
}

const service = axios.create({
  baseURL: "https://s.search.bilibili.com/",
  withCredentials: true,
  timeout: 50000,
});
</script>

<style scoped lang="scss">
.bilibili-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: OPPOSans-Bold, "Microsoft Yahei", serif;
  background: linear-gradient(#27b8f1, #00aeec);
  border-radius: 22px;
  padding: 16px;

  // 顶部
  .bilibili-header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 14px;
    color: #fff;
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
  .bilibili-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;

    .bilibili-content-item {
      display: flex;
      font-size: 14px;
      height: 18px;
      line-height: 18px;
      margin-bottom: 16px;
      width: 100%;
      justify-content: space-between;

      .bilibili-desc {
        display: flex;
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        .bilibili-serial-num {
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

        .bilibili-title {
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

      .bilibili-hot {
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
