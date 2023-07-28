import ShoppingCart from "../components/ShoppingCart";

const Summary = () => {
  return (
    <div className=" h-full bg-slate-50 ">
      <div className="w-[90%] mx-auto pb-[60px]">
        <h1 className=" font-orbitron text-3xl">PODSUMOWANIE</h1>
        <div className=" mt-[60px] grid grid-cols-[35%_65%]">
          <div>
            {/* <h1 className=" font-brunoAce text-2xl">PRODUKTY</h1> */}
            <div className="h-[600px] overflow-y-scroll overflow-x-hidden border-t-[1px] border-b-[1px] border-black my-6">
              <div className=" h-full">
                <ShoppingCart />
              </div>
            </div>
            <div>
              <h1 className=" text-xl">DO ZAPŁATY: 0pln</h1>
            </div>
          </div>

          {/* <div className="w-fit mx-auto align-middle">
            <div className=" text-center relative top-[50%] translate-y-[-50%]">
              <div>
                {" "}
                <h1 className=" font-brunoAce text-2xl mb-6">DANE OSOBOWE</h1>
              </div>
              <div className="grid grid-cols-2 my-2">
                <p className=" font-brunoAce text-start">imię: </p>
                <input
                  type="text"
                  className=" bg-transparent font-brunoAce border-b-[1px] border-black focus:outline-none focus:border-[#c93]"></input>
              </div>
              <div className="grid grid-cols-2 my-2">
                <p className=" font-brunoAce text-start">nazwisko: </p>
                <input
                  type="text"
                  className=" bg-transparent font-brunoAce border-b-[1px] border-black focus:outline-none focus:border-[#c93]"></input>
              </div>
              <div className="grid grid-cols-2 my-2">
                <p className=" font-brunoAce text-start">e-mail: </p>
                <input
                  type="email"
                  className=" bg-transparent font-brunoAce border-b-[1px] border-black focus:outline-none focus:border-[#c93]"></input>
              </div>
              <div className="grid grid-cols-2 my-2">
                <p className=" font-brunoAce text-start">numer telefonu: </p>
                <input
                  type="text"
                  className=" bg-transparent font-brunoAce border-b-[1px] border-black focus:outline-none focus:border-[#c93]"></input>
              </div>
              <div className="grid grid-cols-2 my-2">
                <p className=" font-brunoAce text-start">adres: </p>
                <input
                  type="text"
                  className=" bg-transparent font-brunoAce border-b-[1px] border-black focus:outline-none focus:border-[#c93]"></input>
              </div>
              <div className="grid grid-cols-2 my-2">
                <p className=" font-brunoAce text-start">miasto: </p>
                <input
                  type="text"
                  className=" bg-transparent font-brunoAce border-b-[1px] border-black focus:outline-none focus:border-[#c93]"></input>
              </div>

              <div className=" mt-7">
                <button className="bg-[#caac6f] p-3 hover:rounded-xl transition-all duration-200">
                  ZŁÓŻ ZAMÓWIENIE
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Summary;
