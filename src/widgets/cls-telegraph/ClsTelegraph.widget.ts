import { Widget, WidgetKeyword } from '@widget-js/core'

const ClsTelegraphWidget = new Widget({
  name: '.cls_telegraph',
  title: { 'zh-CN': '财联社电报' },
  description: { 'zh-CN': '每5分钟刷新一次' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: ['finance', 'news'],
  lang: 'zh-CN',
  width: 4,
  height: 4,
  minWidth: 4,
  maxWidth: 6,
  minHeight: 4,
  maxHeight: 6,
  previewImage: '/images/preview_cls_telegraph.png',
  path: '/widget/cls_telegraph',
  configPagePath: undefined,
})

export default ClsTelegraphWidget
