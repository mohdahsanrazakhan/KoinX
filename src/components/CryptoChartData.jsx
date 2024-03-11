import CryptoFetch from "./CryptoFetch";
import TradingViewChart from "./TradingViewChart";

const CryptoChartData = () => {
  return (
    <div className="bg-[#ffffff] p-5 mb-5 rounded-xl max-w-screen-lg flex flex-col gap-5 h-[700px]">
      <CryptoFetch />
      <hr />
      <TradingViewChart />
    </div>
  )
}

export default CryptoChartData