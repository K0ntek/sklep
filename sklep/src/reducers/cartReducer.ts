import { ProductInCart, CartActions } from "../interfaces";

const cartReducer = (state: ProductInCart[] | [], action: CartActions) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return [...state.filter((prod) => prod.id !== action.payload)];
    case "CHANGE_COUNT":
      return [
        ...state.map((prod) =>
          prod.id === action.payload.id
            ? (prod.count > 1 || action.payload.value > 0) &&
              (prod.count < 20 || action.payload.value < 0)
              ? { ...prod, count: prod.count + action.payload.value }
              : prod
            : prod
        )
      ];
    case "RESET":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
