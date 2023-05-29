import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Index from "./components/index";
import Product from "./components/product";
import About from "./components/about";
import Admin from "./components/admin/admin";
import Products from "./components/products";

function App() {

  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>

      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
