import Card from "./Card";
import dream1 from "../../public/images/dream1.jpg"
import dream2 from "../../public/images/dream2.jpg"
import dream3 from "../../public/images/dream3.jpg"
import dream4 from "../../public/images/dream4.jpg"

function DreamVacation() {

    const destinations = [
        { imageSrc: dream1, name: 'Australia', propertiesCount: 2465 },
        { imageSrc: dream2, name: 'Japan', propertiesCount: 3120 },
        { imageSrc: dream3, name: 'New Zealand', propertiesCount: 1850 },
        { imageSrc: dream4, name: 'Greece', propertiesCount: 1750 },
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
      {destinations.map((destination, index) => (
        <Card key={index} {...destination} />
      ))}
    </div>
  </div>
  )
}

export default DreamVacation