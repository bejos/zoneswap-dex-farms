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
        label: 'Swap V2',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x81e032c97a5cbbf06851412e2b1adcb2b51de9d1',
      },
      {
        label: 'Liquidity V2',
        href: 'https://exchange.pancakeswap.com/#/add/ETH/0x81e032c97a5cbbf06851412e2b1adcb2b51de9d1',
      },
      {
        label: 'Swap OLD',
        href: 'https://app.zoneswap.org/swap',
      },
      {
        label: 'Liquidity OLD',
        href: 'https://app.zoneswap.org/pool',
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
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/cookiesswap',
  },
]

export default config
