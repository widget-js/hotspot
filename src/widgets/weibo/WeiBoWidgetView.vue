<template>
  <wei-bo-widget></wei-bo-widget>
</template>

<script lang="ts">
import {WidgetData} from "@widget-js/core";
import WeiBoWidget from "./WeiBoWidget.vue"
import {useWidget} from "@widget-js/vue3";

export default {
  name: "WeiBoWidgetView",
  components: {WeiBoWidget},
  setup() {
    const {widgetData, widgetParams} = useWidget(WidgetData);
    return {widgetData, widgetParams};
  }
}
</script>

<style scoped>

</style>
