import type { RouteRecordRaw } from 'vue-router'
import TouTiaoWidget from './TouTiao.widget'

const path = TouTiaoWidget.path
const name = TouTiaoWidget.name

const TouTiaoWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () => import('./TouTiaoWidgetView.vue'),
  },
]

export default TouTiaoWidgetRoutes
