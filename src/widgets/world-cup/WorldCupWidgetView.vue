<script lang="ts" setup>
import { WidgetWrapper, useWidget } from '@widget-js/vue3'
import { useIntervalFn } from '@vueuse/core'
import axios from 'axios'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface ScheduleRow {
  stage: string
  date: string
  note: string
}

interface MatchItem {
  round: string
  num?: number
  date: string
  time?: string
  team1: string
  team2: string
  group?: string
  ground?: string
}

interface WorldCupSchedule {
  name: string
  matches: MatchItem[]
}

useWidget()

interface HubApiResponse {
  id: string
  create_time: string
  url: string
  response: unknown
}

const hubApiUrl = 'https://facai365.vip/hub/api'
const hubApiId = 'world_cup_2026'

const activeTab = ref<'stages' | 'matches'>('matches')

const loading = ref(false)
const errorMsg = ref('')
const schedule = ref<WorldCupSchedule>()

const allScheduleValue = '__ALL__'
const selectedDate = ref<string>('')

function stageOrderKey(stage: string) {
  const order = [
    '小组赛',
    '32 强赛',
    '16 强赛',
    '1/4 决赛',
    '半决赛',
    '三四名决赛',
    '决赛',
  ]
  const index = order.indexOf(stage)
  return index === -1 ? 999 : index
}

function matchToStage(m: MatchItem) {
  if (m.group && m.group.startsWith('Group ')) {
    return '小组赛'
  }
  if (m.round === 'Round of 32') {
    return '32 强赛'
  }
  if (m.round === 'Round of 16') {
    return '16 强赛'
  }
  if (m.round === 'Quarter-final') {
    return '1/4 决赛'
  }
  if (m.round === 'Semi-final') {
    return '半决赛'
  }
  if (m.round === 'Match for third place') {
    return '三四名决赛'
  }
  if (m.round === 'Final') {
    return '决赛'
  }
  return m.round || '未知阶段'
}

function formatDateRange(dates: string[]) {
  const sorted = [...dates].sort()
  if (!sorted.length) {
    return '-'
  }
  const toMonthDay = (d: string) => {
    const parts = d.split('-')
    if (parts.length === 3) {
      return `${parts[1]}-${parts[2]}`
    }
    return d
  }
  if (sorted.length === 1) {
    return toMonthDay(sorted[0])
  }
  return `${toMonthDay(sorted[0])} - ${toMonthDay(sorted[sorted.length - 1])}`
}

async function fetchSchedule() {
  try {
    loading.value = true
    errorMsg.value = ''
    const res = await axios.get(hubApiUrl, {
      params: { id: hubApiId },
      responseType: 'json',
    })

    const data = res.data as unknown
    if (data && typeof data === 'object' && 'response' in data) {
      const hubRes = data as HubApiResponse
      const payload = typeof hubRes.response === 'string'
        ? JSON.parse(hubRes.response)
        : hubRes.response
      schedule.value = payload as WorldCupSchedule
    }
    else {
      schedule.value = data as WorldCupSchedule
    }

    if (!selectedDate.value) {
      const dates = (schedule.value?.matches ?? []).map(m => m.date).filter(Boolean)
      const first = [...new Set(dates)].sort()[0]
      if (first) {
        selectedDate.value = first
      }
    }
  }
  catch (e) {
    errorMsg.value = e instanceof Error ? e.message : String(e)
  }
  finally {
    loading.value = false
  }
}

useIntervalFn(fetchSchedule, 6 * 60 * 60 * 1000, { immediate: true, immediateCallback: true })

const matches = computed(() => schedule.value?.matches ?? [])

const matchesDates = computed(() => {
  const set = new Set<string>()
  for (const m of matches.value) {
    if (m.date) {
      set.add(m.date)
    }
  }
  return [...set].sort()
})

const sortedMatches = computed(() => {
  return [...matches.value].sort((a, b) => {
    const aKey = `${a.date ?? ''} ${a.time ?? ''}`
    const bKey = `${b.date ?? ''} ${b.time ?? ''}`
    return aKey.localeCompare(bKey)
  })
})

