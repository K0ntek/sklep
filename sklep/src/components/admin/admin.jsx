import React from "react";
import SideNav from "./adminNav";
import { gsap } from "gsap";
import { useEffect } from "react";
import AvailableProducts from "./availableProducts";

const Admin =()=>{
return(
    <div className="flex">
       <div className="z-[99]"> <SideNav/></div>
       <div className="relative">
         <div className="absolute left-[70px]">
            <AvailableProducts/>
        </div>
       </div>
    </div>
)
}

export default Admin;
