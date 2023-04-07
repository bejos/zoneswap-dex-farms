import React from 'react'
import { Text } from 'archerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getBowAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceBowUsd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const bowBalance = useTokenBalance(getBowAddress())
  const busdBalance = new BigNumber(getBalanceNumber(bowBalance)).multipliedBy(usePriceBowUsd()).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text fontSize="24px" color="text">
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(bowBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardBusdValue value={busdBalance} />
    </>
  )
}

export default CakeWalletBalance
