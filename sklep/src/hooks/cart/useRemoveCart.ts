import { useCartContext } from "../context/useCartContext";

const useRemoveCart = () => {
  const { dispatch } = useCartContext();

  const removeCart = (id: string) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return { removeCart };
};

export { useRemoveCart };
