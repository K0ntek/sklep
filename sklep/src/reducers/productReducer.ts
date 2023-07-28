import { Product, ProductActions } from "../interfaces";

const productReducer = (state: Product[] | [], action: ProductActions) => {
  switch (action.type) {
    case "GET":
      return action.payload;
    case "NEW":
      return [...state, action.payload];
    case "DELETE":
      return [...state.filter((prod) => prod.id !== action.payload)];
    default:
      return state;
  }
};

export default productReducer;
