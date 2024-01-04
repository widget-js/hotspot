/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module '*.png' {
  const value: string;
  export default value;
}
declare module 'colorthief' {
  type Color = [number, number, number];
  export default class ColorThief {
    getColor: (img: HTMLImageElement | null) => Color;
    getPalette: (img: HTMLImageElement | null) => Color[];
  }
}
