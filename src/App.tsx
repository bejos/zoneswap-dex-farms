import React, { useState, useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS, Text } from 'archerswap-uikit'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import { useWeb3React } from '@web3-react/core'
import Hunt from 'views/Hunt'
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const PresaleAlert = styled.div`
  background: #e5e8ec;
  font-weight: bold;
  padding: 21px 36px;
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`

const App: React.FC = () => {
  const { account, chainId, deactivate } = useWeb3React()
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()
  useGetDocumentTitlePrice()

  if (!window.location.href.includes('bridge') && account && chainId.toString() !== process.env.REACT_APP_CHAIN_ID) {
    deactivate()
  }

  const [presaleAlertEnabled, setPresaleAlertEnabled] = useState(false)
  useEffect(() => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000)
    if (currentTimestamp < 1679313600) {
      setPresaleAlertEnabled(true)
      setTimeout(() => {
        setPresaleAlertEnabled(false)
      }, 10000)
    }
  }, [])

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          {presaleAlertEnabled && (
            <PresaleAlert>
              <Text color="#182149" fontSize="16px">
                HUNT presale starts at 12 PM UTC 20th Mar. Check out more on our{'  '}
                <a href="/ido" style={{ color: '#eaae25' }}>
                  BowPad
                </a>
                .
              </Text>
            </PresaleAlert>
          )}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/vaults">
              <Vaults />
            </Route>
            <Route path="/xbow">
              <Pools />
            </Route>
            <Route path="/hunt">
              <Hunt />
            </Route>
            <Route path="/lottery">
              <Lottery />
            </Route>
            <Route path="/ido">
              <Ifos />
            </Route>
            <Route path="/disperse">
              <Disperse />
            </Route>
            <Route path="/bridge">
              <Bridge />
            </Route>
            <Route path="/marketplace/:alias/:tokenId">
              <NftDetail />
            </Route>
            <Route path="/marketplace/:alias">
              <CollectionDetail />
            </Route>
            <Route path="/marketplace">
              <Marketplace />
            </Route>
            <Route path="/my-nfts">
              <MyNfts />
            </Route>
            <Route path="/collectibles">
              <Collectibles />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route path="/teams/:id">
              <Team />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/dice">
              <Dice />
            </Route>
            {/* Redirect */}
            <Route path="/staking">
              <Redirect to="/xbow" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/xbow" />
            </Route>
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route>
            <Route path="/campaigns/0">
              <TradingComp id={0} />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <GlobalCheckBullHiccupClaimStatus />
    </Router>
  )
}

export default React.memo(App)
