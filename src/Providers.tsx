import React from 'react'
import { ModalProvider } from '@pancakeswap-libs/uikit'
// import core, { UseWalletProvider } from '@binance-chain/core-use-wallet'
import * as core from '@binance-chain/bsc-use-wallet-use-wallet'
import { Provider } from 'react-redux'
import getRpcUrl from 'utils/getRpcUrl'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'

const Providers: React.FC = ({ children }) => {
  const rpcUrl = getRpcUrl()
  const chainId = parseInt(process.env.REACT_APP_CHAIN_ID);
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <core.UseWalletProvider
            chainId={chainId}
            connectors={{
              walletconnect: { rpcUrl },
              core,
            }}
          >
            <BlockContextProvider>
              <RefreshContextProvider>
                <ModalProvider>{children}</ModalProvider>
              </RefreshContextProvider>
            </BlockContextProvider>
          </core.UseWalletProvider>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}

export default Providers
