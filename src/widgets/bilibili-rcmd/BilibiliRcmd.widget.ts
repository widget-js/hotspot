import { Widget, WidgetKeyword } from '@widget-js/core'

const BilibiliRcmdWidget = new Widget({
  name: 'cn.widgetjs.widgets.hotspot.bilibili_rcmd',
  previewImage: '/images/preview_bilibili_rcmd.png',
  title: { 'zh-CN': 'B站推荐', 'en-US': 'Bilibili Recommend' },
  description: { 'zh-CN': '实时获取B站推荐视频，发现更多精彩内容', 'en-US': 'Discover more exciting content' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: ['news'],
  lang: 'zh-CN',
  width: 4,
  height: 4,
  minWidth: 4,
  maxWidth: 6,
  minHeight: 4,
  maxHeight: 6,
  path: '/widget/bilibili_rcmd',
  socialLinks: [
    { name: 'github', link: 'https://github.com/widget-js/hotspot' },
  ],
})

export default BilibiliRcmdWidget
