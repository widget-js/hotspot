import BangumiWidgetDefine from './Bangumi.widget'

const url = BangumiWidgetDefine.path
const name = BangumiWidgetDefine.name

const BangumiWidgetRoutes = [
  {
    path: url,
    name: `${name}`,
    component: () => import(/* webpackChunkName: "cn.widgetjs.widgets.hotspot.bangumi" */ './BangumiWidgetView.vue'),
  },
]

export default BangumiWidgetRoutes
