import { gsap } from "gsap/all";
import { FormEvent, useEffect, useState } from "react";
import { useRegister } from "../hooks/auth/useRegister";
import { User } from '../interfaces';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { register, isLoading } = useRegister();

  // Dane do użytkownika
  // {
  //   email: string;
  //   name: string;
  //   surname: string;
  //   password: string;
  //   phone: number;
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: User = {email, password, name, surname, phone, isAdmin: false};
    await register(user);
  };

  useEffect(() => {
    gsap.fromTo(
      ".registerForm",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.1 }
    );
    gsap.fromTo(
      ".registerFormElement",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.3, stagger: 0.2 }
    );
    gsap.fromTo(".registerFormButton", { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1 });
  });

  return (
    <div className="register w-full h-screen">
      <div className="registerForm w-[50%] h-[50%] bg-white/90 grid lg:grid-cols-[48%_2px_51%] mx-auto relative top-[50%] translate-y-[-50%] rounded-3xl">
        <div>
          <div className="registerFormElement font-brunoAce text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center relative top-[50%] translate-y-[-50%] text-gray-600">
            Stwórz konto
          </div>
        </div>
        <div className="registerBorder bg-black w-[80%] lg:w-full h-[2px] lg:h-[80%] mx-auto relative top-[10%]"></div>
        <div>
          <div className=" relative top-[50%] translate-y-[-50%]">
            <form onSubmit={handleSubmit} className=" space-y-10">
              <div className="registerFormElement w-[80%] mx-auto">
                <p className=" font-brunoAce text-xl">nazwa użytkownika: </p>
                <input
                  type="text"
                  name="nick"
                  className="bg-transparent border-b-[2px] border-black focus:outline-none w-full font-brunoAce focus:border-[#dda941]"
                />
              </div>
              <div className="registerFormElement w-[80%] mx-auto">
                <p className=" font-brunoAce text-xl">e-mail: </p>
                <input
                  type="text"
                  name="mail"
                  className="bg-transparent border-b-[2px] border-black focus:outline-none w-full font-brunoAc focus:border-[#dda941]"
                />
              </div>
              <div className="registerFormElement w-[80%] mx-auto">
                <p className=" font-brunoAce text-xl">hasło: </p>
                <input
                  type="text"
                  name="password"
                  className="bg-transparent border-b-[2px] border-black focus:outline-none w-full font-brunoAce focus:border-[#dda941]"
                />
              </div>
              <div className="registerFormButton text-center">
                <button
                  disabled={isLoading}
                  className="bg-[#9c824e] font-brunoAce px-4 py-2 mt-1 hover:rounded-xl transition-all duration-200">
                  Zarejestruj się
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
