"use client"

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'


const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const selectedCategory =  searchParams.get("category")// category === shoes

  const handelChange = (value: string| null ) => { //value === shoes or all
    const params = new URLSearchParams(searchParams) // searchparams here is object of all params  
    params.set('category',value || "all") // i pass the value of category 
    router.push(`${pathName}?${params.toString()}`, { scroll: false }) // pathname is / and params.tostring() is category=shoes 
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4  p-2 rounded-lg  ring-1 ring-gray-200  text-sm mb-6  shadow-lg shadow-amber-200  '>
        {
            categories.map(categure => (
                <div className=  {`rounded-lg  ring-1 ring-gray-100 flex  cursor-pointer py-1 items-center justify-center gap-2
                   ${categure.slug === selectedCategory? "bg-white text-black" : "bg-gray-200 text-gray-500"  }  `}


                 key={categure.name}
                 onClick={() => handelChange(categure.slug)} >

                    {categure.icon}
                    {categure.name}

                </div>
            ))
        }   
    </div>
  )
}




export default Categories
