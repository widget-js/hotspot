<template>
    <bilibili-widget></bilibili-widget>
</template>

<script lang="ts">
import {WidgetData} from "@widget-js/core";
import BilibiliWidget from "./BilibiliWidget.vue"
import {useWidget} from "@widget-js/vue3";

export default {
    name:"BilibiliWidgetView",
    components: {BilibiliWidget},
    setup(){
        const {widgetData, widgetParams} = useWidget(WidgetData);
        return {widgetData, widgetParams};
    }
}
</script>

<style scoped>

</style>
