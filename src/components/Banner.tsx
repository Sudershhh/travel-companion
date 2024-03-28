import Image from "next/image"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import banner from "../../public/images/banner.jpg"
function Banner() {
  return (
    <section className="mt-20">
          <div className="relative max-w-full w-screen">
            <Image src={banner} alt="Banner" className="w-full object-contain rounded-md h-1/3 max-h-full"   style={{ filter: 'brightness(70%)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }} 
 />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-4xl  text-center mb-8">Enjoy Your Dream Vacation</h3>
                <p className="text-white  text-lg text-center">Plan and book our perfect trip with expert advice, travel tips,</p>
                <p className="text-white text-lg text-center">destination information and inspiration from us</p>
            </div>
      </div>

      <div className="bg-yellow-100 rounded-lg p-4 flex justify-start items-center mt-20">
        <ExclamationTriangleIcon width={30} height={30} className="ml-4" />
        <div className=" ml-8 flex w-full ">
          <p className="text-gray-800 mr-4">Check the latest COVID-19 restrictions before you travel.</p>
          <p className="text-sm text-blue-500">Learn more</p>
        </div>
      </div>
    </section>
  )
}

export default Banner