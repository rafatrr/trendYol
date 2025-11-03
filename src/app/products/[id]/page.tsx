"use client";
import ProductIntaraction from "@/app/components/ProductIntaraction";
import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";

//temporary
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;
  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-12 mt-12  ">
      {/* image*/}
      <div className="w-full md:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          fill
          alt="photo"
          className="object-contain rounded-sm"
        />
      </div>
      {/* detiles */}
      <div className="w-full md:w-7/12 flex flex-col gap-4 ">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className=" text-gray-500  ">{product.description}</p>
        <h2 className="text-xl font-semibold">${product.price.toFixed(2)}</h2>
          

          <ProductIntaraction product={product} selectedColor={selectedColor} selectedSize={selectedSize}   />
        {/* card info */}
        <div className="flex items-center gap-2 mt-4 ">
          <Image
            src="/klarna.png"
            alt="kalrna"
            width={50}
            height={25}
            className="rounded-sm"
          />
          <Image
            src="/cards.png"
            alt="kalrna"
            width={50}
            height={25}
            className="rounded-sm"
          />
          <Image
            src="/stripe.png"
            alt="kalrna"
            width={50}
            height={25}
            className="rounded-sm"
          />
        </div>
          <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
