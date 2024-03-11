import banner from '/assets/images/free-banner.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const GetStartedCard = () => {
  return (
    <div className='bg-[#0052fe] rounded-lg text-center p-10 text-white w-full lg:max-w-[22.5rem]'>
      <h2 className='text-2xl font-semibold'>Get Started with KoinX for FREE</h2>
      <small>With our range of features that you can equip for free, KoinX allows you to be more education and aware of your tax response</small>
      <img className='w-2/3 m-auto' src={banner} alt="free banner" />
      <button className='flex justify-center items-center m-auto mt-5 bg-white text-black px-4 py-2 rounded-md'>Get Started for FREE <IoIosArrowRoundForward fontSize="1.5em" /></button>
    </div>
  )
}

export default GetStartedCard