import { Widget, WidgetKeyword } from '@widget-js/core'

const name = 'ccn.widgetjs.widgets.hotspot.weibo'
// 组件标题
const title = { 'zh-CN': '微博热搜' }
// 组件描述
const description = { 'zh-CN': '微博热搜' }
// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
// 组件路由地址
const path = '/widget/weibo'
// 组件关键词
const WeiBoWidgetDefine = new Widget({
  name,
  title,
  description,
  keywords,
  lang: 'zh-CN',
  categories: ['news'],
  width: 4,
  height: 3,
  previewImage: '/images/weibo_hot_search.png',
  minWidth: 4,
  maxWidth: 6,
  minHeight: 3,
  maxHeight: 6,
  disabled: true,
  path,
  routes: [
    {
      url: path,
      name: 'index',
    },
  ],
  socialLinks: [
    { name: 'github', link: 'https://github.com/widget-js/hotspot' },
  ],
})

export default WeiBoWidgetDefine
