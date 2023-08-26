import logo from "/logo.png";
import { useEffect } from "react";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const Header = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".headerContentElement",
      { x: "100%" },
      {
        x: "-20%",
        scrollTrigger: {
          trigger: "headerContent",
          start: "top bottom",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      ".headerTitleEl",
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 0.2 }
    );
    gsap.fromTo(".headerButton", { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 0.5 });
  }, []);

  const scrollToProducts = () => {
    let scroll = document.querySelector(".categories");
    scroll?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header w-full h-screen">
        <div className="relative top-[50%] translate-y-[-50%] w-full text-center space-y-[40px]">
          <div className="headerTitle space-y-4 h-fit overflow-hidden">
            {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e6c05] to-[#e9d046] font-adventPro text-[70px]">WNĘTRZA</h1>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e6c05] to-[#e9d046] font-adventPro text-[70px]">Z KLASĄ</h1> */}
            <img src={logo} className="headerTitleEl w-[200px] mx-auto" />
            {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c93] to-[#a89006] font-adventPro text-[70px]">WNĘTRZA Z KLASĄ</h1> */}
            <h1 className="headerTitleEl text-[#d4d4d4] font-brunoAce text-[40px]">
              WNĘTRZA Z KLASĄ
            </h1>
          </div>
          <button
            onClick={scrollToProducts}
            className="headerButton border-[2px] border-[#c93] text-[#c93]   w-[250px] h-[60px] font-gruppo font-extrabold text-[25px] hover:text-[#000000] hover:bg-[#fcfcfc] hover:border-white transition-all duration-200">
            ZOBACZ OFETRĘ
          </button>
        </div>
      </div>
      <div className="headerContent ">
        <p className="headerContentElement modern font-brunoAce text-[90px] lg:text-[180px] ml-[30px]">
          NOWOCZESNY
        </p>
        <div className=" bg-black">
          <p className="headerContentElement design font-brunoAce text-[120px] lg:text-[240px] text-end mr-[20%]">
            DESIGN
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
