import axios from 'axios'

// 视频数据接口
interface BilibiliVideoItem {
  id: number
  bvid: string
  cid: number
  goto: string
  uri: string
  pic: string
  title: string
  duration: number
  pubdate: number
  owner: {
    mid: number
    name: string
    face: string
  }
  stat: {
    view: number
    like: number
    danmaku: number
    vt: number
  }
}

// API响应接口
interface BilibiliApiResponse {
  code: number
  message: string
  ttl: number
  data: {
    item: BilibiliVideoItem[]
  }
}

export class BilibiliApi {
  private static readonly BASE_URL = 'https://api.bilibili.com'

  /**
   * 获取推荐视频列表
   * @returns Promise<BilibiliVideoItem[]>
   */
  public static async getRecommendedVideos(lasstShowList: string[] = []): Promise<BilibiliVideoItem[]> {
    try {
      const path = 'brush=4&homepage_ver=1&ps=10&last_y_num=5'
      const response = await axios.get<BilibiliApiResponse>(
        `${this.BASE_URL}/x/web-interface/wbi/index/top/feed/rcmd?${path}`,
        {
          params: {
            last_show_list: lasstShowList.join(','),
            w_ts: Math.floor(Date.now() / 1000),
            fresh_idx: Math.floor(Date.now() / 1000),
          },
        },
      )

      if (response.data.code === 0) {
        return response.data.data.item
      }
      else {
        throw new Error(`Bilibili API Error: ${response.data.message}`)
      }
    }
    catch (error) {
      console.error('Failed to fetch Bilibili recommended videos:', error)
      throw error
    }
  }
}

export type { BilibiliVideoItem }
