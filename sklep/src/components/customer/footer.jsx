import React from "react";
import logo from '../../assets/logo.png'

import {BsFacebook, FiInstagram, AiFillTwitterCircle, BsFillTelephoneFill, FiMail, SiUlule} from 'react-icons/all'

const Footer=()=>{

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
        }
    ]

    const garden =[
        {
           link: '',
           title:  'MEBLE'
        },
        // {
        //     link: '',
        //     title:  'SZAFKI RTV'
        // },
        // {
        //     link: '',
        //     title:  'KRZESŁA'
        // },
        // {
        //     link: '',
        //     title:  'STOŁY'
        // }
    ]
return(
    <div className="pt-12 bg-black w-full">

        <div className="grid md:grid-cols-[40%_60%]">
            <div>
                                                    <div className="mx-auto justify-center text-center">

                                        <img src={logo} alt="logo" className="w-[50px] mx-auto"/>
                                            <div className="text-white text-[20px] w-fit mx-auto"> 
                                                    <p className=" font-brunoAce text-[#c93] text-4xl">WNĘTRZA Z KLASĄ</p>
                                                    <div className="w-[40%] h-0.5 bg-[#ffffff] mx-auto rounded-full my-2"></div>
                                                </div>    

                                                <div className="w-fit text-center mb-7 mt-4  mx-auto">
                                                        <h1 className=" font-gruppo text-[#b38e45] text-2xl">ZAOBSERWUJ</h1>
                                                            <div className=" text-white flex space-x-2.5 text-2xl justify-center my-1">
                                                                <BsFacebook className=" hover:text-[#b38e45] transition-all duration-200"/>
                                                                <FiInstagram className=" hover:text-[#b38e45] transition-all duration-200"/>
                                                                <AiFillTwitterCircle className= "hover:text-[#b38e45] transition-all duration-200"/>
                                                            </div>
                                                    </div>


                                                    <div className="flex text-center  justify-center my-2 space-x-5">
                                                        <div className="flex text-white"><FiMail className="mt-1 mx-1 text-[#b38e45]"/> <p>e-mail</p></div>
                                                        <div className="flex text-white"><BsFillTelephoneFill className="mt-1 mx-1 text-[#b38e45]"/><p>numer telefonu</p></div>
                                                    </div>

                                        </div>

                                        {/* <div className="justify-center text-white">
                                            <div className="w-fit mx-auto">
                                                <h1 className=" text-xl mb-2">NEWSLETTER</h1>
                                                <div className="w-[40%] h-0.5 bg-[#9c9c9c] mx-auto rounded-full my-2"></div>
                                            </div>
                                        <p className=" text-justify w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi nam laudantium nostrum minima, quia molestiae aliquam quis eos vel cum odio voluptates nesciunt consequuntur? Illum ipsam facere aspernatur. Maxime.</p>
                                        </div> */}
            </div>


            <div className="justify-center mx-auto text-white">
                <div>
                        <div className="grid grid-cols-3 space-x-8">
                            <div className="mx-auto">
                                <p className=" text-lg">OGRÓD</p>
                                    <ul>
                                        {garden.map((element, i)=>{
                                            return(
                                               <li> <a href={element.link} className=" text-sm text-[#919191] hover:text-[#c93]">{element.title}</a></li>
                                            )
                                        })}
                                    </ul>
                            </div>

                            <div className="mx-auto">
                                <p  className=" text-lg">WNĘTRZE</p>
                                <ul>
                                        {interior.map((element, i)=>{
                                            return(
                                                <li> <a href={element.link} className=" text-sm text-[#919191] hover:text-[#c93]">{element.title}</a></li>
                                            )
                                        })}
                                    </ul>
                            </div>
                            
                            <div className="mx-auto">
                                <p  className=" text-lg">WNĘTRZE</p>
                                <ul>
                                        {interior.map((element, i)=>{
                                            return(
                                                <li> <a href={element.link} className=" text-sm text-[#919191] hover:text-[#c93]">{element.title}</a></li>
                                            )
                                        })}
                                    </ul>
                            </div>

                        </div>

                </div>
            </div>

        </div>

                    
        <div className="bg-[#050505]">
        <div className="w-[90%] text-center mx-auto">
            <p className=" text-white mt-4 text-[18px] font-gruppo">Copyright © 2023 WNETRZA Z KLASA by <span className="text-[#c93] font-gruppo font-bold">Jakub Kontek</span></p>
            <div className="mb-4"><a href="http://www.freepik.com" className="text-[11px] text-[#c93] font-gruppo font-bold">IMAGE BY FREEPIK</a></div>
        </div>

        <div className="w-full flex space-x-[50px] justify-center text-[12px] py-5 font-arial text-white text-center">
            <div className="w-fit group">
                <a href="" className="hover:text-[#c93] py-[5px] transition-all duration-200">REGULAMIN</a>
                <div className="w-0 h-[2px] mx-auto bg-[#c93] group-hover:w-full transition-all duration-200"></div>
            </div>
            <div className="w-fit group">
                <a href="" className="hover:text-[#c93] py-[5px] transition-all duration-200">POLITYKA PRYWATNOSCI</a>
                <div className="w-0 h-[2px] mx-auto bg-[#c93] group-hover:w-full transition-all duration-200"></div>
            </div>
        </div>
        </div>
    </div>
)
}

export default Footer;