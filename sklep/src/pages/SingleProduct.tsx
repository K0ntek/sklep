import { useState, useEffect } from "react";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/all";
import { Link, useParams } from "react-router-dom";

import { Product } from "../interfaces";
import { useProductContext } from "../hooks/context/useProductContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { state } = useProductContext();
  const [product, setProduct] = useState<Product>();
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    setProduct(state.find((product) => product.id === id));
  }, [state]);

  let stars = document.querySelectorAll(".star");
  stars.forEach((star, starIndex1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, starIndex2) => {
        starIndex1 >= starIndex2
          ? star.classList.add("activeStars")
          : star.classList.remove("activeStars");
      });
    });
  });

  const size = [
    {
      element: "Szerokość",
      value: "200"
    },
    {
      element: "Wysokość",
      value: "120"
    },
    {
      element: "Głębokość",
      value: "70"
    }
  ];

  return (
    <div className="w-full min-h-screen py-[60px]">
      {product && (
        <div className="space-y-5">
          <div className="h-fit grid lg:grid-cols-2 mt-10 space-y-5 lg:space-y-0">
            <div className="relative top-[50%] translate-y-[-50%]">
              <div className="w-[90%] mx-auto">
                <div className="relative w-fit mx-auto">
                  <div className="absolute top-[-5px] left-[-5px] bg-[#9c824e] w-1/2 h-1/2 z-[-1]"></div>
                  <img src={product.img} className=" z-50 bg-white" />
                  <div className="absolute bottom-[-5px] right-[-5px] bg-black w-1/2 h-1/2 z-[-1]"></div>
                </div>
              </div>
            </div>

            <div className=" w-[90%] mx-auto">
              <div className="space-y-3 relative top-[50%] translate-y-[-50%]">
                <h1 className="text-5xl font-gruppo font-extrabold">
                  {/* {product.category} {product.title} */}
                </h1>
                <p className=" font-orbitron text-2xl">{product.price} pln</p>

                <div>
                  <h1 className=" font-arial text-lg">DOSTĘPNE KOLORY</h1>
                  <div className="flex space-x-1">
                    {product.colors.map((element, i) => {
                      return (
                        <button key={i}>
                          <div
                            onClick={() => setActiveButton(!activeButton)}
                            className={`button group w-7 h-7 rounded-lg hover:rounded-3xl transition-all duration-300 border-[1px] border-gray-300 z-[99] ${
                              activeButton ? "activeButton" : ""
                            }`}
                            style={{ background: `${element}` }}>
                            <p className="bg-white p-5 relative top-[30px] hidden group-hover:block  font-brunoAce z-[90] w-fit">
                              {/* {element.description} */}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className=" font-gruppo font-bold">LICZBA SZTUK:</p>
                  <div className="flex space-x-2 border-[1px] w-fit border-black">
                    <button className=" px-6 py-2 text-lg hover:bg-gray-100" onClick={() => 1}>
                      <AiOutlineMinus />
                    </button>
                    <div className="py-2 text-lg min-w-[30px] text-center">{}</div>
                    <button className=" px-6 py-2 text-lg hover:bg-gray-100" onClick={() => 1}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="flex text-2xl">
                  <AiFillStar className="star text-gray-300 transition-all duration-300" />
                  <AiFillStar className="star text-gray-300 transition-all duration-300" />
                  <AiFillStar className="star text-gray-300 transition-all duration-300" />
                  <AiFillStar className="star text-gray-300 transition-all duration-300" />
                  <AiFillStar className="star text-gray-300 transition-all duration-300" />
                </div>

                <div className="flex space-x-4">
                  <button className="text-white bg-[#9c824e] px-4 py-2 hover:rounded-xl transition-all duration-400">
                    DO KOSZYKA
                  </button>
                  <Link to={"/summary"}>
                    <button className="text-white bg-black px-4 py-2 hover:rounded-xl transition-all duration-400">
                      KUP TERAZ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit pt-[70px]">
            <h1 className=" font-brunoAce text-5xl text-center">OPIS PRODUKTU</h1>
            <div className=" w-[90%] mx-auto grid md:grid-cols-2 mt-9 space-y-14 md:space-y-10 bg-slate-100 rounded-3xl">
              <div className=" justify-center mx-auto w-full space-y-7 rounded-2xl py-5">
                <h2 className=" font-brunoAce text-3xl text-center">WYMIARY</h2>
                <div className="w-full">
                  {size.map((element, i) => {
                    return (
                      <div key={i} className=" w-[80%] mx-auto">
                        {i % 2 === 0 && (
                          <div className=" mx-auto grid grid-cols-2 bg-slate-200 px-5 py-2 hover:bg-slate-300">
                            <div>
                              <p className=" text-center font-gruppo font-bold text-xl">
                                {element.element}:{" "}
                              </p>
                            </div>
                            <div>
                              <p className=" text-center font-gruppo font-bold text-xl">
                                {element.value} cm
                              </p>
                            </div>
                          </div>
                        )}
                        {i % 2 !== 0 && (
                          <div className=" mx-auto grid grid-cols-2 px-5 py-2 hover:bg-slate-300">
                            <div>
                              <p className=" text-center font-gruppo font-bold text-xl">
                                {element.element}:{" "}
                              </p>
                            </div>
                            <div>
                              <p className=" text-center font-gruppo font-bold text-xl">
                                {element.value} cm
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" bg-white h-full py-6 rounded-3xl w-full relative left-[-20px]">
                <div className=" space-y-7">
                  <h1 className="font-brunoAce text-3xl text-center">WŁAŚCIWOŚCI</h1>
                  <div className="w-[80%] mx-auto">
                    <p className=" font-arial text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur pariatur
                      beatae aspernatur sunt magnam nihil quaerat ex, alias veniam. Magni,
                      laudantium! Alias sequi consectetur exercitationem! Suscipit illo
                      exercitationem distinctio illum sequi. Facilis praesentium at ullam pariatur
                      fugit beatae, in, enim eveniet voluptas numquam sint. Nobis possimus magni
                      eius repellendus?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
