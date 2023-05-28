import React from "react";
import { gsap } from "gsap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/all'

const Products =()=>{

    const categories =[
        {
            category:'KONSOLE',
            id:'konsola'
        }
    ]

    const products =[
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Evia',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Malveta',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Set Of Lanka',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Evia Duo',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Evia Duo',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Evia Duo',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Evia Duo',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        },
        {
            img:'https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg',
            title:' Evia Duo',
            category:'konsola',
            price: '2100',
            id:'konsola',
            link:'/Evia'
        }
    ]


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        largeDesktop: {
            breakpoint: { max: 3000, min: 1250 },
            items: 4
          },
        desktop: {
          breakpoint: { max: 1250, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const CustomRightArrow = ({ onClick }) => {
        return <AiOutlineArrowRight onClick={() => onClick()} className=" w-[60px] h-[100%]  absolute right-[-60px] text-black text-4xl hover:bg-gray-300 hover:text-white transition-all duration-200"/>;
      };
      <Carousel customRightArrow={<CustomRightArrow />} />;

      const CustomLeftArrow = ({ onClick }) => {
        return <AiOutlineArrowLeft onClick={() => onClick()} className=" w-[60px] h-[100%] absolute left-[-60px] text-black text-4xl hover:bg-gray-300 hover:text-white transition-all duration-200"/>;
      };
      <Carousel customRightArrow={<CustomLeftArrow />} />;


    return(
        <div className="w-full">
             {/* <h1 className=" font-brunoAce text-5xl ml-8 my-4">PRODUKTY</h1> */}
             {categories.map((element)=>{
                return(<h1 className=" font-brunoAce text-5xl ml-8 my-4">{element.category}</h1>)
             })}
           <div className="flex h-fit my-[20px]">
            <div className="gallery w-[94%] mx-auto  space-x-[10px] relative" >

                    <Carousel
                    responsive={responsive}
                    infinite={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="container-with-dots"
                    ssr={true}
                    autoPlay={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    customRightArrow={<CustomRightArrow/>}
                    customLeftArrow={<CustomLeftArrow/>}
                    className="carousel"
                    centerMode={true}
                    >
                    {products.map((product, i)=>{
                        return(
                           <Link to={product.link}>
                             <div key={i} id={product.id} className="product w-[98%] relative cursor-pointer bg-[#f1f1f1] pb-2 group">
                                <div className=" overflow-hidden"> <img src={product.img} draggable="false" className=" group-hover:scale-110 transition-all duration-200"/></div>
                            <div className="ml-2">
                                    <p className=" font-gruppo font-extrabold text-2xl text-black">{product.title}</p>
                                    <p className=" font-brunoAce text-slate-400 text-sm">{product.category}</p>
                                    <p className=" font-orbitron">{product.price} pln</p>
                            </div>
                            </div>
                           </Link>
                        )
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Products;
