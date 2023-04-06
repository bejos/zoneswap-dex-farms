import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import wcoreABI from 'config/abi/weth.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getWcoreAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStatking = async () => {
  const nonCorePools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.CORE)
  const corePool = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.CORE)

  const callsNonCorePools = nonCorePools.map((poolConfig) => {
    return {
      address: poolConfig.stakingTokenAddress,
      name: 'balanceOf',
      params: [poolConfig.contractAddress[CHAIN_ID]],
    }
  })

  const callsCorePools = corePool.map((poolConfig) => {
    return {
      address: getWcoreAddress(),
      name: 'balanceOf',
      params: [poolConfig.contractAddress[CHAIN_ID]],
    }
  })

  const nonCorePoolsTotalStaked = await multicall(cakeABI, callsNonCorePools)
  const corePoolsTotalStaked = await multicall(wcoreABI, callsCorePools)

  return [
    ...nonCorePools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(nonCorePoolsTotalStaked[index]).toJSON(),
    })),
    ...corePool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(corePoolsTotalStaked[index]).toJSON(),
    })),
  ]
}
