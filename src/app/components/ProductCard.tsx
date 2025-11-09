"use client";

import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useCartStroe from "@/stores/cartStore";
import { toast } from "react-toastify";


const ProductCard = ({ product }: { product: ProductType  }) => {
  const [productTypes, setProductTypes] = useState({
    size:product.sizes[0],
    color:product.colors[0],
  })

  const handelProductType=({type,value}:{type:"size"|"color",value:string})=>{
     setProductTypes((prev) => ({
      ...prev,
      [type]: value,
     }))
  };
  const {addToCart} = useCartStroe();

  const handelAddtoCart=()=>{
    addToCart({
      ...product,
      quantity:1,
      selectedSize:productTypes.size,
      selectedColor:productTypes.color,
    })
    toast.success("product added to cart successfully!",{
      position:"bottom-right",
      autoClose:3000,
    })
  }
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        {/* image */}
        <div className=" relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            fill
            alt={product.name}
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* product details */}
      <div className="flex flex-col gap-4 p-4 ">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500 ">{product.shortDescription}</p>
        {/* product types */}
        <div className="flex gap-4 items-center text-xs">
          {/* size */}
          <div className="flex flex-col gap-1 ">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-4 py-1 "
              onChange={e=>handelProductType({type:"size",value:e.target.value})  }
            >
              {product.sizes.map((size) => (
                <option value={size} key={size} className="p-2">
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* color */}
          <div className="flex flex-col gap-1">
            <span className=" text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div className={`cursor-pointer border-1 ${productTypes.color === color ? "border-gray-600" : "border-gray-200"} rounded-full p-[1.2px] `} key={color}
                onClick={()=>handelProductType({type:"color",value:color})}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* price and add to cart button  */}
        <div className="flex items-center justify-between">
          <p className="font-medium"> ${product.price.toFixed(2)}</p>
          <button onClick={handelAddtoCart} className=" flex items-center gap-1 ring-1  ring-gray-200 py-1 px-2 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
            
            <ShoppingCart className="w-4 h-4 "/>
            Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
