'use client';

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import HomeIcon from "../../../images/icons8-cemetery-green-50px.png";
import MyOrderIcon from "../../../images/icons8-magic-green-50px.png";
import MenuIcon from "../../../images/icons8-coffee-beans-green-50px.png";
import StoresIcon from "../../../images/icons8-location-green-50px.png";
import { usePathname } from "next/navigation";

const FooterNavButton = ({ link, routeName, currentRoute, image, imageAltText}: {link: string, routeName: string; currentRoute: string; image: StaticImageData, imageAltText: string }) => {
  const backgroundColor = currentRoute === link ? 'bg-green-300' : 'bg-white';
  return (
    <Link href={link} className={`flex flex-col items-center justify-center ${backgroundColor} p-1 rounded`}>
      <Image src={image} alt={imageAltText} width={44} height={44} />
      <label className="text-green-600 text-md font-bold">{routeName}</label>
    </Link>
  )
}


const arrayOfNavigation = [
{ 
  link: '/',
  routeName: 'Home',
  image: HomeIcon,
  imageAltText: 'Home Icon',
},
{ 
  link: '/menu',
  routeName: 'Menu',
  image: MenuIcon,
  imageAltText: 'Menu Icon',
},
{ 
  link: '/my-order',
  routeName: 'My Order',
  image: MyOrderIcon,
  imageAltText: 'My Order icon',
},
{ 
  link: '/stores',
  routeName: 'Stores',
  image: StoresIcon,
  imageAltText: 'Store Locator Icon',
},
]

const FooterNavigation = () => {
  const currentPath = usePathname();
  
  return (
    <div className="flex-0-0-auto w-full bg-white flex justify-around items-center p-2 h-24 border-t border-green-600">
      {arrayOfNavigation.map((nav, index) => (
        <FooterNavButton key={index} link={nav.link} routeName={nav.routeName} currentRoute={currentPath} image={nav.image} imageAltText={nav.imageAltText}/>
      ))}
    </div>
  )
}

export default FooterNavigation;