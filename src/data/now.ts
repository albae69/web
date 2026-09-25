// Edit file ini aja kalau mau update device / game.

export type Device = {
  name: string
  detail: string
  tag: string
  icon: 'laptop' | 'phone' | 'monitor' | 'keyboard' | 'mouse' | 'watch'
}

export const devices: Device[] = [
  {
    name: 'MacBook Pro 14" M4',
    detail: '16GB RAM / 512GB — daily driver buat coding & build',
    tag: 'Laptop',
    icon: 'laptop',
  },
  {
    name: 'iPhone XR 128GB',
    detail: 'Daily phone + testing device iOS',
    tag: 'Phone',
    icon: 'phone',
  },
  {
    name: 'Monitor Lenovo L24i-40',
    detail: '23.8" FHD IPS 100Hz — layar eksternal buat split editor + browser',
    tag: 'Monitor',
    icon: 'monitor',
  },
  {
    name: 'Keychron K2 V2',
    detail: 'Keyboard mechanical wireless, daily driver ngetik & coding',
    tag: 'Keyboard',
    icon: 'keyboard',
  },
  {
    name: 'NYK C55 Wireless Silent',
    detail: 'Mouse wireless silent-click, enak buat kerja malem',
    tag: 'Mouse',
    icon: 'mouse',
  },
  {
    name: 'Huawei Band 10',
    detail: 'Smartband buat tracking langkah, tidur & notifikasi',
    tag: 'Wearable',
    icon: 'watch',
  },
]

export type Game = {
  title: string
  platform: string
  status: 'playing' | 'finished' | 'backlog'
  note: string
  // Link Steam ala Discord rich presence (store page / profil)
  url?: string
  steamAppId?: number
}

export const games: Game[] = [
  {
    title: 'Dota 2',
    platform: 'PC / Steam',
    status: 'playing',
    note: 'Main ranked & unranked bareng teman. Role favorit: Mid / Carry.',
    url: 'https://store.steampowered.com/app/570/Dota_2/',
    steamAppId: 570,
  },
]

export const steamProfileUrl = 'https://steamcommunity.com/profiles/76561198299515071/'

export const lastUpdated = 'September 2026'
