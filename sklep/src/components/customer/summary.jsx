import React from "react";
import logo from '../../assets/logo.png'

const Summary=()=>{
    return(
        <div className=" w-[90%] mx-auto min-h-screen my-[60px] grid grid-cols-[35%_65%]">
            <div>
                <h1 className=" font-brunoAce text-2xl">PRODUKTY</h1>
                <div className=" h-1/2 overflow-y-scroll overflow-x-hidden">
                    <ul>
                    <li className="relative py-3 ml-2">
                    <div className="text-xl">
                        </div>
                            <div className="flex ml-3 w-full">
                            <img src={logo} alt="product" className="h-[50px]"/>
                                <div className="ml-3">
                                    <h1 className=" font-brunoAce text-xl">Lorem, ipsum dolor.</h1>
                            <div className="flex space-x-2">
                                <div><p className=" text-xl font-orbitron relative top-[50%] translate-y-[-50%]">0 pln</p></div>
                            </div>
                        </div>
                    </div>
                    </li>
                    </ul>
                </div>
            </div>
        
            <div className="w-fit">
                <div className="grid grid-cols-2"><p className=" font-brunoAce text-start">imię: </p><input type="text" className="font-brunoAce border-b-[1px] border-black"></input></div>
                <div className="grid grid-cols-2"><p className=" font-brunoAce text-start">iazwisko: </p><input type="text" className="font-brunoAce border-b-[1px] border-black"></input></div>
                <div className="grid grid-cols-2"><p className=" font-brunoAce text-start">e-amil: </p><input type="email" className="font-brunoAce border-b-[1px] border-black"></input></div>
                <div className="grid grid-cols-2"><p className=" font-brunoAce text-start">numer telefonu: </p><input type="text" className="font-brunoAce border-b-[1px] border-black"></input></div>
                <div className="grid grid-cols-2"><p className=" font-brunoAce text-start">adres: </p><input type="text" className="font-brunoAce border-b-[1px] border-black"></input></div>
                <div className="grid grid-cols-2"><p className=" font-brunoAce text-start">miasto: </p><input type="text" className="font-brunoAce border-b-[1px] border-black"></input></div>
            </div>
        </div>
    )
}

export default Summary;