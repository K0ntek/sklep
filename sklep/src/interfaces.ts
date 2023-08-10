import { Dispatch } from "react";

interface User {
  email: string;
  name: string;
  surname: string;
  password: string;
  phone: string;
  isAdmin: boolean;
}

interface AuthContextType {
  state: User | {};
  dispatch: Dispatch<UserActions>;
}

type UserActions = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

interface Product {
  id: string;
  title: string;
  price: number;
  img: string;
  colors: string[];
}

interface ProductInCart extends Product {
  count: number;
}

interface CartContextType {
  state: ProductInCart[] | [];
  dispatch: Dispatch<CartActions>;
}

type CartActions =
  | { type: "ADD"; payload: ProductInCart }
  | { type: "REMOVE"; payload: string }
  | { type: "CHANGE_COUNT"; payload: { id: string; value: number } }
  | { type: "RESET" };

interface ProductContextType {
  state: Product[];
  dispatch: Dispatch<ProductActions>;
}

type ProductActions =
  | { type: "GET"; payload: Product[] }
  | { type: "NEW"; payload: Product }
  | { type: "DELETE"; payload: string };

export type {
  User,
  AuthContextType,
  UserActions,
  Product,
  ProductInCart,
  CartContextType,
  CartActions,
  ProductContextType,
  ProductActions
};
