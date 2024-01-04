export interface BangumiSeason {
  cover: string
  delay: number
  ep_id: number
  favorites: number
  follow: number
  is_published: number
  pub_index: string
  pub_time: string
  pub_ts: number
  season_id: number
  season_status: number
  square_cover: string
  title: string
  url: string
}

export interface BangumiResultItem {
  date: string
  date_ts: number
  day_of_week: number
  is_today: number
  seasons: BangumiSeason[]
  /**
   * 这个不是B站返回的字段
   */
  weekday?: string
  /**
   * 这个不是B站返回的字段
   */
  dayOfMonth?: number
}

export interface BangumiResult {
  code: number
  message: string
  result: BangumiResultItem[]
}
