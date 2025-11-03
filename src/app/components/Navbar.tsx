import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Searchbar from './Searchbar'
import { Bell, Home, ShoppingCart } from 'lucide-react'
import ShoppingCartIcone from './ShoppingCartIcone'
const Navbar = () => {
  return ( 
    <div className='flex w-full justify-between itens-center border-b border-gray-200  pb-4'>
      {/* left */}
      <nav className="">
        <Link className='flex items-center' href="/">
         <Image src="/logo.png" alt='logo'  width={36} height={36} className='w-6  h-6 md:w-9 md:h-9  ' />
         <p className='text-md font-medium  tracking-wide hidden md:block  '>TrendYol.</p>
        </Link>

      </nav>
      {/* right */}
      <div className="flex items-center gap-6">
        <Searchbar/>
        <Link href="/">
        <Home className='w-4 h-4 text-gray-600'/>
        </Link>
        <Bell className='w-4 h-4 text-gray-600'/>
         <ShoppingCartIcone/>

        <Link href="/login">Sign in</Link>
        
      </div>
    </div>
  )
}

export default Navbar;