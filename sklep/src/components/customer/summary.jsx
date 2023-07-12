import React from "react";
import logo from '../../assets/logo.png'
import { useState } from "react";
import {AiOutlineStar, AiFillStar, AiOutlinePlus,AiOutlineMinus, SlClose} from 'react-icons/all'
import ProductsInCart from "./productsInCart";

const Summary=()=>{

    
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
    return(
      <div className=" h-full bg-slate-50 pt-[10%]">
          <div className="w-[90%] mx-auto pb-[60px]">
            <h1 className=" font-orbitron text-3xl">PODSUMOWANIE</h1>
            <div className=" mt-[60px] grid grid-cols-[35%_65%]">
            <div>
                <h1 className=" font-brunoAce text-2xl">PRODUKTY</h1>
                <div className="h-[300px] overflow-y-scroll overflow-x-hidden border-t-[1px] border-b-[1px] border-black my-6">
                <div className=" h-full">
                    <ProductsInCart/>
                </div>
                </div>
                <div>
                    <h1 className=" text-xl">DO ZAPŁATY: 0pln</h1>
                </div>
            </div>
        
            <div className="w-fit mx-auto align-middle">
                <div className=" text-center">
                    <div> <h1 className=" font-brunoAce text-2xl mb-6">DANE OSOBOWE</h1></div>
                <div className="grid grid-cols-2 my-2"><p className=" font-brunoAce text-start">imię: </p><input type="text" className="font-brunoAce border-b-[1px] border-black focus:outline-none"></input></div>
                <div className="grid grid-cols-2 my-2"><p className=" font-brunoAce text-start">nazwisko: </p><input type="text" className="font-brunoAce border-b-[1px] border-black focus:outline-none"></input></div>
                <div className="grid grid-cols-2 my-2"><p className=" font-brunoAce text-start">e-amil: </p><input type="email" className="font-brunoAce border-b-[1px] border-black focus:outline-none"></input></div>
                <div className="grid grid-cols-2 my-2"><p className=" font-brunoAce text-start">numer telefonu: </p><input type="text" className="font-brunoAce border-b-[1px] border-black focus:outline-none"></input></div>
                <div className="grid grid-cols-2 my-2"><p className=" font-brunoAce text-start">adres: </p><input type="text" className="font-brunoAce border-b-[1px] border-black focus:outline-none"></input></div>
                <div className="grid grid-cols-2 my-2"><p className=" font-brunoAce text-start">miasto: </p><input type="text" className="font-brunoAce border-b-[1px] border-black focus:outline-none"></input></div>

                <div className=" mt-7"><button className="bg-[#9c824e] p-3 hover:rounded-xl transition-all duration-200">ZŁÓŻ ZAMÓWIENIE</button></div>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
}

export default Summary;