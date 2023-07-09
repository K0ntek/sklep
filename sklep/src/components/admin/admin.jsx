import React from "react";
import SideNav from "./adminNav";
import { gsap } from "gsap";
import { useEffect } from "react";
import AvailableProducts from "./availableProducts";
import AdminCategoryNav from "./adminCategoryNav";

const Admin =()=>{
return(
    <div className="flex">
       <div className="z-[99]"> <SideNav/></div>
       <div className=" w-[90%] mx-auto">
            <AdminCategoryNav/>
       </div>
    </div>
)
}

export default Admin;
