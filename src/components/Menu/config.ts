import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/#',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Swap',
        href: 'https://app.zoneswap.org/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://app.zoneswap.org/#/pool',
      },
    ],
  },
  {
    label: 'Farms ( SOON )',
    icon: 'FarmIcon',
    href: '/#',
  },
  {
    label: 'Nests ( SOON )',
    icon: 'PoolIcon',
    href: '/#',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Listing',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinGecko ( SOON )',
        href: '#',
      },
      {
        label: 'CoinMarketCap ( SOON )',
        href: '#',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Whitepaper',
        href: 'https://zoneswap.org/files/zoneswap.pdf',
      },
      {
        label: 'Github',
        href: 'https://github.com/zoneswap/',
      },
    ],
  },
]

export default config
