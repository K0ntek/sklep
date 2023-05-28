import React from "react";
import aboutBg from '../assets/aboutBg.png'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const About =()=>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.aboutElement', {y:200, opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2, scrollTrigger:{trigger:'.aboutSection', start:'top bottom'}})

            let tl = gsap.timeline({
                scrollTrigger:{trigger:'.aboutBorder', start:'top bottom'}
            })
            tl.fromTo(".aboutBorderElement", { width:0}, { duration:.5, width:"100%", delay:.3})
            .to('.aboutBorderElement', {width:'80%', marginLeft:"10%", ease:'ease-in-out'})
    },[])
    return(
        <div>
            <div className="aboutSection w-full bg-black text-white pt-7 grid lg:grid-cols-2 h-fit mt-[60px]">
                <div className="aboutElement min-h-fit">
                   <div className="my-[100px]">
                   <h1 className=" font-gruppo font-extrabold text-7xl text-center mb-4 text-[#332691]">O NAS</h1>
                    <div className="w-[70%] text-justify mx-auto">
                        <p className=" font-gruppo font-extrabold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cumque molestiae modi ipsa accusantium quia assumenda ipsam accusamus veniam laborum blanditiis inventore delectus facilis ipsum magnam, ut ullam, sint quae consequatur eligendi. Molestiae mollitia eum cum provident molestias perferendis temporibus.</p>
                    </div>
                   </div>
                </div>
                <div className="aboutElement ">
                    <img src={aboutBg}  className="w-[70%] justify-center mx-auto relative top-[50%] translate-y-[-50%]"/>
                </div>
            </div>

            <div className="bg-black py-4 aboutBorder">
                <div className="aboutBorderElement w-[80%] mx-auto h-1.5 bg-gradient-to-r from-[#311ec5] to-[#000] rounded-full"></div>
           </div>
        </div>
    )
}

export default About;