<template>
  <div class="widget-landing-page">
    <div class="widget-package-box">
      <template v-if="widgetPackage">
        <div class="flex desc">
          <img alt="logo" class="logo" src="/logo.png"/>
          <div class="package-info flex-col">
            <div class="title"> {{ widgetPackage!.getTitle() }}</div>
            <div> {{ widgetPackage!.getDescription() }}</div>
            <div></div>
            <div class="widget-tag-group">
              <div class="widget-tag" v-for="widget in widgetPackage!.widgets">{{ widget.getTitle() }}</div>
            </div>
          </div>

          <bubbly-button style="margin-left: auto" label="在客户端打开" @click="openInApp" class="bubbly-button">
          </bubbly-button>
          <bubbly-button @click="downloadApp" class="bubbly-button" label="下载客户端">
          </bubbly-button>
        </div>
        <div class="marquee">
          <div class="marquee__group">
            <img v-for="item in widgetPackage.widgets" :src="getImageUrl(item.previewImage!)"/>
          </div>
          <div class="marquee__group">
            <img v-for="item in widgetPackage.widgets" :src="getImageUrl(item.previewImage!)"/>
          </div>
        </div>
      </template>
      <template v-else-if="error">
        <div class="error">
          <p>加载失败</p>
          <p>{{ error.message }}</p>
          <p>{{ error.request.responseURL }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>

import axios, {AxiosError} from "axios";
import {WidgetPackage} from "@widget-js/core";
import {computed, onMounted, ref} from "vue";
import BubblyButton from "@/BubblyButton.vue";

const widgetPackage = ref<WidgetPackage>()
const error = ref<AxiosError>()

axios.get(`${import.meta.env.BASE_URL}/widget.json`).then((result) => {
  widgetPackage.value = WidgetPackage.parseObject(result.data)
}).catch((reason) => {
  error.value = reason
})

const openInAppUrl = computed(() => {
  const remotePackageURL = encodeURIComponent(widgetPackage.value!.remotePackage!)
  return `widget://widgetjs.cn/package?url=${remotePackageURL}`;
})

const downloadApp = () => {
  window.open('https://widgetjs.cn/')
}

const openInApp = () => {
  window.location.href = openInAppUrl.value;
}

const getImageUrl = (url: string) => {
  return `${import.meta.env.BASE_URL}${url}`.replaceAll('//', '/')
}
</script>

<style scoped lang="scss">

.widget-landing-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .background {
    position: absolute;
    display: flex;
    z-index: -2;
  }

  .blur {
    position: absolute;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(50px);
    z-index: -1;
  }
}

* {
  user-select: auto;
}

.widget-package-box {
  $primary-color: #4d89ea;
  $secondary-color: #f3c12e;
  $border-color: rgb(218, 220, 224);

  .error {
    color: red;
    margin: 0 32px;
  }

  box-shadow: 0 3px 24px rgba(0, 0, 0, 0.08);
  max-width: 900px;
  border: solid 1px $border-color;
  border-radius: 1rem;
  overflow: hidden;
  background-color: lighten($primary-color, 36%);
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .desc {
    align-items: center;
    gap: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .package-info {
      gap: 4px;

      .title {
        font-size: 1.2rem;
        font-weight: bold;
        color: darken($primary-color, 50%);
      }
    }

    .widget-tag-group {
      display: flex;
      gap: 0.5rem;

      .widget-tag {
        font-size: 0.8rem;
        padding: 4px 8px;
        color: darken($secondary-color, 60%);
        border-radius: 0.5rem;
        background-color: lighten($secondary-color, 30%);
        border: 1px solid $border-color;
      }
    }

  }

  .logo {
    width: 6rem;
    height: 6rem;
  }


}

.marquee {
  --gap: 2rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);

  .marquee__group {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: var(--gap);
    animation: scroll 30s linear infinite;

    img {
      margin-top: 16px;
      margin-bottom: 16px;
      height: 200px;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    }

    &.slow {
      animation: scroll 120s linear infinite;
    }

    img.large {
      margin-left: -20vw;
      width: auto;
      height: 70vh;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    }
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

</style>
