"use client";

import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import useCartStroe from "@/stores/cartStore";

const ShoppingCartIcone = () => {
  const { cart, hasHydrated } = useCartStroe();
  if (!hasHydrated) {
    return null;
  } else {
    return (
      <div>
        <Link href="/cart" className="flex items-center  relative">
          <ShoppingCart className="w-4 h-4 text-gray-600  " />
          <span className=" absolute bg-amber-500 -top-3 -right-2 rounded-full  w-4 h-4 items-center justify-center flex text-xs font-medium">
            {cart.reduce((acc, cuu) => acc + cuu.quantity, 0)}
          </span>
        </Link>
      </div>
    );
  }
};

export default ShoppingCartIcone;
