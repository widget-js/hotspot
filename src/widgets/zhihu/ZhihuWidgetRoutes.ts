import ZhihuWidgetDefine from '@/widgets/zhihu/Zhihu.widget'

const ZhihuWidgetRoutes = [
  {
    path: ZhihuWidgetDefine.path,
    name: `${ZhihuWidgetDefine.name}`,
    component: () => import(/* webpackChunkName: "cn.widgetjs.widgets.zhihu" */ './ZhihuWidgetView.vue'),
  },
]
export default ZhihuWidgetRoutes
