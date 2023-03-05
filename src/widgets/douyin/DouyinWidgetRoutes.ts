import DouyinWidgetDefine from "./Douyin.widget";

const url = DouyinWidgetDefine.getIndexRoute().url;
const name = DouyinWidgetDefine.name;

const DouyinWidgetRoutes = [
    {
        path: url,
        name: `${name}`,
        component: () => import(/* webpackChunkName: "com.wisdom.widgets.douyin" */ './DouyinWidgetView.vue')
    }
]

export default DouyinWidgetRoutes;
