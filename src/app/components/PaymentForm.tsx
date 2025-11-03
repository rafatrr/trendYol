import { paymentFormInput, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<paymentFormInput>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter()

   const handelPaymentForm:SubmitHandler<paymentFormInput> = (data) => {
   
       };
  return (
    <div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(handelPaymentForm)}>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="cartHolder" className="text-xs font-medium text-gray-500" >Name on cart</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="=cartHolder"
            placeholder="rafat ahmed"
            {...register("cartHolder")}
          />
          {errors.cartHolder && <p className="text-xs text-red-500 " >{errors.cartHolder.message}</p>}
        </div>

         <div className="flex flex-col gap-1 ">
          <label htmlFor="cartNumber" className="text-xs font-medium text-gray-500" >cart Number</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="cartNumber"
            placeholder="1234 5678 9012 234"
            {...register("cartNumber")}
          />
          {errors.cartNumber && <p className="text-xs text-red-500 " >{errors.cartNumber.message}</p>}
        </div>

         <div className="flex flex-col gap-1 ">
          <label htmlFor="exprationDeate" className="text-xs font-medium text-gray-500" >Expration Date</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="exprationDeate"
            placeholder="MM/YY"
            {...register("expirationDate")}
          />
          {errors.expirationDate && <p className="text-xs text-red-500 " >{errors.expirationDate.message}</p>}
        </div>

         <div className="flex flex-col gap-1 ">
          <label htmlFor="cvv" className="text-xs font-medium text-gray-500" >cvv</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="cvv"
            placeholder="123"
            {...register("cvv")}
          />
          {errors.cvv && <p className="text-xs text-red-500 " >{errors.cvv.message}</p>}
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" alt="kalrna" width={50} height={25} className="rounded-sm" />
          <Image src="/cards.png" alt="kalrna" width={50} height={25} className="rounded-sm" />
          <Image src="/stripe.png" alt="kalrna" width={50} height={25} className="rounded-sm" />


        </div>
        <button  type="submit"  className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-sm p-2 cursor-pointer flex items-center justify-center gap-2  ">
            Checkout <ShoppingCart  className="w-4 h-4 "/>
          </button>

      </form>
    </div>
  )
}

export default PaymentForm;
