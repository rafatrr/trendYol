import { shipingFormSchema, ShippingFormInput } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ShipingForm = ({setShipingForm}:{setShipingForm:(data:ShippingFormInput)=>void}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInput>({
    resolver: zodResolver(shipingFormSchema),
  });

  const router =useRouter()

   const handelShippingForm:SubmitHandler<ShippingFormInput> = (data) => {
      setShipingForm(data);
      router.push("/cart?step=3", {scroll: false});
       };
  return (
    <div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(handelShippingForm)}>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="name" className="text-xs font-medium text-gray-500" >Name</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="name"
            placeholder="your name"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-red-500 " >{errors.name.message}</p>}
        </div>

         <div className="flex flex-col gap-1 ">
          <label htmlFor="email" className="text-xs font-medium text-gray-500" >Email</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="email"
            id="email"
            placeholder="exampel@gmail.com"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-500 " >{errors.email.message}</p>}
        </div>

         <div className="flex flex-col gap-1 ">
          <label htmlFor="phone" className="text-xs font-medium text-gray-500" >Phone</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="phone"
            placeholder="phone number"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-red-500 " >{errors.phone.message}</p>}
        </div>

         <div className="flex flex-col gap-1 ">
          <label htmlFor="address" className="text-xs font-medium text-gray-500" >Address</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="address"
            placeholder="123  Main st city"
            {...register("address")}
          />
          {errors.address && <p className="text-xs text-red-500 " >{errors.address.message}</p>}
        </div>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="city" className="text-xs font-medium text-gray-500" >City</label>
          <input 
          className="border-b border-gray-200 py-2 outline-none text-sm  "
            type="text"
            id="city"
            placeholder="New York"
            {...register("city")}
          />
          {errors.city && <p className="text-xs text-red-500 " >{errors.city.message}</p>}
        </div>

        <button  type="submit"  className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-sm p-2 cursor-pointer flex items-center justify-center gap-2  ">
            Continu <ArrowRight  className="w-4 h-4 "/>
          </button>

      </form>
    </div>
  )
}

export default ShipingForm;
