import { CardProps } from "../typescript/interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ imageSrc, name, propertiesCount }) => {
  return (
    <div className="bg-white overflow-hidden flex flex-col mt-6">
      <Image
        src={imageSrc}
        alt={name}
        width={100}
        className="w-full rounded-lg h-2/3"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{propertiesCount} properties</p>
      </div>
    </div>
  );
};

export default Card;