const matchesOfSelectedDate = computed(() => {
  if (!selectedDate.value) {
    return []
  }
  if (selectedDate.value === allScheduleValue) {
    return sortedMatches.value
  }
  return matches.value.filter(m => m.date === selectedDate.value)
})

const selectedDateLabel = computed(() => {
  if (!selectedDate.value) {
    return '选择日期'
  }
  if (selectedDate.value === allScheduleValue) {
    return '全部赛程'
  }
  return selectedDate.value
})

const dateMenuOpen = ref(false)
const dateDropdownEl = ref<HTMLElement>()

function selectDate(d: string) {
  selectedDate.value = d
  dateMenuOpen.value = false
}

function onDocumentClick(e: MouseEvent) {
  if (!dateMenuOpen.value) {
    return
  }
  const target = e.target as Node | null
  if (!target) {
    return
  }
  if (dateDropdownEl.value && !dateDropdownEl.value.contains(target)) {
    dateMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick, true)
})

const stageRows = computed<ScheduleRow[]>(() => {
  const map = new Map<string, MatchItem[]>()
  for (const m of matches.value) {
    const stage = matchToStage(m)
    const list = map.get(stage) ?? []
    list.push(m)
    map.set(stage, list)
  }
  const rows: ScheduleRow[] = []
  for (const [stage, list] of map.entries()) {
    const dates = list.map(m => m.date).filter(Boolean)
    const note = stage === '小组赛' ? '共 12 组（A-L），每队 3 场' : '单场淘汰'
    rows.push({
      stage,
      date: formatDateRange(dates),
      note,
    })
  }
  return rows.sort((a, b) => stageOrderKey(a.stage) - stageOrderKey(b.stage))
})

const tableRows = computed(() => stageRows.value)

const flagCodeMap: Record<string, string> = {
  'Algeria': 'dz',
  'Argentina': 'ar',
  'Australia': 'au',
  'Austria': 'at',
  'Belgium': 'be',
  'Brazil': 'br',
  'Canada': 'ca',
  'Bosnia & Herzegovina': 'ba',
  'Bosnia and Herzegovina': 'ba',
  'Colombia': 'co',
  'Croatia': 'hr',
  'Curaçao': 'cw',
  'Czech Republic': 'cz',
  'Ecuador': 'ec',
  'Egypt': 'eg',
  'England': 'gb-eng',
  'France': 'fr',
  'Germany': 'de',
  'Ghana': 'gh',
  'Haiti': 'ht',
  'Iran': 'ir',
  'Iraq': 'iq',
  'Japan': 'jp',
  'Jordan': 'jo',
  'Mexico': 'mx',
  'Morocco': 'ma',
  'Netherlands': 'nl',
  'New Zealand': 'nz',
  'Norway': 'no',
  'Panama': 'pa',
  'Paraguay': 'py',
  'Portugal': 'pt',
  'Qatar': 'qa',
  'Saudi Arabia': 'sa',
  'Scotland': 'gb-sct',
  'Senegal': 'sn',
  'South Africa': 'za',
  'South Korea': 'kr',
  'Spain': 'es',
  'Sweden': 'se',
  'Switzerland': 'ch',
  'Tunisia': 'tn',
  'Turkey': 'tr',
  'USA': 'us',
  'Uruguay': 'uy',
  'Uzbekistan': 'uz',
  'Cape Verde': 'cv',
  'Ivory Coast': 'ci',
  'Côte d\'Ivoire': 'ci',
  'DR Congo': 'cd',
}

