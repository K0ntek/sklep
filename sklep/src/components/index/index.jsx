import React from "react";
import Header from "./header";
import CategoryNav from "./categoryNav.jsx";
import Products from "../products";

const Index =()=>{
    return(
        <div>
            <Header/>
            <CategoryNav/>
            {/* <Products/> */}
        </div>
    )
}

export default Index;