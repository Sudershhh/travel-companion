import Card from "./Card";
import { destinations } from "@/data/attractions";

function DreamVacation() {

  return (

  <div className="my-8">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">
        Enjoy your Dream Vacation
      </h2>
      <p className="text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base mt-4">
        Plan and book your perfect trip with expert advice, travel tips, destination
      </p>
      <p className="text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base">
        information, and inspiration from us.
      </p>
    </div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View All</button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {destinations.map((destination, index) => (
      <Card key={index} {...destination} />
    ))}
  </div>
</div>

  )
}

export default DreamVacation



