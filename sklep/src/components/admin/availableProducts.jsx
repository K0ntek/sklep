import React from "react";

import data from "../../data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const AvailableProducts =()=>{
    return(
        <div className=" my-[80px] min-h-screen ">
        <h1 className=" font-brunoAce text-5xl ml-8 my-4">PRODUKTY</h1>

       <div className="gallery mx-auto  grid sm:grid-cols-2 lg:grid-cols-3 gap-4" >
               {data.map((product, i)=>{
                   return(
                    <div key={i} id={product.id} className="product w-[100%] relative cursor-pointer bg-[#f1f1f1] pb-2 group">
                           <div className=" overflow-hidden"> <img src={product.img} draggable="false" className=" group-hover:scale-110 transition-all duration-200"/></div>
                       <div className="ml-2">
                               <p className=" font-gruppo font-extrabold text-2xl text-black">{product.title}</p>
                               <p className=" font-brunoAce text-slate-400 text-sm">{product.category}</p>
                               <p className=" font-orbitron">{product.price} pln</p>
                       </div>
                       <div className="flex my-3 space-x-5 ml-5">
                            <button className="border-[1px] border-black px-4 py-2 bg-black text-white font-brunoAce hover:rounded-lg transition-all duration-200">EDYTUJ</button>
                            <button className="border-[1px] border-black px-4 py-2 bg-[#ffffff] font-brunoAce hover:rounded-lg transition-all duration-200"> USUŃ</button>
                       </div>
                       </div>
                   )
               })}
       </div>
   </div>
    )
}

export default AvailableProducts;