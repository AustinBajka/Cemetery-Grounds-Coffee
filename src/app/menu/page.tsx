'use client'
import PageTitle from '@/components/Copy/PageTitle'
import CoffeeIcon from '@/images/icons8-cafe-black-50px.png'
import Image from 'next/image'
import Link from 'next/link'


const MenuPage = () => {
  return (
    <div>
        <PageTitle title="Menu" textColor='green-600'/>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-green-600 text-lg font-bold">Weekly Haunts</h2>
            <p className="text-green-600 italic text-xs">(Rotating Specials)</p>
          </div>
          <div className="overflow-x-scroll flex flex-row gap-2">
            <Link href="/menu/Coffin-Closer" className="w-40 h-40 flex flex-col justify-center items-center border-solid border-green-600 rounded bg-white" onClick={() => { console.log('menu-item-clicked')}}>
              <p className="text-brown-800 text-md font-bold">Ghostly Green Coffee</p>
              <p className="text-green-600 italic text-xs">A hauntingly good brew</p>
              <Image src={CoffeeIcon} alt="Ghostly green coffee" width={80} height={80} />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default MenuPage