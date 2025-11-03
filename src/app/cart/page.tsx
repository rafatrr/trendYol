"use client";
import { CartItemsType, ShippingFormInput } from "@/types";
import { ArrowRight,Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ShipingForm from "../components/ShipingForm";
import PaymentForm from "../components/PaymentForm";
import Image from "next/image";
import useCartStroe from "@/stores/cartStore";
const steps = [
  {
    id: 1,
    name: "Shopping Cart",
  },
  {
    id: 2,
    name: "Shipping Address",
  },
  {
    id: 3,
    name: "Payment Method",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shipingForm, setShipingForm] =useState<ShippingFormInput>()

  const activeStep = parseInt(searchParams.get("step") || "1");

  const { cart, removeFromCart} = useCartStroe();

    
  

  return (
    <div className=" flex flex-col gap-8 items-center justify-center mt-12">
      {/* title */}
      <h1 className="text-2xl font-medium ">Your Shopping Cart</h1>
      {/* steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16  ">


        {steps.map((step) => (
          <div className={` flex flex-col justify-center text-center  ${
              step.id === activeStep ? "border-b-3 border-black": "border-b-3 border-gray-200"} `}  key={step.id} >
            <div
              className={`w-8 h-8 rounded-full  text-sm text-white p-1 m-auto ${
                step.id === activeStep ? "bg-black" : "bg-gray-300"}`}>
              {step.id}
            </div>
            <p>{step.name}</p>
          </div>
        ))}
      </div>

      {/*steps & details*/}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* staps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-sm flex flex-col gap-8">
          {activeStep === 1 ?  cart.map(item => (
            // single cart item
            <div className="flex   items-center justify-between" key={item.id+item.selectedSize+item.selectedColor}>
              {/* image and details */}
              <div className="flex  gap-8 ">
                {/* /image */}
                <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden ">
                  <Image src={item.images[item.selectedColor]} fill alt={item.name} className="object-contain"/>
                </div>
              {/* ditails */}
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1 ">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-gray-500  ">quantity: {item.quantity}</p>
                  <p className="text-xs text-gray-500">selectedSize: {item.selectedSize}</p>
                  <p style={{color: item.selectedColor}} className="text-xs text-gray-500" >selectedColor: {item.selectedColor}</p>


                </div>
                <p className="font-medium">${item.price.toFixed(2)}</p>

              </div>

              </div>
              {/* delete button  */}
                <button onClick={ () => removeFromCart(item)} className="w-8 h-8 rounded-full bg-red-100 text-red-400 flex items-center justify-center cursor-pointer" >
                   <Trash2 className="w-4 h-4" />
                    </button>              
            </div>

          )) :
           activeStep === 2 ? <ShipingForm setShipingForm={setShipingForm}/> :
            activeStep === 3 && shipingForm ? <PaymentForm /> :
             <p className="text-sm text-gray-500"> pleas fill the shipping form. </p>   }
        </div>
        {/* details */}
        <div className="w-full lg:w-5/12 border-1 shadow-lg h-max  border-gray-100 p-8 rounded-sm flex flex-col gap-8">
          <h2 className="font-semibold ">Cart Details</h2>
          <div className="flex flex-col gap-4 ">
            <div className=" text-sm flex justify-between">
              <p className="text-gray-500">Subtotal:</p>
              <p className=" font-medium ">
                $
                {Number(cart
                  .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                  .toFixed(2))}
              </p>
            </div>
            <div className=" text-sm flex justify-between">
              <p className="text-gray-500">Discount(10%)</p>
              <p className=" font-medium ">$ 10</p>
            </div>

            <div className=" text-sm flex justify-between">
              <p className="text-gray-500">Shopping fee:</p>
              <p className=" font-medium "> $ 10 </p>
            </div>
            <hr className="border-gray-200" />
            <div className=" text-sm flex justify-between">
              <p className="text-gray-900 font-semibold">Total:</p>
              <p className=" font-medium "> $
                {Number(cart
                  .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                  .toFixed(2))}
              </p>
            </div>
          </div>
          { activeStep === 1 &&
            <button onClick={() =>router.push("/cart?step=2", {scroll:false})}  className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-sm p-2 cursor-pointer flex items-center justify-center gap-2  ">
            Continu <ArrowRight className="w-4 h-4 "/>
          </button>}
        </div>
      </div>
    </div>
  );
};
export default CartPage;
