export interface DouyinModel {
  position: number;
  word: string;
  /**
   * 0-无 1-新 3-热 5-首发 8-独家 爆、挑战、同城、直播热点、
   */
  label: 0;
  hot_value: number;
}

export interface Label {
  label: number;
  title: string;
  backgroundColor?: string;
}

export const DouyinLabels: Label[] = [
  {
    label: 0,
    title: '',
  },
  {
    label: 1,
    title: '新',
    backgroundColor: '#c757d8',
  },
  {
    label: 3,
    title: '热',
    backgroundColor: '#ff1f52',
  },
  {
    label: 5,
    title: '首发',
    backgroundColor: '#fd39d0',
  },
  {
    label: 8,
    title: '独家',
    backgroundColor: '#fc2eba',
  },
  {
    label: 9,
    title: '',
  },
];
