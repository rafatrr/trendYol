"use client";

import { ProductType } from "@/types";
import {
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useCartStroe from "@/stores/cartStore";
import { toast } from "react-toastify";

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
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStroe();

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  const handelTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };
  const handelAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("product added to cart");
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* size */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 ">Size:</span>
        <div className="flex flex-row gap-2">
          {product.sizes.map((size) => (
            <div
              className={` p-[2px]  cursor-pointer ${
                selectedSize === size ? "border-gray-600" : "border-gray-100"
              } `}
              key={size}
            >
              <div
                className={`w-6 h-6 rounded-sm flex justify-center  ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }  `}
                onClick={() => handelTypeChange("size", size)}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 ">Color:</span>
        <div className="flex flex-row gap-2">
          {product.colors.map((color) => (
            <div
              className={` p-[2px] border-2 rounded-full  cursor-pointer box-border   ${
                selectedColor === color ? "borde-black" : "border-white"
              } `}
              key={color}
            >
              <div
                className={`w-6 h-6 rounded-full box-border`}
                style={{ background: color }}
                onClick={() => handelTypeChange("color", color)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 ">Quantity:</span>
        <div className="flex items-center gap-2">
          <button className=" cursor-pointer border-1 border-gray-300 p-1">
            <Plus
              className="w-4 h-4"
              onClick={() => handleQuantityChange("increment")}
            />
          </button>
          <span className="">{quantity}</span>
          <button className=" cursor-pointer border-1 border-gray-300 p-1">
            <Minus
              className="w-4 h-4"
              onClick={() => handleQuantityChange("decrement")}
            />
          </button>
        </div>
      </div>
      {/* Buttons */}
      <button
        onClick={handelAddToCart}
        className="w-[70%] cursor-pointer flex items-center gap-2 bg-gray-800 border-1 border-gray-800 text-white rounded-sm text-center justify-center m-auto py-2 px-6"
      >
        Add to Cart <ShoppingCart className="h-4 w-4" />
      </button>
      <button className="w-[70%] cursor-pointer flex items-center gap-2 rounded-sm border-1 border-gray-800 text-center justify-center m-auto py-2 px-5">
        Pay this Item
        <ShoppingBag className="w-4  h-4" />
      </button>
    </div>
  );
};

export default ProductIntaraction;
