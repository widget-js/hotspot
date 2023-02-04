import ZhihuWidgetRoutes from "@/widgets/zhihu/ZhihuWidgetRoutes";
import BilibiliWidgetRoutes from "./bilibili/BilibiliWidgetRoutes";
import WeiBoWidgetRoutes from "./weibo/WeiBoWidgetRoutes";
//FBI WANING! IMPORT PLACE, DONT DELETE THIS LINE


const WidgetRouter = [
    ...ZhihuWidgetRoutes,
    ...BilibiliWidgetRoutes,
    ...WeiBoWidgetRoutes,
    //FBI WANING! ROUTE PLACE, DONT DELETE THIS LINE
];
export default WidgetRouter
