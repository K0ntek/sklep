import { useState } from "react";
import { useProductContext } from "../context/useProductContext";

const useGetProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const { dispatch } = useProductContext();

  const getProduct = async () => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/product/get`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const json = await response.json();

    setIsLoading(false);

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "GET", payload: json });
    }
  };

  return { getProduct, isLoading, error };
};

export { useGetProduct };
