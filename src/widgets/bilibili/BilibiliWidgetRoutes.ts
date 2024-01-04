import BilibiliWidgetDefine from './Bilibili.widget'

const url = BilibiliWidgetDefine.path
const name = BilibiliWidgetDefine.name

const BilibiliWidgetRoutes = [
  {
    path: url,
    name: `${name}`,
    component: () => import(/* webpackChunkName: "com.wisdom.widgets.bilibili" */ './BilibiliWidgetView.vue'),
  },
]

export default BilibiliWidgetRoutes
