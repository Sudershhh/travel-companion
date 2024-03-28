import Card from "./Card"
import hotel1 from "../../public/images/hotel1.jpg"
import hotel2 from "../../public/images/hotel2.jpg"
import hotel3 from "../../public/images/hotel3.jpg"
import hotel4 from "../../public/images/hotel4.jpg"

function PopularHotels() {

    const hotels = [
        { imageSrc: hotel1, name: 'Lakeside Motel Warefront', propertiesCount: 2465 },
        { imageSrc: hotel2, name: 'Reece Graham resort', propertiesCount: 3120 },
        { imageSrc: hotel3, name: 'Fireside Dinners', propertiesCount: 1850 },
        { imageSrc: hotel4, name: 'Oculous Inn Stay', propertiesCount: 1750 },  
    
        { imageSrc: hotel1, name: 'Lakeside Motel Warefront', propertiesCount: 2465 },
        { imageSrc: hotel2, name: 'Reece Graham resort', propertiesCount: 3120 },
        { imageSrc: hotel3, name: 'Fireside Dinners', propertiesCount: 1850 },
        { imageSrc: hotel4, name: 'Oculous Inn Stay', propertiesCount: 1750 },  
      
    
      ];

    return (
    <div className="my-8">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-2xl font-semibold">Enjoy your Dream Vacation</h2>
        <p className="text-sm text-gray-600">
          Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us.
        </p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {hotels.map((hotel, index) => (
        <Card key={index} {...hotel} />
      ))}
    </div>
  </div>
  )
  
}

export default PopularHotels