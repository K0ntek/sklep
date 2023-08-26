import { useCartContext } from "../context/useCartContext";

const useChangeCountCart = () => {
  const { dispatch } = useCartContext();

  const changeCountCart = (id: string, value: number) => {
    dispatch({ type: "CHANGE_COUNT", payload: { id, value } });
  };

  return { changeCountCart };
};

export { useChangeCountCart };
