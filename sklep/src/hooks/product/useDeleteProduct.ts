import { useState } from "react";
import { useProductContext } from "../context/useProductContext";

const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const { dispatch } = useProductContext();

  const deleteProduct = async (id: string) => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/product/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    const json = await response.json();

    setIsLoading(false);

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "DELETE", payload: json });
    }
  };

  return { deleteProduct, isLoading, error };
};

export { useDeleteProduct };
