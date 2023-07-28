import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("useCartContext must be used inside an CartContextProvider");
  }
  return context;
};

export { useCartContext };
