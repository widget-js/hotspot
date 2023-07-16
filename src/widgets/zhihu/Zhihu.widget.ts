import { LanguageCode, LanguageTextMap, Widget, WidgetKeyword } from '@widget-js/core';

const name = 'cn.widgetjs.widgets.hotspot.zhihu';
const title: LanguageTextMap = { 'zh-CN': '知乎' };
//组件标题
const description: LanguageTextMap = { 'zh-CN': '知乎热榜与日报' };
//组件描述
//组件关键词
const keywords = [WidgetKeyword.RECOMMEND];
const lang: LanguageCode = 'zh-CN';
const url = '/widget/zhihu';
const width = 4;
const height = 3;
const minWidth = 4;
const maxWidth = 4;
const minHeight = 3;
const maxHeight = 4;
const ZhihuWidgetDefine = new Widget({
  previewImage: '/images/preview_zhihu.png',
  name,
  title,
  description,
  keywords,
  lang,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  routes: [
    {
      url: url,
      name: 'index',
    },
  ],
});

export default ZhihuWidgetDefine;
