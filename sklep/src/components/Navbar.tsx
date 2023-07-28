import { useState, useEffect } from "react";
import { BiShoppingBag, IoPersonCircleSharp, GrClose } from "react-icons/all";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import logo from "/logo.png";
import ShoppingCart from "./ShoppingCart";
import { useCartContext } from "../hooks/context/useCartContext";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);
  const { state } = useCartContext();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(() =>
      state.map((prod) => prod.price * prod.count).reduce((partialSum, a) => partialSum + a, 0)
    );
  }, [state]);

  const interior = [
    {
      link: "",
      title: "SZAFKI NOCNE"
    },
    {
      link: "",
      title: "SZAFKI RTV"
    },
    {
      link: "",
      title: "KRZESŁA"
    },
    {
      link: "",
      title: "STOŁY"
    },
    {
      link: "",
      title: "ŁÓŻKA"
    }
  ];

  const wallpapers = [
    {
      link: "",
      title: "TAPETY"
    },
    {
      link: "",
      title: "NAKLEJKI ŚCIENNE"
    }
  ];

  const garden = [
    {
      link: "/products",
      title: "MEBLE"
    },
    {
      link: "/products",
      title: "HAMAKI"
    }
  ];

  const toggleNavbar = () => {
    gsap.to(".extendedNavbar", { top: "60px", duration: 0.4 });
  };

  const hideNavbar = () => {
    gsap.to(".extendedNavbar", { top: "-100%" });
  };

  const toggleBasket = () => {
    gsap.to(".basket", { right: 0 });
  };

  useEffect(() => {
    if (activeNavbar) {
      toggleNavbar();
      return;
    }
    hideNavbar();
  }, [activeNavbar]);

  const toggleInformation = () => {
    gsap.to(".log-in", { top: "30px", opacity: 1, duration: 0.1 });
  };

  const hideInformation = () => {
    gsap.to(".log-in", { top: "10px", opacity: 0, duration: 0.1 });
  };

  const hideCart = () => {
    gsap.to(".basket", { right: "-100%" });
  };

  return (
    <>
      <div className="flex z-[80] fixed top-[1%] right-[1%] space-x-[5px] mr-4 lg:hidden mobileNav nav">
        <div className="flex text-[35px] ml-[30px] space-x-[5px]">
          <BiShoppingBag
            className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200"
            onClick={toggleBasket}
          />
          <Link to={"/register"}>
            {" "}
            <IoPersonCircleSharp className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200" />
            <p className=" font-brunoAce bg-white p-2 text-lg z-[99] absolute top-[70px] hidden  lg-block">
              Zaloguj się{" "}
            </p>
          </Link>
        </div>

        <div className="w-[23px] p-[5px] mt-[-1px]" onClick={() => setActiveNavbar(!activeNavbar)}>
          <div
            className={`icon ${activeIcon ? "activeIcon" : ""}`}
            onClick={() => setActiveIcon(!activeIcon)}>
            <div className="line item-1 my-[6px]"></div>
            <div className="line item-2 my-[6px]"></div>
            <div className="line item-3 my-[6px]"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-[60px] fixed top-0  text-black bg-white z-[70] navbar">
        <div className="absolute left-[2%] mt-[5px] cursor-pointer z-50">
          <Link to={"/"}>
            <img src={logo} alt="logo.png" className=" h-[45px]" />
          </Link>
        </div>
        <div
          className={`navElements flex bg-white mx-auto align-middle relative top-[-400%] left-0 w-full lg:top-[10px] lg:justify-center lg:space-x-[25px] navbar ${
            activeNavbar ? "activeNavbar" : ""
          }`}>
          <ul className=" lg:flex lg:space-x-[20px] relative mt-[70px] lg:mt-[5px] ml-4 lg:ml-0 space-y-2 lg:space-y-0">
            <div className="group text-[20px] lg:text-[14px]">
              <li className="px-[2px]">
                <Link to={"/"} className="font-gruppo font-bold py-1.5">
                  STRONA GŁÓWNA
                </Link>
              </li>
              <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
            </div>

            <div
              className="group text-[20px] lg:text-[14px]"
              onMouseEnter={() => setActiveNavbar(true)}
              onClick={() => setActiveNavbar(true)}>
              <li className="px-[2px] font-gruppo font-bold cursor-pointer">PRODUKTY</li>
              <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
            </div>

            <div className="group text-[20px] lg:text-[14px]">
              <li className="px-[2px] font-gruppo font-bold">
                <Link to={"/about"} className="font-gruppo font-bold py-1.5">
                  O NAS
                </Link>
              </li>
              <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
            </div>

            <div className="group text-[20px] lg:text-[14px]">
              <li className="px-[2px] font-gruppo font-bold">
                <Link to={"/contact"} className="font-gruppo font-bold py-1.5">
                  KONTAKT
                </Link>
              </li>
              <div className="w-0 mx-auto h-[1px] bg-black group-hover:w-[100%] transition-all duration-300"></div>
            </div>
          </ul>
          <div className="text-[30px] ml-[30px] space-x-[5px] hidden lg:flex">
            <BiShoppingBag
              className="cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200"
              onClick={toggleBasket}
            />
            <div>
              <Link to={"/login"}>
                {" "}
                <IoPersonCircleSharp
                  onMouseEnter={toggleInformation}
                  onMouseLeave={hideInformation}
                  className="person cursor-pointer rounded-full p-[5px] hover:bg-gray-300 hover:text-white transition-all duration-200"
                />
              </Link>
              <p className="w-[80px] log-in font-brunoAce text-[10px] absolute z-[-10] ml-[-20px] top-[-5px] text-center opacity-0 group-hover:opacity-100 group-hover:top-[30px] transition-all duration-200">
                Zaloguj się{" "}
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------NAVBAR2----------------------------------------------------------------- */}

        <div className="relative">
          <div className="z-[99] extendedNavbar w-full h-auto py-5 bg-white text-black grid md:grid-cols-2 xl:grid-cols-3 fixed top-[-100%] left-0 border-t-2 border-black">
            <GrClose
              className="z-[99] absolute right-[20px] top-1 text-[30px] cursor-pointer hover:border-[2px] border-black rounded-full p-1"
              onClick={() => setActiveNavbar(false)}
            />
            <div className=" mx-5 mt-5 lg:mt-0">
              {/* <img src="https://i.pinimg.com/564x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg" /> */}
              <img
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                className=" aspect-video"
              />
            </div>

            <div className="grid grid-cols-3 sm:space-x-5 mx-5 mt-6">
              <div className="flex space-x-4">
                <div className="mb-5">
                  <h1 className=" mb-6 font-bold font-arial">WNĘTRZE</h1>
                  <ul>
                    {interior.map((element, i) => {
                      return (
                        <li onClick={() => setActiveNavbar(false)} key={i}>
                          <Link to={"/products"} className="hover:text-[#c93] space-y-2">
                            {element.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className=" w-[2px] h-[150px] bg-black relative top-[20px]"></div>
              </div>

              <div className="flex space-x-4">
                <div className="mb-5">
                  <h1 className="mb-6 font-bold font-arial">OGRÓD</h1>
                  <ul>
                    {garden.map((element, i) => {
                      return (
                        <li onClick={() => setActiveNavbar(false)} key={i}>
                          <a href={element.link} className="hover:text-[#c93]">
                            {element.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className=" w-[2px] h-[150px] bg-black relative top-[20px] left-[25%]"></div>
              </div>

              <div className="mb-5">
                <h1 className="mb-6 font-bold font-arial">TAPETY</h1>
                <ul>
                  {wallpapers.map((element, i) => {
                    return (
                      <li onClick={() => setActiveNavbar(false)} key={i}>
                        <a href={element.link} className="hover:text-[#c93]">
                          {element.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------BASKET------------------------------------------------- */}

        <div className="relative">
          <div className="basket fixed top-[60px] right-[-100%] w-[100%] md:w-[70%] xl:w-[40%] 2xl:w-[30%] h-screen bg-[#fcfcfc] z-[90]">
            <GrClose
              className="z-[99] absolute right-5 top-2 text-[30px] cursor-pointer hover:border-[2px] border-black rounded-full p-1"
              onClick={hideCart}
            />
            <div className=" h-[100%]">
              <div className="w-full mx-auto pt-5 bg-slate-100">
                <h1 className=" text-left font-brunoAce text-lg ml-3">TWÓJ KOSZYK</h1>
                <div className=" w-full h-[1px] bg-black mx-auto rounded-full"></div>
              </div>
              <div className="w-fit ml-5 my-5">
                <h1 className=" text-xl">
                  Wartość koszyka: <span className=" font-orbitron">{sum} PLN</span>
                </h1>
              </div>
              <div className="h-[70%] overflow-y-scroll overflow-x-hidden">
                <ShoppingCart />
              </div>
              <div className="w-[90%] mx-auto absolute bottom-[10%] left-[5%] ">
                <Link to={"/summary"}>
                  {" "}
                  <button className="w-full py-4 mx-auto z-[99] text-white bg-black hover:rounded-2xl transition-all duration-150">
                    KUP TERAZ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
