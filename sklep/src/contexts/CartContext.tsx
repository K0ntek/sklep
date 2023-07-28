import { useReducer, createContext, useEffect } from "react";

import cartReducer from "../reducers/cartReducer";
import { CartContextType } from "../interfaces";

import initState from "../data.json";

const CartContext = createContext<CartContextType>({ state: [], dispatch: () => null });

const CartContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  useEffect(() => {
    // const products: ProductInCart[] | null = JSON.parse(localStorage.getItem("product") ?? "null");
  }, []);

  console.log("BasketContext state:", state);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
