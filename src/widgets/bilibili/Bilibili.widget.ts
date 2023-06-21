import {Widget, WidgetKeyword} from "@widget-js/core";
const name = "cn.widgetjs.widgets.hotspot.bilibili";
//组件标题
const title = {"zh-CN": "bilibili热搜"};
//组件描述
const description = {"zh-CN": "看看年轻人在B站搜什么"};
//组件关键词
const keywords = [WidgetKeyword.RECOMMEND];
//组件路由地址
const url = "/widget/bilibili";
//配置页路由地址
const configUrl = undefined;
//组件关键词
const BilibiliWidgetDefine = new Widget({
    name: name,
    title: title,
    description: description,
    keywords: keywords,
    lang: "zh-CN",
    width: 4,
    height: 3,
    previewImage: '/images/bilibili_hot_search.png',
    minWidth: 4,
    maxWidth: 6,
    minHeight: 3,
    maxHeight: 6,
    routes: [
        {
            url: url,
            name: 'index'
        }
    ]
})

export default BilibiliWidgetDefine;
