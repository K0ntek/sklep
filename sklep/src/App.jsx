import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/customer/footer'
import Navbar from './components/customer/navbar'
import Index from "./components/customer/index/index";
import Product from "./components/customer/product";
import About from "./components/customer/about";
import Admin from "./components/admin/admin";
import Products from "./components/customer/products";
import Register from "./components/customer/register";
import Contact from "./components/customer/contact";
import CategoryProducts from "./components/customer/categoryProducts";
import AvailableProducts from "./components/admin/availableProducts";
import Summary from "./components/customer/summary";

import { useState } from "react";

function App() {

  const [admin, setAdmin] = useState(true)
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
     <div className="webContent">
      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/products/product/:id" element={<Product/>}/>
          <Route path="/prod/product/:id" element={<Product/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/prod" element ={<CategoryProducts/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/available" element={<AvailableProducts/>}/>
          <Route path="/summary" element={<Summary/>}/>
      </Routes>
     </div>

      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
