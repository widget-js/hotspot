import ZhihuWidgetRoutes from '@/widgets/zhihu/ZhihuWidgetRoutes';
import BilibiliWidgetRoutes from './bilibili/BilibiliWidgetRoutes';
import WeiBoWidgetRoutes from './weibo/WeiBoWidgetRoutes';
import DouyinWidgetRoutes from './douyin/DouyinWidgetRoutes';
import BangumiWidgetRoutes from './bangumi/BangumiWidgetRoutes';
//FBI WANING! IMPORT PLACE, DONT DELETE THIS LINE

const WidgetRouter = [
  ...ZhihuWidgetRoutes,
  ...BilibiliWidgetRoutes,
  ...WeiBoWidgetRoutes,
  ...DouyinWidgetRoutes,
  ...BangumiWidgetRoutes,
  //FBI WANING! ROUTE PLACE, DONT DELETE THIS LINE
];
export default WidgetRouter;
