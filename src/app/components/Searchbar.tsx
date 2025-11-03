import { Search } from 'lucide-react'
import React from 'react'

const Searchbar = () => {
  return (
    <div className=' hidden sm:flex  items-center gap-2 rounded-md shadow shadow-gray-300  '>
      <Search className='w-4 h-4 text-gray-500 '/>
      <p className='flex items-center text-gray-300'>|</p>
      <input type='text' placeholder='Search...' id='search' className='text-sm outline-none  py-1 px-2'/>
    </div>
  )
}

export default Searchbar
