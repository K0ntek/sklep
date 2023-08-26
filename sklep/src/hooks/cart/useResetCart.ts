import { useCartContext } from "../context/useCartContext";

const useResetCart = () => {
  const { dispatch } = useCartContext();

  const resetCart = () => {
    dispatch({ type: "RESET" });
  };

  return { resetCart };
};

export { useResetCart };
