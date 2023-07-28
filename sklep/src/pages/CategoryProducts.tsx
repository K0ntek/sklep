import data from "../data.json";
import { Link } from "react-router-dom";

const CategoryProducts = () => {
  return (
    <div className=" w-full min-h-screen py-16">
      <div className="w-[90%] mx-auto">
        <h1 className="text-5xl font-brunoAce text-center py-6">KONSOLE</h1>
        <div className="grid grid-cols-4 space-x-4 space-y-4 mt">
          {data.map((product) => {
            return (
              <Link to={`product/${product.id}`} key={product.id}>
                <div className="bg-slate-100 group">
                  <img
                    src={product.img}
                    className="w-full group-hover:scale-110 transition-all duration-200"
                  />
                  <div className="ml-2 bg-slate-200 py-2">
                    <p className=" font-gruppo font-extrabold text-2xl text-black">
                      {product.title}
                    </p>
                    {/* <p className=" font-brunoAce text-slate-400 text-sm">{product.category}</p> */}
                    <p className=" font-orbitron">{product.price} pln</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
