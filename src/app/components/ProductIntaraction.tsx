"use client";

import { ProductType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductIntaraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) => {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const handelTypeChange= (type:string, value:string)=>{
        const params = new URLSearchParams(searchParams.toString())
        params.set(type,value);
        router.push(`${pathName}?${params.toString()}`,{ scroll: false})
    }
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* size */}
      <div className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 ">Size:</span>
        <div className="flex flex-row gap-2">
          {product.sizes.map((size) => (
            <div className={` p-[2px]  cursor-pointer ${selectedSize === size ? "border-gray-600" : "border-gray-100"} `} key={size}>
              
              <div className={`w-6 h-6 rounded-sm flex justify-center  ${selectedSize === size ? "bg-black text-white":"bg-white text-black" }  `}
              onClick={()=>handelTypeChange("size",size) }
              >{size.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color:</span>
        <div className="">
            {product.colors.map( color => (
                <div  className="" key={product.id} >''</div>

            ))}
        </div>
      </div>

      {/* quantity */}
      <div className="flex flex-col gap-2 text-sm"></div>
    </div>
  );
};

export default ProductIntaraction;
