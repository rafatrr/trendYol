import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 bg-blue-950 text-white rounded-sm p-4 text-sm flex flex-col  justify-center text-center gap-4 md:flex-row md:justify-around ">
      {/* left */}
      <div className="  ">
        <Link className="flex items-center" href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className="w-6 mb-2  h-6 md:w-9 md:h-9 mx-auto "
          />
          <p className="text-md font-medium hidden md:block   tracking-wide   ">TrendYol.</p>
        </Link>
        <p className="">© 2025 TrendYol.</p>
        <p className="">All rights reseved.</p>
      </div>
      {/* right */}
        <div className="">
          <h6 className="font-semibold mb-2">Links</h6>
          <Link href="/"><p className="mb-2 text-xs text-gray-300 hover:text-white">Homepage</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Contact</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Terms of Service</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Privacy Policy</p></Link>


        </div>

         <div className="">
          <h6 className="font-semibold mb-2">Products</h6>
          <Link href="/"><p className="mb-2 text-xs text-gray-300 hover:text-white">All Products</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">New Arrivals</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Best Sellers</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Sale</p></Link>

        </div>

         <div className="">
          <h6 className="font-semibold mb-2">Company</h6>
          <Link href="/"><p className="mb-2 text-xs text-gray-300 hover:text-white">About</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Contact</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Blog</p></Link>
         <Link href="/"> <p className="mb-2 text-xs text-gray-300 hover:text-white">Affilia </p></Link>

        </div>

       
      </div>
    
  );
};

export default Footer;
