import type { RouteRecordRaw } from 'vue-router'
import BilibiliRcmdWidget from './BilibiliRcmd.widget'

const path = BilibiliRcmdWidget.path
const name = BilibiliRcmdWidget.name

const BilibiliRcmdWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () =>
      import(
        /* webpackChunkName: "cn.widgetjs.widgets.hotspot.bilibili_rcmd" */ './BilibiliRcmdWidgetView.vue'
      ),
  },
]

export default BilibiliRcmdWidgetRoutes
