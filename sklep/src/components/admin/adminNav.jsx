import React from "react";
import {BsBasket3, AiOutlineHome, ImStatsBars} from 'react-icons/all'
import logo from '../../assets/logo.png'

const SideNav =()=>{

const sideNav = [
    {
        icon: <AiOutlineHome/>,
        title: 'strona główna'
    },
    {
        icon: <BsBasket3/>,
        title: 'produkty'
    },
    {
        icon: <ImStatsBars/>,
        title: 'dane'
    }
]

    return(
        <div className="fiex top-0 left-0 h-screen w-[70px] bg-black group hover:w-[220px] transition-all duration-200">
           <div className="fixed top-6 space-y-10 ml-2">
           <img src={logo} alt='' className="w-[50px] mx-auto justify-center"/>

                <ul className="text-[silver] space-y-2">
                {sideNav.map((element, i)=>{
                    return(
                            <div className=" flex space-x-1 transition-all duration-200 relative hover:bg-[#eeeeee]/20 rounded-s-full cursor-pointer">
                                <li className=" text-[30px] justify-center p-2 bg-[#eeeeee]/20 rounded-full">{element.icon}</li>
                                <li className="w-full px-3 text-xl font-gruppo mt-1 hidden group-hover:block">{element.title}</li>
                            </div>
                    )
                })}
                </ul>
           </div>

        </div>
    )
}

export default SideNav;