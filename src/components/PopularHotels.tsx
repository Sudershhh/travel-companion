import Card from "./Card";
import { hotels } from "@/data/attractions";

function PopularHotels() {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            Popular Hotels
          </h2>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hotels.map((hotel, index) => (
          <Card key={`hotel-${index}`} {...hotel} />
        ))}
      </div>
    </div>
  );
}

export default PopularHotels;