const teamNameZhMap: Record<string, string> = {
  'Algeria': '阿尔及利亚',
  'Argentina': '阿根廷',
  'Australia': '澳大利亚',
  'Austria': '奥地利',
  'Belgium': '比利时',
  'Bosnia & Herzegovina': '波黑',
  'Bosnia and Herzegovina': '波黑',
  'Brazil': '巴西',
  'Canada': '加拿大',
  'Cape Verde': '佛得角',
  'Colombia': '哥伦比亚',
  'Croatia': '克罗地亚',
  'Curaçao': '库拉索',
  'Czech Republic': '捷克',
  'DR Congo': '刚果（金）',
  'Ecuador': '厄瓜多尔',
  'Egypt': '埃及',
  'England': '英格兰',
  'France': '法国',
  'Germany': '德国',
  'Ghana': '加纳',
  'Haiti': '海地',
  'Iran': '伊朗',
  'Iraq': '伊拉克',
  'Ivory Coast': '科特迪瓦',
  'Côte d\'Ivoire': '科特迪瓦',
  'Japan': '日本',
  'Jordan': '约旦',
  'Mexico': '墨西哥',
  'Morocco': '摩洛哥',
  'Netherlands': '荷兰',
  'New Zealand': '新西兰',
  'Norway': '挪威',
  'Panama': '巴拿马',
  'Paraguay': '巴拉圭',
  'Portugal': '葡萄牙',
  'Qatar': '卡塔尔',
  'Saudi Arabia': '沙特阿拉伯',
  'Scotland': '苏格兰',
  'Senegal': '塞内加尔',
  'South Africa': '南非',
  'South Korea': '韩国',
  'Spain': '西班牙',
  'Sweden': '瑞典',
  'Switzerland': '瑞士',
  'Tunisia': '突尼斯',
  'Turkey': '土耳其',
  'USA': '美国',
  'Uruguay': '乌拉圭',
  'Uzbekistan': '乌兹别克斯坦',
}

