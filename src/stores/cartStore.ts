import { cartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStroe = create<CartStoreStateType & cartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,



      addToCart: (product) => //{id, selectedcolor, selectedsize}
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedColor === product.selectedColor &&
              p.selectedSize === product.selectedSize
          );
          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }
          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: product.quantity | 1,
                selectedColor: product.selectedColor,
                selectedSize: product.selectedSize,  },
            ],
          };


        }),













      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => !(
            p.id === product.id &&
            p.selectedColor === product.selectedColor &&
            p.selectedSize === product.selectedSize
           ) ),
        })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state)=>{
        if(state){
          state.hasHydrated = true;
        }
      }
    }
  )
);

export default useCartStroe;
