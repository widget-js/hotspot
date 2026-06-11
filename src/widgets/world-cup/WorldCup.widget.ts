import { Widget, WidgetKeyword } from '@widget-js/core'
// TODO 修改组件信息，标题，描述，关键词
const WorldCupWidget = new Widget({
  name: 'cn.widgetjs.widgets.hotspot.world_cup',
  title: { 'zh-CN': '2026世界杯', 'en-US': 'World Cup' },
  description: { 'zh-CN': '展示世界杯赛程相关的信息', 'en-US': 'Show World Cup related information' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: ['news'],
  lang: 'zh-CN',
  width: 6,
  height: 6,
  minWidth: 4,
  maxWidth: 6,
  minHeight: 4,
  maxHeight: 6,
  previewImage: '/images/preview_world_cup.png',
  path: '/widget/world_cup',
  configPagePath:
    '/widget/config/world_cup?width=600&height=500&frame=true&transparent=false',
})

export default WorldCupWidget
