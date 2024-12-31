import Image, { StaticImageData } from "next/image"

export interface ItemPreviewProps {
    name: string;
    description: string;
    image: StaticImageData;
    }
const ItemPreview = ({name, description, image}: ItemPreviewProps) => {
  return (
    <div className="flex flex-col justify-center min-w-40">
        <p className="text-brown-800 text-md font-bold">{name}</p>
        <p className="text-green-600 italic text-xs">{description}</p>
        <Image src={image} alt="Ghostly green coffee" width={80} height={80} />
        <button className="bg-green-600  p-2 rounded text-white-200 w-20 h-11" >Add</button>
    </div>
  )
}

export default ItemPreview