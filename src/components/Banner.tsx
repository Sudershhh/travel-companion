import Image from "next/image";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import banner from "../../public/images/banner.jpg";

function Banner() {
  return (
    <section className="mt-8 md:mt-20">
      <div className="relative w-full">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-72 md:h-96 object-cover rounded-md"
          style={{
            filter: "brightness(70%)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h3 className="text-white text-2xl md:text-4xl text-center mb-4 md:mb-8">
            Enjoy Your Dream Vacation
          </h3>
          <p className="text-white text-sm md:text-lg text-center px-4">
            Plan and book your perfect trip with expert advice, travel tips,
          </p>
          <p className="text-white text-sm md:text-lg text-center px-4">
            destination information, and inspiration from us
          </p>
        </div>
      </div>

      <div className="bg-yellow-100 rounded-lg p-4 flex justify-start items-center mt-4 md:mt-8">
        <ExclamationTriangleIcon
          width={20}
          height={20}
          className="ml-2 md:ml-4"
        />
        <div className="ml-4 md:ml-8 flex flex-col md:flex-row items-center w-full">
          <p className="text-gray-800 text-xs md:text-sm mr-2 md:mr-4">
            Check the latest COVID-19 restrictions before you travel.
          </p>
          <p className="text-blue-400 text-xs md:text-sm">Learn more</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