function isPlaceholderTeam(team: string) {
  if (!team) {
    return true
  }
  return (
    /^\d+[A-Z]$/.test(team)
    || /^[WL]\d+$/.test(team)
    || (/\d/.test(team) && /\//.test(team))
  )
}

function getFlagUrl(team: string) {
  if (isPlaceholderTeam(team)) {
    return ''
  }
  const code = flagCodeMap[team]
  if (!code) {
    return ''
  }
  return `https://flagcdn.com/24x18/${code}.png`
}

function getTeamAbbr(team: string) {
  if (!team) {
    return '?'
  }
  if (isPlaceholderTeam(team)) {
    return team.slice(0, 3).toUpperCase()
  }
  const cleaned = team.replace(/[^a-z\s]/gi, ' ').trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  if (!parts.length) {
    return team.slice(0, 2).toUpperCase()
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
}

function getTeamName(team: string) {
  if (isPlaceholderTeam(team)) {
    return team
  }
  return teamNameZhMap[team] ?? team
}

function getGroupName(group: string) {
  const m = group.match(/^Group\s+([A-L])$/)
  if (!m) {
    return group
  }
  return `${m[1]}组`
}

function getMatchStageLabel(m: MatchItem) {
  if (m.group) {
    return getGroupName(m.group)
  }
  return matchToStage(m)
}

function formatBeijingTime(m: MatchItem) {
  if (!m.time) {
    return '-'
  }
  const timeMatch = m.time.match(/^(\d{1,2}):(\d{2})\s*UTC([+-]\d{1,2})$/)
  if (!timeMatch) {
    return m.time
  }
  const yearMonthDay = m.date.split('-').map(Number)
  if (yearMonthDay.length !== 3) {
    return m.time
  }
  const [year, month, day] = yearMonthDay
  const hour = Number(timeMatch[1])
  const minute = Number(timeMatch[2])
  const utcOffsetHours = Number(timeMatch[3])
  const utcMillis = Date.UTC(year, month - 1, day, hour, minute) - utcOffsetHours * 60 * 60 * 1000
  const date = new Date(utcMillis)
  try {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
    return formatter.format(date).replaceAll('/', '-')
  }
  catch {
    return date.toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replaceAll('/', '-')
  }
}
</script>

<template>
  <WidgetWrapper>
    <div class="world-cup">
      <div class="header">
        <div class="title">
          {{ schedule?.name ?? 'World Cup 2026' }}
        </div>
      </div>

      <div class="tabs">
        <button
          class="tab"
          :class="{ active: activeTab === 'matches' }"
          type="button"
          @click="activeTab = 'matches'"
        >
          赛程
        </button>
        <button
          class="tab"
          :class="{ active: activeTab === 'stages' }"
          type="button"
          @click="activeTab = 'stages'"
        >
          阶段
        </button>
      </div>

      <div v-if="loading || errorMsg" class="status">
        <span v-if="loading">正在加载赛程…</span>
        <span v-else class="error">加载失败：{{ errorMsg }}</span>
        <button class="retry" type="button" @click="fetchSchedule">
          刷新
        </button>
      </div>

      <div class="table">
        <div v-if="activeTab === 'matches'" class="matches-bar">
          <div ref="dateDropdownEl" class="date-dropdown">
            <button class="date-trigger" type="button" @click.stop="dateMenuOpen = !dateMenuOpen">
              <span class="date-text">{{ selectedDateLabel }}</span>
              <span class="date-chevron" :class="{ open: dateMenuOpen }">▾</span>
            </button>
            <div v-if="dateMenuOpen" class="date-menu">
              <button
                class="date-option"
                :class="{ active: selectedDate === allScheduleValue }"
                type="button"
                @click="selectDate(allScheduleValue)"
              >
                全部赛程
              </button>
              <button
                v-for="d in matchesDates"
                :key="d"
                class="date-option"
                :class="{ active: d === selectedDate }"
                type="button"
                @click="selectDate(d)"
              >
                {{ d }}
              </button>
            </div>
          </div>
          <div class="count">
            {{ matchesOfSelectedDate.length }} 场
          </div>
        </div>

        <div class="row head" :class="{ matches: activeTab === 'matches' }">
          <div class="cell stage">
            {{ activeTab === 'matches' ? '对阵' : '项目' }}
          </div>
          <div class="cell date">
            {{ activeTab === 'matches' ? '北京时间' : '日期' }}
          </div>
          <div class="cell note">
            {{ activeTab === 'matches' ? '组别 / 场地' : '说明' }}
          </div>
        </div>

        <div class="body">
          <template v-if="activeTab === 'matches'">
            <div v-for="m in matchesOfSelectedDate" :key="`${m.date}-${m.time}-${m.team1}-${m.team2}`" class="row matches">
              <div class="cell stage">
                <div class="match">
                  <div class="team">
                    <img v-if="getFlagUrl(m.team1)" class="flag" :src="getFlagUrl(m.team1)" :alt="getTeamName(m.team1)">
                    <div v-else class="flag-fallback">
                      {{ getTeamAbbr(m.team1) }}
                    </div>
                    <div class="team-name">
                      {{ getTeamName(m.team1) }}
                    </div>
                  </div>
                  <div class="team">
                    <img v-if="getFlagUrl(m.team2)" class="flag" :src="getFlagUrl(m.team2)" :alt="getTeamName(m.team2)">
                    <div v-else class="flag-fallback">
                      {{ getTeamAbbr(m.team2) }}
                    </div>
                    <div class="team-name">
                      {{ getTeamName(m.team2) }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell date">
                {{ formatBeijingTime(m) }}
              </div>
              <div class="cell note">
                {{ getMatchStageLabel(m) }} · {{ m.ground ?? '-' }}
              </div>
            </div>
          </template>
          <template v-else>
            <div v-for="item in tableRows" :key="item.stage + item.date" class="row">
              <div class="cell stage">
                {{ item.stage }}
              </div>
              <div class="cell date">
                {{ item.date }}
              </div>
              <div class="cell note">
                {{ item.note }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </WidgetWrapper>
</template>

<style scoped lang="scss">
.world-cup {
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--widget-color);
  min-height: 0;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }

  .meta {
    font-size: 12px;
    opacity: 0.85;
  }
}

.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tab {
  cursor: pointer;
  border: 1px solid color-mix(in srgb, var(--widget-color) 18%, transparent);
  background: color-mix(in srgb, var(--widget-background-color) 86%, transparent);
  color: var(--widget-color);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 12px;
}

.tab.active {
  border-color: color-mix(in srgb, var(--widget-color) 40%, transparent);
  background: color-mix(in srgb, var(--widget-color) 12%, var(--widget-background-color));
}

.table {
  border-radius: var(--widget-border-radius);
  border: 1px solid color-mix(in srgb, var(--widget-color) 12%, transparent);
  overflow: hidden;
  background: color-mix(in srgb, var(--widget-background-color) 92%, transparent);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 12px;
  padding: 8px 10px;
  border-radius: var(--widget-border-radius);
  border: 1px solid color-mix(in srgb, var(--widget-color) 12%, transparent);
  background: color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.error {
  color: color-mix(in srgb, #ff4d4f 90%, var(--widget-color));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.retry {
  cursor: pointer;
  border: 1px solid color-mix(in srgb, var(--widget-color) 18%, transparent);
  background: transparent;
  color: var(--widget-color);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  line-height: 12px;
}

.matches-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 10px;
  border-bottom: 1px solid color-mix(in srgb, var(--widget-color) 10%, transparent);
}

.date-dropdown {
  position: relative;
  max-width: 65%;
  flex: 1;
  min-width: 0;
}

.date-trigger {
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid color-mix(in srgb, var(--widget-color) 18%, transparent);
  background: color-mix(in srgb, var(--widget-background-color) 86%, transparent);
  color: var(--widget-color);
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
}

.date-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.date-chevron {
  flex: none;
  opacity: 0.75;
  transition: transform 0.15s ease;
}

.date-chevron.open {
  transform: rotate(180deg);
}

.date-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 180px;
  overflow: auto;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--widget-color) 16%, transparent);
  background: color-mix(in srgb, var(--widget-background-color) 96%, transparent);
  backdrop-filter: blur(8px);
  padding: 6px;
  z-index: 10;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--widget-color) 32%, transparent)
    color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.date-menu::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.date-menu::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.date-menu::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--widget-color) 26%, transparent);
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.date-menu::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--widget-color) 40%, transparent);
}

