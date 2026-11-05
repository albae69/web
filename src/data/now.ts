// Edit this file to update devices or games.

export type Device = {
  name: string
  detail: string
  tag: string
  icon: 'laptop' | 'phone' | 'monitor' | 'keyboard' | 'mouse' | 'watch'
}

export const devices: Device[] = [
  {
    name: 'MacBook Pro 14" M4',
    detail: '16GB RAM / 512GB — daily driver for coding and builds',
    tag: 'Laptop',
    icon: 'laptop',
  },
  {
    name: 'iPhone XR 128GB',
    detail: 'Daily phone and iOS testing device',
    tag: 'Phone',
    icon: 'phone',
  },
  {
    name: 'Monitor Lenovo L24i-40',
    detail: '23.8" FHD IPS 100Hz — external display for editor and browser',
    tag: 'Monitor',
    icon: 'monitor',
  },
  {
    name: 'Keychron K2 V2',
    detail: 'Wireless mechanical keyboard, daily driver for typing and coding',
    tag: 'Keyboard',
    icon: 'keyboard',
  },
  {
    name: 'NYK C55 Wireless Silent',
    detail: 'Wireless silent-click mouse, good for late-night work',
    tag: 'Mouse',
    icon: 'mouse',
  },
  {
    name: 'Huawei Band 10',
    detail: 'Smartband for steps, sleep, and notifications',
    tag: 'Wearable',
    icon: 'watch',
  },
]

export type Game = {
  title: string
  platform: string
  status: 'playing' | 'finished' | 'backlog'
  note: string
  // Steam link (store page or profile)
  url?: string
  steamAppId?: number
}

export const games: Game[] = [
  {
    title: 'Dota 2',
    platform: 'PC / Steam',
    status: 'playing',
    note: 'Playing ranked and unranked with friends. Favourite roles: Mid / Carry.',
    url: 'https://store.steampowered.com/app/570/Dota_2/',
    steamAppId: 570,
  },
]

export const steamProfileUrl = 'https://steamcommunity.com/profiles/76561198299515071/'

export const lastUpdated = 'September 2026'
