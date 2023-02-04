import WeiBoWidgetDefine from "./WeiBo.widget";

const url = WeiBoWidgetDefine.url;
const name = WeiBoWidgetDefine.name;

const WeiBoWidgetRoutes = [
    {
        path: url,
        name: `${name}`,
        component: () => import(/* webpackChunkName: "com.wisdom.widgets.wei_bo" */ './WeiBoWidgetView.vue')
    }
]

export default WeiBoWidgetRoutes;
