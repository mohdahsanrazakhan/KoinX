import distribution from '/assets/images/distribution.png'


const Tokenomics = () => {
  return (
    <>
      <div className="bg-[#ffffff] p-5 my-5 rounded-xl max-w-screen-lg flex flex-col gap-5">
        <h2 className="text-xl"><strong>Tokenomics</strong></h2>
        <h3 className="text-xl font-semibold">Initial Distribution</h3>
        <img className='md:w-1/2' src={distribution} alt="initial-distribution" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officia et hic ipsa nisi facere qui assumenda dolorem? Magnam nesciunt excepturi, repudiandae soluta asperiores, quisquam ipsum quas voluptatum aliquid maiores cum accusantium animi est necessitatibus commodi aliquam cupiditate eveniet recusandae illum hic corporis laborum! Repellat magnam voluptatibus facilis cum porro.</p>
      </div>
    </>
  )
}

export default Tokenomics