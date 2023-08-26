import { Product } from "../../interfaces";
import { useCartContext } from "../context/useCartContext";

const useAddCart = () => {
  const { dispatch } = useCartContext();

  const addProductCart = (product: Product) => {
    dispatch({ type: "ADD", payload: { ...product, count: 1 } });
  };

  return { addProductCart };
};

export { useAddCart };
