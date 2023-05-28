import React from "react";
import { useState, useEffect } from "react";
import {BiShoppingBag, IoPersonCircleSharp, GrClose, CgCloseR} from 'react-icons/all'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

const Navbar =()=>{
    const interior =[
        {
           link: '',
           title:  'SZAFKI NOCNE'
        },
        {
            link: '',
            title:  'SZAFKI RTV'
        },
        {
            link: '',
            title:  'KRZESŁA'
        },
        {
            link: '',
            title:  'STOŁY'
        },
        {
            link: '',
            title:  'ŁÓŻKA'
        }
    ]

    const wallpapers =[
        {
           link: '',
           title:  'TAPETY'
        },
        {
            link: '',
            title:  'NAKLEJKI ŚCIENNE'
        },

    ]

    const garden =[
        {
           link: '',
           title:  'MEBLE'
        },
        {
            link: '',
            title:  'HAMAKI'
        },
    ]

    const [activeNavbar, setNavbar] = useState('navbar')
    const mobileToggleNavbar = () => {
        activeNavbar === 'navbar' ? setNavbar('navbar activeNavbar') : setNavbar('navbar');
    }

    const [activeIcon, setIcon] = useState('icon')
    const icon =()=>{
        activeIcon === 'icon' ? setIcon('icon activeIcon') : setIcon('icon');


    }

    const toggleNavbar =()=>{
            gsap.to('.extendedNavbar', {top:'60px'})
    }

    const hideNavbar =()=>{
        gsap.to('.extendedNavbar', {top:'-100%'})
    }

    const toggleBasket =()=>{
        gsap.to('.mobileNav', {opacity:0, display:'none'})
        gsap.to('.basket', {right:0})
    }

    const hideBasket =()=>{
        gsap.to('.mobileNav', {opacity:1, display: 'flex'})
        gsap.to('.basket', {right:'-100%'})
    }

    return(
       <>
        <div className="flex z-[80] fixed top-[1%] right-[1%] space-x-[5px] mr-4 lg:hidden mobileNav">
        <div className="flex text-[35px] ml-[30px] space-x-[5px]">
                    <BiShoppingBag className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200" onClick={toggleBasket}/>
                    <IoPersonCircleSharp className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200"/>
            </div>
            <div className="w-[23px] p-[5px] mt-[-1px]" onClick={mobileToggleNavbar}>
                <div className={activeIcon} onClick={icon}>
                    <div className="line item-1 my-[6px]"></div>
                    <div className="line item-2 my-[6px]"></div>
                    <div className="line item-3 my-[6px]"></div>
                </div>
            </div>
        </div>

         <div className="w-full h-[60px] fixed top-0  text-black bg-white z-[70]">
            <div className="absolute left-[2%] mt-[5px] cursor-pointer z-50">
            <Link to={'/'}><img src={logo} alt="logo.png" className=" h-[45px]"/></Link>
                    </div>
                                <div className={`flex bg-white mx-auto align-middle relative top-[-400%] left-0 w-full
                                                lg:top-[10px] lg:justify-center lg:left-[50%] lg:translate-x-[-50%] lg:space-x-[25px] ${activeNavbar}`}>

                                <ul className=" lg:flex lg:space-x-[20px] relative mt-[70px] lg:mt-[5px] ml-4 lg:ml-0 space-y-2 lg:space-y-0">


                                    <div className= 'group text-[20px] lg:text-[14px]'>
                                        <li className="px-[2px]"><Link to={'/'} className="font-gruppo font-bold py-1.5">STRONA GŁÓWNA</Link></li>
                                        <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
                                    </div> 

                                    <div className= 'group text-[20px] lg:text-[14px]' onMouseEnter={toggleNavbar} onClick={toggleNavbar}>
                                        <li className="px-[2px] font-gruppo font-bold cursor-pointer">PRODUKTY</li>
                                        <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
                                    </div> 

                                    <div className= 'group text-[20px] lg:text-[14px]'>
                                        <li className="px-[2px] font-gruppo font-bold"><Link to={'/about'} className="font-gruppo font-bold py-1.5">O NAS</Link></li>
                                        <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
                                    </div>

                                    <div className= 'group text-[20px] lg:text-[14px]'>
                                        <li className="px-[2px] font-gruppo font-bold"><Link to={''} className="font-gruppo font-bold py-1.5">KONTAKT</Link></li>
                                        <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
                                    </div>
                                </ul>
                    <div className="text-[30px] ml-[30px] space-x-[5px] hidden lg:flex">
                            <BiShoppingBag className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200" onClick={toggleBasket}/>
                            <IoPersonCircleSharp className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200"/>
                    </div>
                    </div>

          {/* -------------------------------------------NAVBAR2----------------------------------------------------------------- */}
          
                <div className="relative">
                            <div className="z-[99] extendedNavbar w-full h-auto py-5 bg-white text-black grid md:grid-cols-3 fixed top-[-100%] left-0 border-t-2 border-black">
                            <GrClose className="z-[99] absolute right-[20px] top-1 text-[30px] cursor-pointer hover:border-[2px] border-black rounded-full p-1" onClick={hideNavbar}/>
                        <div className=" mx-5 mt-5 lg:mt-0">
                            {/* <img src="https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg" /> */}
                            <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" className=" aspect-video"/>
                        </div>

                        <div className="grid grid-cols-3 sm:space-x-5 mx-5 mt-6">
                            <div className="flex space-x-4">
                                <div className="mb-5">
                                    <h1 className=" mb-6 font-bold font-arial">WNĘTRZE</h1>
                                     <ul>
                                        {interior.map((element, i)=>{
                                            return(
                                                <li key={i}><a href={element.link} className="hover:text-[#c93] space-y-2">{element.title}</a></li>
                                            )
                                        })}
                                    </ul> 
                                </div>

                                <div className=" w-[2px] h-[150px] bg-black relative top-[20px]"></div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="mb-5">
                                <h1 className="mb-6 font-bold font-arial">OGRÓD</h1>
                                <ul>
                                    {garden.map((element, i)=>{
                                        return(
                                            <li key={i}><a href={element.link} className="hover:text-[#c93]">{element.title}</a></li>
                                        )
                                    })}
                                </ul>  
                                </div>

                                <div className=" w-[2px] h-[150px] bg-black relative top-[20px] left-[25%]"></div>
                            </div> 

                             <div className="mb-5">
                                <h1 className="mb-6 font-bold font-arial">TAPETY</h1>
                                 <ul>
                                    {wallpapers.map((element, i)=>{
                                        return(
                                            <li key={i}><a href={element.link} className="hover:text-[#c93]">{element.title}</a></li>
                                        )
                                    })}
                                </ul>
                            </div> 
                        </div>
                        
                    </div>
                </div>

            {/* ------------------------------------------------------BASKET------------------------------------------------- */}

            <div className="relative">
                    <div className="basket fixed top-0 right-[-100%] w-[70%] 2xl:w-[30%] h-screen bg-[#f5f5f5] z-[90]">
                        <GrClose className="z-[99] absolute right-5 top-2 text-[30px] cursor-pointer hover:border-[2px] border-black rounded-full p-1" onClick={hideBasket}/>
                        <div>
                            <div className="w-fit mx-auto my-5">
                                <h1 className=" text-center font-orbitron text-3xl">TWOJ KOSZYK</h1>
                                <div className=" w-[50%] h-1 bg-black mx-auto rounded-full"></div>
                            </div>
                            <div className="w-fit ml-5 my-5">
                                <h1 className=" text-xl">Wartość koszyka: <span className=" font-orbitron"> 0 pln</span></h1>
                            </div>
                            <div>
                                <ul>
                                    <li className="w-full border-b-[1px] py-3 border-black">
                                        <div className="flex ml-3">
                                            <img src={logo} alt="product" className="h-[50px]"/>
                                            <div className="ml-3">
                                                <h1 className="font-gruppo font-extrabold text-3xl relative top-[50%] translate-y-[-50%]">Lorem, ipsum dolor.</h1>
                                            </div>
                                            <div className="text-xl">
                                               <div className="relative top-[50%] translate-y-[-50%] ml-5"> <GrClose className="text-red-800 transition-all duration-100"/></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>   
            

            </div>
       </>
    )
}

export default Navbar;