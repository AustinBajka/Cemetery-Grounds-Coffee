'use client'
import PageTitle from '@/components/Copy/PageTitle'
import CoffeeIcon from '@/images/icons8-cafe-black-50px.png'
import CakeIcon from '@/images/icons8-cake-black-50px.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface PreviewItem {
  name: string;
  id: number | string;
  image: StaticImageData;
}
export interface ItemPreviewSection {
  name: string;
  id: number | string;
  items: PreviewItem[];
}

export interface ItemPreviewPage {
  sections: ItemPreviewSection[];
}


const MenuItemPreview = ({ name, id, image }: { name: string, id: string | number, image: StaticImageData }) => {

  return (
        <Link href={`/menu/${id}`} className="w-36 h-36 flex flex-col justify-start items-center border-2  border-green-600 rounded bg-white-100 min-w-36 p-4" >
          <div className="h-50% w-50%">
            <Image src={image} alt="Ghostly green coffee" width={80} height={80} />
          </div>
          <p className="text-black-100 text-sm font-bold">{name}</p>
        </Link>
    )
};

const PreviewPageSection = ({ name, items }: { name: string, items: PreviewItem[] }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center gap-2">
        <h2 className="text-green-600 text-lg font-bold">{name}</h2>
      </div>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-row gap-3 pt-3 pb-3">
            {items.map((item) => (
              <MenuItemPreview key={item.id} name={item.name} id={item.id} image={item.image} />
            ))}
          </div>
      </div>
    </div>
  )
}

export const menuData: ItemPreviewPage = {
  sections: [
    {
      name: 'Weekly Haunts',
      id: 1,
      items: [
        { name: 'Pumpkin Ghoul Latte', id: 101, image: CoffeeIcon },
        { name: 'Specters Special Cold Brew', id: 102, image: CoffeeIcon },
        { name: 'Midnight Mocha', id: 103, image: CoffeeIcon },
        { name: 'Haunted Harvest Chai', id: 104, image: CoffeeIcon },
      ],
    },
    {
      name: 'Coffins',
      id: 2,
      items: [
        { name: 'Dark Abyss Roast Beans', id: 201, image: CoffeeIcon },
        { name: 'Phantom Grounds Blend', id: 202, image: CoffeeIcon },
        { name: 'Soulful Single Origin', id: 203, image: CoffeeIcon },
        { name: 'Ethereal Espresso', id: 204, image: CoffeeIcon },
      ],
    },
    {
      name: 'Crypt Coolers',
      id: 3,
      items: [
        { name: 'Icy Revenant Frappé', id: 301, image: CoffeeIcon },
        { name: 'Chilling Brew Tonic', id: 302, image: CoffeeIcon },
        { name: 'Frosty Phantom Latte', id: 303, image: CoffeeIcon },
        { name: 'Arctic Apparition Tea', id: 304, image: CoffeeIcon },
      ],
    },
    {
      name: 'Tombstone Treats',
      id: 4,
      items: [
        { name: 'Ectoplasmic Eclairs', id: 401, image: CakeIcon },
        { name: 'Haunted Chocolate Cake', id: 402, image: CakeIcon },
        { name: 'Ghostly Green Macarons', id: 403, image: CakeIcon },
        { name: 'Spectral Cinnamon Roll', id: 404, image: CakeIcon },
      ],
    },
  ],
};


const MenuPage = () => {
  return (
    <div>
      <PageTitle title="Menu" textColor="green-600" />
      {menuData.sections.map((section) => (
        <PreviewPageSection
          key={section.id}
          name={section.name}
          items={section.items}
        />
      ))}
    </div>
  )
}

export default MenuPage