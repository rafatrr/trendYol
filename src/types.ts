import { email, z } from "zod";
export type ProductType = {
  id: number | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type CartItemsType = CartItemType[];

export const shipingFormSchema = z.object({
  name: z.string().min(1, "name is required!"),
  email: z.email().min(1, "email is required!"),
  phone: z
    .string()
    .min(7, "phone number must be between 7 and 10 digits! ")
    .max(10, "phone number must be between 7 and 10 digits! ").regex(/^\d+$/, "phone number must contain only numbers!"),
    address: z.string().min(1, "address is required!"),
    city: z.string().min(1, "city is required!"),
});

export type ShippingFormInput = z.infer<typeof shipingFormSchema>;




export const paymentFormSchema = z.object({
  cartHolder: z.string().min(1, "cart holder is required!"),
  cartNumber: z.string().min(16, "cart number is required!").max(16, "cart number is required!"),
  expirationDate: z
    .string()

    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/
, "expiration Date must be in MM/YY format!"),
    cvv: z.string().min(3, "cvv is required!").max(3,"cvv is required!") ,
    city: z.string().min(1, "city is required!"),
});

export type paymentFormInput = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType= {
  cart: CartItemType[];
  hasHydrated: boolean;
}

export type cartStoreActionsType= {
  addToCart: (Product:CartItemType)=> void;
  removeFromCart: (Product:CartItemType)=> void;
  clearCart: (Product:CartItemType)=> void;
}