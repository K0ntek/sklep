import React from "react";
import data from '../../data.json'
import { Link } from "react-router-dom";

const CategoryProducts=()=>{
    return(
        <div className=" w-full min-h-screen py-16">
            <div className="w-[90%] mx-auto">
                <h1 className="text-6xl font-brunoAce text-center py-6">KONSOLE</h1>
                <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 mt">
                    {data.map((product, i)=>{
                        return(
                            <Link to={`product/${product.id}`}>
                            <div className="bg-[#ebebeb] group">
                                <img src={product.img} at="" className="w-full group-hover:scale-110 transition-all duration-200"/>
                                    <div className="bg-[#f7f7f7] py-2">
                                           <div className="ml-3">
                                                <p className=" font-gruppo font-extrabold text-2xl text-black">{product.title}</p>
                                                <p className=" font-brunoAce text-slate-400 text-sm">{product.category}</p>
                                                <p className=" font-orbitron">{product.price} pln</p>
                                           </div>
                                    </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryProducts;