import Image, { StaticImageData } from "next/image"
import AddToOrderButton from "../Buttons/add-to-order-button";

export interface ItemPreviewProps {
    name: string;
    description: string;
    image: StaticImageData;
    }
const ItemPreview = ({name, description, image}: ItemPreviewProps) => {
  return (
    <div className="flex flex-col gap-1 justify-center min-w-40">
        <p className="text-brown-800 text-md font-bold">{name}</p>
        <p className="text-green-600 italic text-xs">{description}</p>
        <Image src={image} alt="Ghostly green coffee" width={80} height={80} />
        <AddToOrderButton itemName={name} />
    </div>
  )
}

export default ItemPreview