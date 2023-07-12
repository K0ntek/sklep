import React from "react";
import { useState } from "react";
import {AiOutlineStar, AiFillStar, AiOutlinePlus,AiOutlineMinus, SlClose} from 'react-icons/all'

const ProductsInCart =()=>{
    const productsInCart =[
        {
            name: 'konsola Evia',
            productPrice: 2100,
            counter: 2,
            image:'https://barilo.com.pl/meble/data/poster/konsola-evia.webp',
            id: 1
        },
        {
            name: 'konsola Malveta',
            productPrice: 2100,
            counter: 2,
            image:'https://barilo.com.pl/meble/data/poster/konsola-malveta.webp',
            id: 2
        },
        {
            name: 'konsola Set Of Lanka',
            productPrice: 2100,
            counter: 2,
            image:'https://barilo.com.pl/meble/data/poster/konsola-set-of-lanka.webp',
            id: 3
        },
        {
            name: 'konsola Duo',
            productPrice: 2100,
            counter: 2,
            image:'https://barilo.com.pl/meble/data/poster/konsola-evia-duo.webp',
            id: 4
        },
        {
            name: 'konsola Double',
            productPrice: 2100,
            counter: 2,
            image:'https://barilo.com.pl/meble/data/poster/konsola-double.webp',
            id: 5
        },
    ]

    const [counter, setCounter] = useState(1);

    const increase = () => {
        setCounter((prev) => prev  + 1);
        if(counter >=20){
          setCounter(20);
        }
      };
  
      const decrease = () => {
        setCounter((prev) => prev - 1);
        if(counter <=1){
          setCounter(1);
        }
      };
      const price = document.querySelectorAll("#price")
      const finalPrice = price.forEach(element => {
        element+=element;
      });

    return(
        <div>
            <ul>
                {productsInCart.map((product)=>{
                return(
                    <li className="relative py-3 ml-2 border-b-[1px] border-black" id={product.id}>
                    <div className="text-xl">
                        <div className="absolute top-1 right-1"> <SlClose className="hover:text-[#c93] transition-all duration-100"/></div>
                    </div>
                <div className="flex ml-3 w-full">
                    <img src={product.image} alt="product" className="h-[50px]"/>
                    <div className="ml-3">
                        <h1 className=" font-brunoAce text-xl">{product.name}</h1>
                        <div className="flex space-x-2">
                            
                        <div className="flex space-x-2 border-[1px] w-fit border-black rounded-full">
                                <button className="px-1 hover:bg-gray-100 rounded-full bg-slate-50" onClick={decrease}><AiOutlineMinus/></button>
                                <div className=" min-w-[20px] text-center">{counter}</div>
                                <button className="px-1 hover:bg-gray-100 rounded-full bg-slate-50" onClick={increase}><AiOutlinePlus/></button>
                            </div>
                            <div><p className=" text-xl font-orbitron relative top-[50%] translate-y-[-50%]" id="price">{product.productPrice * counter} pln</p></div>
                            </div>
                    </div>
                </div>
                </li>
                )
            })}
                                    
            </ul>
        </div>
    )
}

export default ProductsInCart;