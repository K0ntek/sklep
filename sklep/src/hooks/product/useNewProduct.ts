import { useState } from "react";
import { useProductContext } from "../context/useProductContext";
import { Product } from "../../interfaces";

const useNewProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const { dispatch } = useProductContext();

  const newProduct = async (product: Omit<Product, "id">) => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/product/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    const json = await response.json();

    setIsLoading(false);

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "NEW", payload: json });
    }
  };

  return { newProduct, isLoading, error };
};

export { useNewProduct };
