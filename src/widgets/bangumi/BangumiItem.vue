<script setup lang="ts">
import { BangumiSeason } from '@/widgets/bangumi/model/BangumiResult';
import { BrowserWindowApi } from '@widget-js/core';
import { nextTick, onMounted, PropType, ref } from 'vue';
// @ts-ignore
import ColorThief from 'colorthief';
import Color from 'color';

const props = defineProps({
  item: {
    type: Object as PropType<BangumiSeason>,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
const onBangumiClick = (season: BangumiSeason) => {
  BrowserWindowApi.openUrl(season.url, { external: true });
};
const bgStartColor = ref<string>('#f0fbff');
const bgEndColor = ref<string>('#f0fbff');
const bgBorderColor = ref<string>('#f0fbff');
const textColor = ref<string>('#001b24');
const rgbToHex = (r, g, b) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');

const getImgColor = (img) => {
  const colorThief = new ColorThief();
  const palette = colorThief.getPalette(img, 5);
  const palette1 = palette[1];
  const color1 = Color.rgb(palette1[0], palette1[1], palette1[2]);
  bgStartColor.value = color1.string();
  const color2 = palette[2];
  bgEndColor.value = rgbToHex(color2[0], color2[1], color2[2]);
  const text = palette[0];
  if (color1.isLight()) {
    textColor.value = Color.rgb(text[0], text[1], text[2]).darken(0.5).string();
  } else {
    textColor.value = Color.rgb(text[0], text[1], text[2]).lighten(0.5).string();
  }

  bgBorderColor.value = bgStartColor.value + '66';
};
onMounted(async () => {
  await nextTick();
  const img = document.querySelector(`#cover-${props.item.ep_id}>img`);
  // Make sure image is finished loading
  if (img?.complete) {
    getImgColor(img);
  } else {
    img?.addEventListener('load', function () {
      getImgColor(img);
    });
  }
});
</script>

<template>
  <div class="bangumi">
    <div class="pub-time">{{ item.pub_time }} <span></span><span></span><span></span><span></span><span></span></div>
    <div class="card" @click="onBangumiClick(item)">
      <el-avatar
        :id="`cover-${item.ep_id}`"
        shape="square"
        size="large"
        :src="item.square_cover == '' ? item.cover : item.square_cover" />
      <div class="info">
        <div class="title">{{ item.title }}</div>
        <div class="pub-index">{{ item.pub_index }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$bilibili-color: #00a1d6;
$bilibili-red: #fb7299;
$text-color: darken($bilibili-color, 25%);
$card-bg: lighten($bilibili-color, 55%);
.bangumi {
  display: flex;
  width: 100%;
  position: relative;
  gap: 0.5rem;

  .pub-time {
    font-size: 12px;
    color: $text-color;
    display: flex;
    font-weight: bold;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
    opacity: 0.7;

    span {
      width: 4px;
      height: 1px;
      border-top: 1px solid #898888;
    }
  }

  .card {
    display: flex;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    gap: 8px;
    width: 90%;
    background: linear-gradient(-45deg, v-bind(bgStartColor), v-bind(bgEndColor));
    color: v-bind(textColor);

    img {
      height: 4rem;
      border-radius: 0.5rem;
    }

    .info {
      gap: 0.5rem;
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 1rem;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        opacity: 0.8;
        text-overflow: ellipsis;
      }

      .pub-index {
        opacity: 0.6;
      }
    }
  }
}
</style>
