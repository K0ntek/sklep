import { useReducer, useEffect, createContext } from "react";

import authReducer from "../reducers/authReducer";
import { User, AuthContextType } from "../interfaces";

const initState: User = {
  email: "string",
  name: "string",
  surname: "string",
  password: "string",
  phone: 1,
  isAdmin: false
};

const AuthContext = createContext<AuthContextType>({ state: {}, dispatch: () => null });

const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  useEffect(() => {
    const user: User | null = JSON.parse(localStorage.getItem("user") ?? "null");

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext state:", state);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