.date-option {
  cursor: pointer;
  width: 100%;
  border: none;
  background: transparent;
  color: var(--widget-color);
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 8px;
  text-align: left;
}

.date-option:hover {
  background: color-mix(in srgb, var(--widget-color) 10%, transparent);
}

.date-option.active {
  background: color-mix(in srgb, var(--widget-color) 14%, transparent);
  font-weight: 700;
}

.count {
  font-size: 12px;
  opacity: 0.8;
}

.row {
  display: grid;
  grid-template-columns: 120px 110px 1fr;
  column-gap: 10px;
  align-items: center;
  padding: 10px 10px;
  border-top: 1px solid color-mix(in srgb, var(--widget-color) 10%, transparent);
  font-size: 13px;
}

.row.head {
  border-top: none;
  font-size: 12px;
  font-weight: 700;
  background: color-mix(in srgb, var(--widget-color) 7%, transparent);
}

.row.matches {
  grid-template-columns: 1.8fr 120px 1.6fr;
}

.row.matches .cell.stage {
  white-space: normal;
}

.match {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  min-width: 0;
}

.team {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  max-width: 100%;
}

.team-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  text-align: left;
}

.flag {
  width: 18px;
  height: 12px;
  flex: none;
  border-radius: 2px;
  object-fit: cover;
  border: 1px solid color-mix(in srgb, var(--widget-color) 12%, transparent);
}

.flag-fallback {
  width: 18px;
  height: 12px;
  flex: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  line-height: 8px;
  border: 1px solid color-mix(in srgb, var(--widget-color) 20%, transparent);
  background: color-mix(in srgb, var(--widget-color) 10%, transparent);
}

.cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cell.note {
  white-space: normal;
  line-height: 18px;
}

.body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--widget-color) 32%, transparent)
    color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.body::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.body::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--widget-color) 26%, transparent);
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, var(--widget-background-color) 92%, transparent);
}

.body::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--widget-color) 40%, transparent);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.link {
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  color: color-mix(in srgb, var(--widget-color) 92%, #2b5cff);
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.hint {
  font-size: 12px;
  opacity: 0.75;
}
</style>
