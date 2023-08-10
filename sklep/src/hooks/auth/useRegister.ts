import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { User } from "../../interfaces";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const { dispatch } = useAuthContext();

  const register = async (user: User) => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    const json = await response.json();

    setIsLoading(false);

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { register, isLoading, error };
};

export { useRegister };
