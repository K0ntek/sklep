import { createContext, useReducer } from "react";

import productReducer from "../reducers/productReducer";
import { ProductContextType } from "../interfaces";

const ProductContext = createContext<ProductContextType>({ state: [], dispatch: () => null });

const ProductContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(productReducer, []);

  console.log("ProductsContext state:", state);

  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductContextProvider };
