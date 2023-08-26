import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="w-full my-[60px] categories">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-3 space-y-4 lg:space-y-0 mb-3">
          <Link to={"/products"}>
            <div className="categoryNav w-full group overflow-hidden relative text-5xl rounded-3xl">
              <div className="interiorNav w-full aspect-video group-hover:scale-125 transition-all duration-300"></div>
              <h1 className="absolute bottom-0 left-0 font-arial font-semibold categoryNavTitle bg-white/40 w-full p-3 group-hover:bg-black/40">
                WNĘTRZE
              </h1>
            </div>
          </Link>

          <Link to={"/products"}>
            <div className="categoryNav w-full group overflow-hidden relative text-5xl rounded-3xl">
              <div className="gardenNav w-full aspect-video group-hover:scale-125 transition-all duration-300"></div>
              <h1 className="absolute bottom-0 left-0 font-arial font-semibold categoryNavTitle bg-white/40 w-full p-3 group-hover:bg-black/40">
                OGRÓD
              </h1>
            </div>
          </Link>
        </div>
        <Link to={"/products"}>
          <div className="categoryNav w-full group overflow-hidden relative text-5xl rounded-3xl">
            <div className="wallpapersNav w-full group-hover:scale-125 transition-all duration-300"></div>
            <h1 className="absolute bottom-0 left-0 font-arial font-semibold categoryNavTitle bg-white/40 w-full p-3 group-hover:bg-black/40">
              TAPETY
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNav;
