import React from "react";
import { useState, useEffect } from "react";
import Products from "./products";

import {AiOutlineStar, AiFillStar, AiOutlinePlus,AiOutlineMinus} from 'react-icons/all'

const Product =()=>{

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

        let stars = document.querySelectorAll('.star')
        stars.forEach((star, starIndex1)=>{
            star.addEventListener('click',()=>{
                stars.forEach((star, starIndex2)=>{
                    starIndex1 >=starIndex2 ? star.classList.add('activeStars') : star.classList.remove('activeStars')
                })
            })
        })


    return(
        <div className="w-full min-h-screen py-[60px]">

            <div className="h-fit grid lg:grid-cols-2 mt-10 space-y-5 lg:space-y-0">
                    <div className="relative top-[50%] translate-y-[-50%]">
                        <div className="w-[90%] mx-auto">
                           <div className="relative">
                                <div className="absolute top-[-10px] left-[-10px] bg-[#9c824e] w-1/2 h-1/2 z-[-1]"></div>
                                <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" className=" aspect-video z-50"/>
                                <div className="absolute bottom-[-10px] right-[-10px] bg-black w-1/2 h-1/2 z-[-1]"></div>
                           </div>
                        </div>
                    </div>

                    <div className=" w-[90%] mx-auto">
                        <div className="space-y-3 relative top-[50%] translate-y-[-50%]">
                            <h1 className="text-5xl font-gruppo font-extrabold">NAZWA</h1>
                               <p className=" font-orbitron text-2xl">210.99 pln</p>

                                <div>
                                    <p className=" font-gruppo font-bold">LICZBA SZTUK:</p>
                                        <div className="flex space-x-2 border-[1px] w-fit border-black">
                                            <button className=" px-6 py-2 text-lg hover:bg-gray-100" onClick={decrease}><AiOutlineMinus/></button>
                                            <div className="py-2 text-lg min-w-[30px] text-center">{counter}</div>
                                            <button className=" px-6 py-2 text-lg hover:bg-gray-100" onClick={increase}><AiOutlinePlus/></button>
                                        </div>
                                </div>

                                <div className="flex text-2xl">
                                    <AiFillStar className="star text-gray-300 transition-all duration-300"/>
                                      <AiFillStar className="star text-gray-300 transition-all duration-300"/>
                                       <AiFillStar className="star text-gray-300 transition-all duration-300"/>
                                        <AiFillStar className="star text-gray-300 transition-all duration-300"/>
                                         <AiFillStar className="star text-gray-300 transition-all duration-300"/>
                                </div>


                                <div className="flex space-x-4">
                                    <button className="text-white bg-[#9c824e] px-4 py-2 hover:rounded-xl transition-all duration-400">DO KOSZYKA</button>
                                    <button className="text-white bg-black px-4 py-2 hover:rounded-xl transition-all duration-400">KUP TERAZ</button>
                                </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Product;