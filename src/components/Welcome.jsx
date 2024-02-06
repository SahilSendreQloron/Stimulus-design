import React from "react";
import Navbar from "./Navbar";
import HeroComp from "../components/HeroComp";
function Welcome() {
  return (
    <div className="h-screen bg-stone-500 w-[100%] flex flex-col sm:flex-row">
      <div className=" welcome-css h-[10%] sm:h-[100%] w-[100%] sm:w-[50%] bg-slate-400 ">
        <p className="text-xl font-semibold text p-5 sm:ml-36 decoration-indigo-50">
          Stimulus
        </p>
      </div>
      <div className="h-[100%] w-[100%] sm:w-[50%] bg-red-100 flex flex-col items-center">
        <Navbar />
        {/* <HeroComp/> */}
        <div className="w-[90%] h-[70%] sm:h-[55%] grid grid-cols-1 gap-3 md:gap-2 sm:mt-24">
          <p className="text-neutral-500">Welcome to my website</p>
          <p className="text-5xl font-light text-[2rem] sm:text-2xl md:text-4xl lg:text-5xl">
            Hello, I am <span className="font-semibold">Stimulus</span>{" "}
            currently based in New York City
          </p>
          <p className="sm:text-sm text-xs md:text-md lg:text-lg  text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ea
            culpa ratione tenetur distinctio eaque sapiente magnam, obcaecati ad
            quisquam eos nobis totam vel placeat officiis nisi. Eum debitis
            dolores voluptatum alias amet ratione rerum.
          </p>
          <button
            className=" w-32 h-9 sm:w-48 sm:h-12 border-4 border-black hover:border-neutral-500 rounded-3xl font-bold text-xs sm:text-sm mt-7"
            href="#"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
