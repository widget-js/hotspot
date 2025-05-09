import type { RouteRecordRaw } from 'vue-router'
import ClsTelegraphWidget from './ClsTelegraph.widget'

const path = ClsTelegraphWidget.path
const name = ClsTelegraphWidget.name

const ClsTelegraphWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () => import('./ClsTelegraphWidgetView.vue'),
  },
]

export default ClsTelegraphWidgetRoutes
