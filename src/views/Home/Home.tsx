import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'archerswap-uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import BowCard from 'views/Home/components/BowCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import Banner from 'components/Banner'
import { useTranslation } from 'contexts/Localization'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  // margin: auto;
  margin-bottom: 20px;
  max-width: 840px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 40px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  gap: 15px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const ButtonCards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  gap: 14px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 3;
    }
  }
`

const Background = styled.div`
  width: 100%;
`
const BowTitle = styled(Heading)`
  font-size: 24px;
`

const Container = styled.div``

// const StatusWrapper = styled.div`
//   display: none;
//   @media (max-width: 768px) {
//     display: grid;
//     grid-gap: 20px;
//     & > div {
//       width: 100%;
//     }
//   }
// `

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const StyledCarousel = styled(Carousel)`
  width: 100%;
  & .react-multi-carousel-item--active ~ .react-multi-carousel-item--active {
    padding-left: 20px;
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Background>
      <StyledCarousel responsive={responsive} itemClass="carousel-item" infinite autoPlaySpeed={3000} arrows>
        <Banner
          src="/images/assets/banners/home_banner.png"
          mobileSrc="/images/assets/banners/mobile_home_banner.png"
          alt="home_banner"
          title={t('Trade Mining & Farm & Pool')}
          text={t('Open for BOW')}
          white
        />
        <Banner
          src="/images/assets/banners/farm_banner.png"
          mobileSrc="/images/assets/banners/mobile_farm_banner.png"
          alt="farm_banner"
          title={t('Farms')}
          text={`${t('Stake LP tokens to earn BOW')}.`}
        />
      </StyledCarousel>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          <Hero>
            <Container>
              <BowTitle as="h1" mb="12px" color="bow" textAlign="left">
                {t('ArcherSwap')}
              </BowTitle>
              <Text color="textDisabled" fontSize="20px">
                {t(
                  'ArcherSwap is a crypto world for users to trade, earn, and game. It is the premier choice for projects on Core Chain with features including AMM, NFT, and GameFi.',
                )}
              </Text>
            </Container>
          </Hero>
          <ButtonCards>
            <BowCard
              iconSrc="/images/assets/home_card_icons/mountain.png"
              iconAlt="home_background"
              heading={t('Intro to BOW')}
              link="https://docs.archerswap.finance"
            />
            <BowCard
              iconSrc="/images/assets/home_card_icons/coin-1.png"
              iconAlt="home_background"
              heading={t('Support for New Project')}
              link="https://docs.google.com/forms/d/e/1FAIpQLSffYIbIQYYjr52AeRolVPcNNTF6vIjS3qTUACa9UpbIlFVp7w/viewform"
            />
            <BowCard
              iconSrc="/images/assets/home_card_icons/coin-2.png"
              iconAlt="home_background"
              heading={t('Tokenomics')}
              link="https://docs.archerswap.finance/products-and-features-guide/bow-tokenomics"
            />
            <BowCard
              iconSrc="/images/assets/home_card_icons/kendama.png"
              iconAlt="home_background"
              heading={t('Roadmap')}
              link="https://docs.archerswap.finance/products-and-features-guide/roadmap"
            />
          </ButtonCards>
        </div>
      </Page>
    </Background>
  )
}

export default Home
