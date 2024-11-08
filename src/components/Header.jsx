import React from "react";
import brandLogo from "/assets/images/apple-touch-icon.png";

const Header = () => {
  return (
    <header className="bg-orange-950 h-20 ">
      <section className="h-full w-[95%] text-center mx-auto flex items-center justify-between text-3xl text-orange-500">
        {/* <img src={brandLogo} className='w-24 cursor-pointer' /> */}

        <div className="flex items-center justify-center tracking-tighter">
          <img src={brandLogo} className="w-24 cursor-pointer " />
          <h2 className="h-10 leading-normal text-xl cursor-pointer">
            Quietdev Studios
          </h2>
        </div>

        <button className="flex flex-col">
          <div className="w-8 h-[2px] bg-orange-400 m-1"></div>
          <div className="w-8 h-[2px] bg-orange-400 m-1"></div>
          <div className="w-8 h-[2px] bg-orange-400 m-1"></div>
        </button>
      </section>
    </header>
  );
};

export default Header;
