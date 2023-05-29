import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Index from "./components/index";
import Product from "./components/product";
import About from "./components/about";

function App() {

  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
