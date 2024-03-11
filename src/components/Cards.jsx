
const Cards = (props) => {
  return (
    <div className="border-2 border-gray-300 rounded-xl w-60 h-40 p-5">
      <div className="flex justify-start items-center gap-2">
        <img className="rounded-full w-7 h-7" src={props.imgUrl} alt={props.symbol} />
        <p className="font-light">{props.symbol}</p>
        {
          props.pcp24h.toFixed(2) >= 0 ?
          <p className="bg-green-100 text-green-600 text-sm px-1.5 py-0.5 rounded-md tracking-wide">+{props.pcp24h.toFixed(2)}%</p>
          :
          <p className="bg-red-100 text-red-600 text-sm px-1.5 py-0.5 rounded-md tracking-wide">{props.pcp24h.toFixed(2)}%</p>
        }
      </div>
      <h3 className="text-lg font-medium mt-1.5">{props.price}</h3>
      <img className="w-full" src={props.sparklineUrl} alt={props.symbol} />
    </div>
  )
}

export default Cards