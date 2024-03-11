import { Tabs, Sentiment, About, Tokenomics, Team, GetStartedCard, TrendingCoin, CryptoChartData } from './index'
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Container = () => {
  return (
    <div className='max-w-screen-2xl m-auto'>
      <p className='flex flex-wrap items-center text-gray-600 px-4 pt-5'>Cryptocurrencies <RiArrowRightDoubleLine /> <span className='text-gray-800'>Bitcoin</span></p>
      <div className='flex flex-col lg:flex-row gap-5 p-5 lg:p-4 lg:pt-5'>
        <div className='max-w-screen-xl'>
          <CryptoChartData />
          <Tabs />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div>
          <GetStartedCard />
          <TrendingCoin />
        </div>
      </div>
    </div>
  )
}

export default Container