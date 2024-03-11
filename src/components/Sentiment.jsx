import { IoMdInformationCircle, IoIosTrendingUp } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Carousel } from "@material-tailwind/react";
import estimates from '/assets/images/estimates.png'

const Sentiment = () => {
  return (
    <>
      <div className="bg-[#ffffff] p-5 my-5 rounded-xl max-w-screen-lg flex flex-col gap-5">
        <h2 className="text-xl"><strong>Sentiment</strong></h2>
        <h3 className="text-lg flex justify-start items-center gap-1 font-semibold">Key Events<IoMdInformationCircle color="#7c7e8c" fontSize="1.2em" /></h3>
        
        <Carousel className="rounded-xl h-auto lg:max-h-[10rem]">
          <div className="h-full w-full object-cover bg-blue-100 flex sm:flex-row flex-col gap-5 p-5">
            <div className="bg-blue-500 text-white p-5 w-fit h-fit rounded-full">
              <HiOutlineNewspaper fontSize="1.5em" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, praesentium.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, recusandae corporis? Animi, nesciunt. Eligendi ea at molestias fugiat harum, sed eveniet eum, unde amet perferendis fugit odio nihil cumque dignissimos.</p>
            </div>
          </div>
          <div className="h-full w-full object-cover bg-green-100 flex sm:flex-row flex-col gap-5 p-5">
            <div className="bg-green-500 text-white p-5 w-fit h-fit rounded-full">
              <IoIosTrendingUp fontSize="1.5em" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, praesentium.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, recusandae corporis? Animi, nesciunt. Eligendi ea at molestias fugiat harum, sed eveniet eum, unde amet perferendis fugit odio nihil cumque dignissimos.</p>
            </div>
          </div>
        </Carousel>

        <h3 className="text-lg flex justify-start items-center gap-1 font-semibold">Analyst Estimates<IoMdInformationCircle color="#7c7e8c" fontSize="1.2em" /></h3>
        <img className="md:w-2/3" src={estimates} alt="estimates" />

      </div>
    </>
  )
}

export default Sentiment