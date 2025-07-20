import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  remote: {
    entry: 'https://widgetjs.cn/hotspot',
    hash: true,
    base: '/hotspot',
    hostname: 'widgetjs.cn',
  },
  author: 'Neo Fu',
  description: {
    'zh-CN': '包含知乎、B站、抖音、微博等平台的热搜组件。',
  },
  entry: 'index.html',
  hash: true,
  homepage: 'https://widgetjs.cn',
  name: 'cn.widgetjs.widgets.hotspot',
  remoteEntry: 'https://widgetjs.cn/hotspot',
  remotePackage: 'https://widgetjs.cn/hotspot/widget.json',
  zipUrl: 'https://widgetjs.cn/hotspot/widget.zip',
  title: {
    'zh-CN': '全网热点组件',
  },
  devOptions: {
    folder: './src/widgets/',
    route: true,
    devUrl: 'http://localhost:5173/hotspot',
  },
})
