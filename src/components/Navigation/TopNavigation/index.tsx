
'use client';

import { useState } from 'react';
import  MenuIcon from '../../../images/icons8-menu-white-50px.png';
import Logo from '../../../images/CemeteryGrounds_Icon_White_44px.png';
import Image from 'next/image';
import Link from 'next/link';
const TopNavigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
        };

  return (
        <div className="bg-green-600 flex flex-row width-full justify-between items-center p-4 sticky top-0 z-50">
            <div className='flex flex-row gap-2 items-center'>
                <Image src={Logo} alt="Cemetery Grounds Logo" width={44} height={44} />
                <Link href="/" className="text-white-200 text-xl">Cemetery Grounds</Link>
            </div>
            <button onClick={handleMenuOpen}>
                <Image src={MenuIcon} alt="Cemetery Grounds Logo" width={44} height={44} />
            </button>
        </div>
  )
}

export default TopNavigation;