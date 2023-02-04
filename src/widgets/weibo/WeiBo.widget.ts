import {Widget, WidgetKeyword} from "@widget-js/core";
const name = "ccn.widgetjs.widgets.hotspot.weibo";
//组件标题
const title = {"zh": "微博热搜"};
//组件描述
const description = {"zh": "微博热搜"};
//组件关键词
const keywords = [WidgetKeyword.RECOMMEND];
//组件路由地址
const url = "/widget/weibo";
//配置页路由地址
const configUrl = undefined;
//组件关键词
const WeiBoWidgetDefine = new Widget({
    name: name,
    title: title,
    description: description,
    keywords: keywords,
    lang: "zh",
    url: url,
    configUrl: configUrl,
    width: 4,
    height: 3,
    previewImage:'/images/weibo_hot_search.png',
    minWidth: 4,
    maxWidth: 4,
    minHeight: 3,
    maxHeight: 6
})

export default WeiBoWidgetDefine;
