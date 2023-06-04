import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Index from "./components/index";
import Product from "./components/product";
import About from "./components/about";
import Admin from "./components/admin/admin";
import Products from "./components/products";
import Register from "./components/register";
import Contact from "./components/contact";
import CategoryProducts from "./components/categoryProducts";

function App() {

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
      </Routes>
     </div>

      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
