import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./index/index";
import Product from "./product";
import Products from "./customer/products";
import CategoryProducts from "./categoryProducts";
import About from "./about";
import Register from "./register";
import Contact from "./contact";
import Summary from "./customer/summary";

const Customer =()=>{
    return(
       <>
       {/* <BrowserRouter> */}
       <Navbar/>
        <Switch>
            <Route path="/" element={<Index/>}/>
            <Route path="/products/product/:id" element={<Product/>}/>
            <Route path="/prod/product/:id" element={<Product/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/prod" element ={<CategoryProducts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/summary" element={<Summary/>}/>
        </Switch>
       {/* </BrowserRouter> */}
        </>
    )
}

export default Customer;