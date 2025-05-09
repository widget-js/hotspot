import { Widget, WidgetKeyword } from '@widget-js/core'

const TouTiaoWidget = new Widget({
  name: '.tou_tiao',
  title: { 'zh-CN': '头条热榜' },
  description: { 'zh-CN': '今日头条热度榜单' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: ['news'],
  lang: 'zh-CN',
  width: 4,
  height: 4,
  minWidth: 4,
  maxWidth: 6,
  minHeight: 4,
  maxHeight: 6,
  previewImage: '/images/preview_toutiao.png',
  path: '/widget/tou_tiao',
  configPagePath: undefined,
})

export default TouTiaoWidget
