import calcProfit from '/assets/images/profit.avif'
import calcTax from '/assets/images/tax.avif'
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <>
      <div className="bg-[#ffffff] p-5 my-5 rounded-xl max-w-screen-lg flex flex-col gap-5">
        <h2 className="text-xl"><strong>About Bitcoin</strong></h2>
        <h3><strong>What is Bitcoin?</strong></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vitae molestias a voluptate aliquam sapiente ut odit sit adipisci impedit magnam corporis, provident at voluptates!</p>
        <hr />
        <h3 className="font-bold">Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam aperiam neque doloribus libero, ut, sunt consectetur at voluptatum eos maxime unde similique numquam nobis beatae incidunt suscipit ab aut!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque adipisci dicta quaerat! Corrupti nisi quisquam a cupiditate expedita quia corporis eveniet ratione voluptatem sit deserunt odio tenetur, doloremque fugit quaerat animi, laborum accusantium commodi dolore cumque. Iure provident facere optio!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, velit! Facere facilis recusandae aut reprehenderit veritatis, sit harum eveniet veniam eum quam architecto excepturi laboriosam blanditiis aliquid fuga laborum libero repellat autem placeat neque quia.</p>
        <hr />
        <h2 className="text-xl font-semibold">Already Holding Bitcoin?</h2>
        <div className='flex md:flex-row flex-col gap-5 flex-wrap'>
          <div className='flex justify-start items-center flex-col sm:flex-row bg-gradient-to-br from-[#75eca4] to-[#1261ad] p-5 rounded-md gap-7'>
            <img className='sm:h-[120px] sm:w-[120px] rounded-md object-cover' src={calcProfit} alt="calculate profit" />
            <div className='flex flex-col sm:items-start items-center'>
              <h2 className='text-xl font-semibold text-white sm:w-48'>Calculate your Profits</h2>
              <button className='flex justify-center items-center mt-3 bg-white text-black px-2 py-1 rounded-md'>Check Now <IoIosArrowRoundForward fontSize="1.3em" /></button>
            </div>
          </div>
          <div className='flex justify-start items-center flex-col sm:flex-row bg-gradient-to-br from-[#ff9765] to-[#f13b37] p-5 rounded-md gap-7'>
            <img className='sm:h-[120px] sm:w-[120px] rounded-md object-cover' src={calcTax} alt="calculate tax" />
            <div className='flex flex-col sm:items-start items-center'>
              <h2 className='text-xl font-semibold text-white sm:w-48'>Calculate your tax liability</h2>
              <button className='flex justify-center items-center mt-3 bg-white text-black px-2 py-1 rounded-md'>Check Now <IoIosArrowRoundForward fontSize="1.3em" /></button>
            </div>
          </div>
        </div>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam quia blanditiis tenetur vel, harum tempora est, nesciunt quidem rem cumque aliquid quam reiciendis eum distinctio deserunt commodi beatae reprehenderit. Culpa, atque! Nesciunt obcaecati recusandae laborum sed earum laudantium non!</p>
      </div>
    </>
  )
}

export default About