import { gsap } from "gsap/all";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contactForm",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.1 }
    );
    gsap.fromTo(
      ".contactFormElement",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.3, stagger: 0.2 }
    );
    gsap.fromTo(".contactFormButton", { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1 });

    let tl = gsap.timeline();
    tl.fromTo(".contactBorder", { width: 0 }, { duration: 0.5, width: "100%", delay: 0.5 })
      .to(".contactBorder", { width: "50%", ease: "ease-in-out" })
      .to(".contactBorder", { marginLeft: "25%" });
  });
  return (
    <div className="contact w-full h-screen">
      <div className="contactForm  w-[95%] md:w-[70%] xl:w-[50%] h-[50%] min-h-[50%] bg-white/90 mx-auto relative top-[50%] translate-y-[-50%] rounded-3xl overflow-scroll">
        <div className=" relative top-[50%] translate-y-[-50%]">
          <div className="w-fit mx-auto my-7">
            <h1 className=" font-brunoAce text-4xl">KONTAKT</h1>
            <div className="contactBorder w-1/2 h-[2px] bg-black rounded-full mx-auto"></div>
          </div>
          <form className=" space-y-10">
            <div className="contactFormElement w-[80%] mx-auto grid xl:grid-cols-2 space-x-8">
              <p className=" font-brunoAce text-xl xl:text-end">nazwa użytkownika: </p>
              <input
                type="text"
                name="nick"
                className="bg-transparent border-b-[2px] border-black focus:outline-none w-full font-brunoAce focus:border-[#dda941]"
              />
            </div>
            <div className="contactFormElement w-[80%] mx-auto grid xl:grid-cols-2 space-x-8">
              <p className=" font-brunoAce text-xl xl:text-end">e-mail: </p>
              <input
                type="text"
                name="mail"
                className="bg-transparent border-b-[2px] border-black focus:outline-none w-full font-brunoAce focus:border-[#dda941]"
              />
            </div>
            <div className="contactFormElement w-[80%] mx-auto grid xl:grid-cols-2 space-x-8">
              <p className=" font-brunoAce text-xl xl:text-end">wiadomość: </p>
              <textarea className="bg-transparent border-b-[2px] border-black focus:outline-none w-full font-brunoAce focus:border-[#dda941]">
                {" "}
              </textarea>
            </div>
            <div className="contactFormButton text-center">
              <input
                type="submit"
                value="Wyślij"
                className="bg-[#9c824e] font-brunoAce px-7 py-2 mt-1 hover:rounded-xl transition-all duration-200"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
