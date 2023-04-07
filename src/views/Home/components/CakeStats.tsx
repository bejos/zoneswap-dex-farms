import React from 'react'
import { Card, CardBody, Text, Flex } from 'archerswap-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useTheme from 'hooks/useTheme'
import { useBurnedBalance, useCirculatingBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getBowAddress } from 'utils/addressHelpers'
import { usePriceBowUsd } from 'state/hooks'
import BigNumber from 'bignumber.js'
import CardValue from './CardValue'

const StyledBowStats = styled(Card)<any>`
  background: ${({ theme, isDark }) => (isDark ? theme.card.background : '#fff')};
  box-shadow: ${({ theme, isDark }) =>
    isDark ? '0px 3.5px 10px rgba(134, 145, 172, 0.1)' : '0px 3.5px 10px rgba(10, 14, 22, 0.1)'};
  border-radius: 16px;
  border: ${({ theme, isDark }) => (isDark ? '1px solid #29292D' : '0px solid')};
`

const LeftBlock = styled.div`
  margin-bottom: 16px;
`
const RightBlock = styled.div`
  margin-bottom: 16px;
  text-align: right;
`
// const CardImage = styled.img`
//   margin-bottom: 16px;
// `

const CakeStats = () => {
  const { t } = useTranslation()
  const burnedBalance = useBurnedBalance(getBowAddress())
  const circulatingBalance = useCirculatingBalance()
  const { isDark } = useTheme()
  const bowPriceUsd = usePriceBowUsd()

  return (
    <StyledBowStats isDark={isDark}>
      <CardBody>
        <Flex justifyContent="space-between">
          <LeftBlock>
            <Text fontSize="14px" color="title">
              {t('BOW Price')}
            </Text>
            <CardValue fontSize="24px" decimals={3} value={bowPriceUsd.toNumber()} />
          </LeftBlock>
          <RightBlock>
            <Text fontSize="14px" color="title">
              {t('BOW Market Cap')}
            </Text>
            <CardValue
              fontSize="24px"
              decimals={0}
              value={new BigNumber(circulatingBalance).div(1e18).times(bowPriceUsd).toNumber()}
            />
          </RightBlock>
        </Flex>
        <Flex justifyContent="space-between">
          <LeftBlock>
            <Text fontSize="14px" color="title">
              {t('BOW in Circulation')}
            </Text>
            <CardValue fontSize="24px" value={getBalanceNumber(circulatingBalance)} />
          </LeftBlock>

          <RightBlock>
            <Text fontSize="14px" color="title">
              {t('BOW Burned')}
            </Text>
            <CardValue fontSize="24px" decimals={0} value={getBalanceNumber(burnedBalance)} />
          </RightBlock>
        </Flex>
      </CardBody>
    </StyledBowStats>
  )
}

export default CakeStats
