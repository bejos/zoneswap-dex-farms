import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BOW-WCORE LP',
    lpAddresses: {
      1115: '',
      1116: '0xBb8502132C87Ee31bE0E2bC1CB8CC69374488261',
    },
    tokenSymbol: 'BOW',
    tokenAddresses: {
      1115: '',
      1116: '0x1a639e150d2210a4be4a5f0857a9151b241e7ae4',
    },
    quoteTokenSymbol: QuoteToken.WCORE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BOW-USDT LP',
    lpAddresses: {
      1115: '',
      1116: '0x26601E75074B385594Ea5552F7B1EE5Ad7cF0403',
    },
    tokenSymbol: 'BOW',
    tokenAddresses: {
      1115: '',
      1116: '',
    },
    quoteTokenSymbol: QuoteToken.WCORE,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'HUNT-CORE LP',
    lpAddresses: {
      1115: '',
      1116: '0x798489bacDDf8A3c5B1C23E7c24833B349F41dED',
    },
    tokenSymbol: 'HUNT',
    tokenAddresses: {
      1115: '',
      1116: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.WCORE,
    quoteTokenAdresses: contracts.cake,
  },
]

export default farms
