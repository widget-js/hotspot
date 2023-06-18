import {WidgetPackage} from "@widget-js/core";

export default new WidgetPackage({
    author: "Neo Fu",
    description: {
        "zh-CN": "包含知乎、B站、抖音、微博等平台的热搜组件。",
    },
    entry: "index.html",
    hash: true,
    homepage: "https://widgetjs.cn",
    name: "cn.widgetjs.widgets.hotspot",
    remoteEntry: "http://127.0.0.1:8080/hotspot",
    remotePackage: "http://localhost:5173/hotspot/widget.json",
    title: {
        "zh-CN": "全网热点组件",
    },
    url: "",
    version: "1.0.0",
    devOptions: {
        folder: "./src/widgets/",
        route: true,
        devUrl: "http://localhost:5173/hotspot"
    }
});
