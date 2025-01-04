<script lang="ts" setup>
import axios from 'axios'
import { useIntervalFn } from '@vueuse/core'
import type { Ref } from 'vue'
import { nextTick, onMounted, ref } from 'vue'
import type { DouyinModel, Label } from './model/DouyinModel'
import { DouyinLabels } from './model/DouyinModel'
import HotspotBox from '@/widgets/components/HotspotBox.vue'
import HotspotItem from '@/widgets/components/HotspotItem.vue'

const viewList: Ref<DouyinModel[]> = ref([])

onMounted(async () => {
  await nextTick()
  await getHotList()
})

function getLabelTitle(item: DouyinModel): Label | undefined {
  const find = DouyinLabels.find(it => it.label == item.label)
  if (!find) {
    return undefined
  }
  else {
    return find
  }
}

useIntervalFn(() => {
  getHotList()
}, 20 * 60 * 1000)

const service = axios.create({
  baseURL: 'https://aweme.snssdk.com/',
  withCredentials: true,
  timeout: 50000,
})

// 知乎热榜
async function getHotList() {
  const res = await service.get('/aweme/v1/hot/search/list/')
  viewList.value = res.data.data.word_list
}
</script>

<template>
  <HotspotBox class="hotspot-box">
    <template #header>
      <div class="header">
        <svg
          t="1678001437744"
          class="logo"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2103"
          width="200"
          height="200"
        >
          <path
            d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z"
            fill="#111111"
            p-id="2104"
          />
          <path
            d="M204.27776 670.59712a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V134.35904h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z"
            fill="#FF4040"
            p-id="2105"
          />
          <path
            d="M164.92544 631.23456a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V94.99648h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z"
            fill="#00F5FF"
            p-id="2106"
          />
          <path
            d="M410.91072 427.58144c-158.8224 20.15232-284.44672 222.72-154.112 405.00224 120.40192 98.47808 373.68832 41.20576 380.70272-171.85792l-0.17408-324.1472a280.7296 280.7296 0 0 0 142.88896 38.62528V261.2224a144.98816 144.98816 0 0 1-72.8064-54.82496 135.23968 135.23968 0 0 1-54.70208-72.45824h-123.66848l-0.08192 561.41824c-0.11264 78.46912-130.9696 106.41408-164.18816 30.2592-83.18976-39.77216-64.37888-190.9248 46.31552-192.57344z"
            fill="#FFFFFF"
            p-id="2107"
          />
        </svg>
        抖音热榜
      </div>
    </template>
    <template #body>
      <HotspotItem
        v-for="item in viewList"
        :key="item.position"
        :url="`https://www.douyin.com/search/${item.word}`"
        :title="item.word"
        :position="item.position"
      >
        <template #append>
          <div v-if="item.label > 0" class="label" :data="item.label">
            {{ getLabelTitle(item)?.title ?? '' }}
          </div>
        </template>
      </HotspotItem>
    </template>
  </HotspotBox>
</template>

<style scoped lang="scss">
.hotspot-box {
  .header {
    display: flex;
    align-content: center;
    color: var(--widget-color);
    .logo {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      aspect-ratio: 1;
    }
  }
}

.label {
  border-radius: 4px;
  color: white;
  text-align: center;
  padding: 0 2px;
  max-height: 18px;
  font-size: 12px;

  &[data='3'] {
    background-image: linear-gradient(135deg, #ff7395 0%, #ff1f52 100%);
  }

  &[data='5'] {
    background-image: linear-gradient(135deg, #ff78df 0%, #fd39d0 100%);
  }

  &[data='8'] {
    background-image: linear-gradient(135deg, #ff7dd6 0%, #fc2eba 100%);
  }

  &[data='1'] {
    background-image: linear-gradient(135deg, #f19fff 0%, #c757d8 100%);
  }
}
</style>
