import BilibiliWidgetRoutes from './bilibili/BilibiliWidgetRoutes'
import WeiBoWidgetRoutes from './weibo/WeiBoWidgetRoutes'
import DouyinWidgetRoutes from './douyin/DouyinWidgetRoutes'
import BangumiWidgetRoutes from './bangumi/BangumiWidgetRoutes'
import BilibiliRcmdWidgetRoutes from './bilibili-rcmd/BilibiliRcmdWidgetRoutes'
import ZhihuWidgetRoutes from '@/widgets/zhihu/ZhihuWidgetRoutes'

// FBI WANING! IMPORT PLACE, DONT DELETE THIS LINE

const WidgetRouter = [
  ...ZhihuWidgetRoutes,
  ...BilibiliWidgetRoutes,
  ...WeiBoWidgetRoutes,
  ...DouyinWidgetRoutes,
  ...BangumiWidgetRoutes,
  ...BilibiliRcmdWidgetRoutes,
  // FBI WANING! ROUTE PLACE, DONT DELETE THIS LINE
]
export default WidgetRouter
