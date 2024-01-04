<script lang="ts" setup>
import { computed } from 'vue'
import { BrowserWindowApi } from '@widget-js/core'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

function openLink() {
  BrowserWindowApi.openUrl(props.url, { external: true })
}

const colors = ['#ffe082ff', '#c5cae9ff', '#ceb1a1ff', '#d2d2d2ff']
const positionBackgroundColor = computed(() => {
  if (props.position < 4) {
    return colors[props.position - 1]
  }
  return colors[3]
})
</script>

<template>
  <div class="hotspot-item" @click="openLink">
    <div class="position">
      <slot name="position">
        {{ position }}
      </slot>
    </div>
    <div class="title">
      {{ title }}
    </div>
    <slot name="append" />
  </div>
</template>

<style scoped lang="scss">
.hotspot-item {
  cursor: pointer;
  display: flex;
  font-size: 14px;
  width: 100%;
  padding: 6px 8px;

  .position {
    background-color: v-bind(positionBackgroundColor);
    border-radius: 6px;
    width: 18px;
    height: inherit;
    font-size: 14px;
    text-align: center;
    line-height: inherit;
  }

  .title {
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
</style>
