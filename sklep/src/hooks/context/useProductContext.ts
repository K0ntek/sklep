import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error("useProductsContext must be used inside an AuthContextProvider");
  }
  return context;
};

export { useProductContext };
