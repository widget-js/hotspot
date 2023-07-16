<template>
  <div class="bangumi-widget">
    <div class="weekdays">
      <div
        class="weekday"
        v-for="item in items"
        @click="weekdayClick(item)"
        :class="{ 'is-today': item.is_today, active: item == activeItem }"
        :key="item.date_ts">
        <div class="day-of-month">{{ item.dayOfMonth }}</div>
        <div class="weekday-name">{{ item.weekday }}</div>
      </div>
    </div>
    <el-scrollbar :height="height - 78" wrap-style="padding:12px 0;">
      <div class="bangumis" :style="{ width: `${width}px` }">
        <bangumi-item v-for="item in activeItem?.seasons" :key="item.ep_id" :item="item" />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { BangumiResult, BangumiResultItem } from '@/widgets/bangumi/model/BangumiResult';
import { ref } from 'vue';
import dayjs from 'dayjs';
import { useWidgetSize } from '@widget-js/vue3';
import BangumiItem from '@/widgets/bangumi/BangumiItem.vue';
import { useIntervalFn } from '@vueuse/core';

const items = ref<BangumiResultItem[]>([]);
const activeItem = ref<BangumiResultItem>();

const refresh = () => {
  axios.get('https://bangumi.bilibili.com/web_api/timeline_global').then((result) => {
    const data = result.data as BangumiResult;
    items.value = data.result.splice(data.result.length - 9, 7);
    console.log(items.value);
    for (let valueElement of items.value) {
      const date = dayjs(valueElement.date_ts * 1000);
      valueElement.weekday = date.format('ddd');
      valueElement.dayOfMonth = date.date();
      if (valueElement.is_today) {
        activeItem.value = valueElement;
      }
    }
  });
};

refresh();

const { width, height } = useWidgetSize();

const weekdayClick = (item: BangumiResultItem) => {
  activeItem.value = item;
};

useIntervalFn(() => {
  refresh();
}, 1000 * 60 * 60);
</script>

<style scoped lang="scss">
$bilibili-color: #00aeec;
$bilibili-red: #fb7299;
$text-color: darken($bilibili-color, 35%);
$card-bg: lighten($bilibili-color, 50%);
.bangumi-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background: white;
  overflow: hidden;

  .weekdays {
    display: flex;
    gap: 8px;
    width: 100%;
    place-items: center;
    place-content: center;
    background: #2cbae5;
    padding: 8px;

    .weekday {
      padding: 8px 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      place-items: center;
      border-radius: 0.2rem;
      background-color: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      gap: 4px;
      transition: all 0.2s ease-in-out;

      &:hover,
      &.active {
        background-color: #fb7299;
        color: white;

        .weekday-name {
          color: white;
        }
      }

      .day-of-month {
        font-weight: bold;
      }

      .weekday-name {
        font-size: 12px;
        color: #636262;
      }

      &.is-today {
        border-top: 4px solid #eebe01;
      }
    }
  }

  .bangumis {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 1rem;
  }
}
</style>
