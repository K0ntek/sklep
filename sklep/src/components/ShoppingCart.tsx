import { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, SlClose } from "react-icons/all";

import { ProductInCart } from "../interfaces";
import { useCartContext } from "../hooks/context/useCartContext";
import { useChangeCountCart } from "../hooks/cart/useChangeCountCart";
import { useRemoveCart } from '../hooks/cart/useRemoveCart';

const ShoppingCart = () => {
  const [cart, setCart] = useState<ProductInCart[]>([]);
  const { state } = useCartContext();
  const { changeCountCart } = useChangeCountCart();
  const { removeCart } = useRemoveCart();

  useEffect(() => {
    setCart(state);
  }, [state]);

  return (
    <div>
      <ul>
        {cart &&
          cart.map((product) => {
            return (
              <li className="relative py-3 ml-2 border-b-[1px] border-black" key={product.id}>
                <div className="text-xl">
                  <div className="absolute top-1 right-1">
                    {" "}
                    <button onClick={() => removeCart(product.id)}>
                      <SlClose className="hover:text-[#c93] transition-all duration-100" />
                    </button>
                  </div>
                </div>
                <div className="flex ml-3 w-full">
                  <img src={product.img} alt="product" className="h-[50px]" />
                  <div className="ml-3">
                    <h1 className=" font-brunoAce text-xl">{product.title}</h1>
                    <div className="flex space-x-2">
                      <div className="flex space-x-2 border-[1px] w-fit border-black rounded-full">
                        <button
                          className="px-1 hover:bg-gray-100 rounded-full bg-slate-50"
                          onClick={() => changeCountCart(product.id, -1)}>
                          <AiOutlineMinus />
                        </button>
                        <div className=" min-w-[20px] text-center">{product.count}</div>
                        <button
                          className="px-1 hover:bg-gray-100 rounded-full bg-slate-50"
                          onClick={() => changeCountCart(product.id, 1)}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <div>
                        <p className=" text-xl font-orbitron relative top-[50%] translate-y-[-50%]">
                          {product.price * product.count} pln
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
