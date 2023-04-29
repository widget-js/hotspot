<template>
  <div class="index" v-if="widgetPackage">
    <div class="flex">
      {{ widgetPackage!.author }}
      {{ widgetPackage!.getTitle() }}
      {{ widgetPackage.name }}
    </div>
    <div class="flex-col"></div>
    <img alt="Vue logo" src="/logo.png"/>
    <div class="wrapper">
      <div class="gap-2 marquee">
        <div class="marquee__group">
          <img src="/images/preview_douyin.png"/>
          <img src="/images/preview_zhihu.png"/>
          <img src="/images/weibo_hot_search.png"/>
          <img src="/images/bilibili_hot_search.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import axios from "axios";
import {WidgetPackage} from "@widget-js/core";
import {ref} from "vue";

const widgetPackage = ref<WidgetPackage>()
axios.get('/widget.json').then((result) => {
  if (result.status == 200) {
    widgetPackage.value = WidgetPackage.parseObject(result.data)
    console.log(WidgetPackage.parseObject(result.data))
  }
})
</script>

<style scoped></style>
