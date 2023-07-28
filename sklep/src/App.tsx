import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES

import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Summary from "./pages/Summary";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Admin from "./pages/Admin";

// COMPONENTS

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// HOOKS

import { useGetProduct } from "./hooks/product/useGetProduct";

function App() {
  const { getProduct } = useGetProduct();
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="webContent">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
