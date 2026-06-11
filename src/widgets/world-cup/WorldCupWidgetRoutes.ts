import type { RouteRecordRaw } from 'vue-router'
import WorldCupWidget from './WorldCup.widget'

const path = WorldCupWidget.path
const name = WorldCupWidget.name

const configPagePath = WorldCupWidget.configPagePath!.split('?')[0]

const WorldCupWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () => import('./WorldCupWidgetView.vue'),
  },
  {
    path: configPagePath,
    name: `${name}.config`,
    component: () => import('./WorldCupConfigView.vue'),
  },
]

export default WorldCupWidgetRoutes
