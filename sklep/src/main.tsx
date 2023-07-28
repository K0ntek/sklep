import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { CartContextProvider } from "./contexts/CartContext";
import { ProductContextProvider } from "./contexts/ProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductContextProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </ProductContextProvider>
);
