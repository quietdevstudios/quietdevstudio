import React, { Fragment, useState } from "react";
import brandLogo from "/assets/images/apple-touch-icon.png";
import { NAV_LINKS } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import MobileNav from "./Nav/MobileNav";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-orange-200 h-20 text-orange-950 font-montserrat py-16 sticky top-0 z-50 ">
      <section className="h-full w-[95%] max-w-7xl xl:mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center tracking-tighter">
          <img src={brandLogo} className="w-24 cursor-pointer" />
          <h2 className="h-12 leading-normal text-2xl text-zinc-600 hidden lg:flex">
            Quietdev Studios
          </h2>
        </a>

        {isNavOpen && <MobileNav isNavOpen={isNavOpen} toggleNav={toggleNav} />}

        <nav>
          <ul className="hidden md:flex md:items-center md:justify-evenly md:gap-5 lg:gap-6 xl:gap-10">
            {NAV_LINKS.map((navLink) => {
              const { hyperLink, linkText } = navLink;
              const defaultStyle =
                "font-semibold leading-6 text-zinc-600 hover:text-orange-500 hover:border-b-2 hover:border-orange-400 pb-1";
              const getStarted =
                "font-semibold leading-6 text-zinc-200 bg-orange-600 md:px-4 md:py-3 rounded-md hover:bg-orange-500";

              return (
                <Fragment key={navLink.linkText}>
                  <li>
                    <a
                      href={hyperLink}
                      className={`${
                        linkText === "Get Started" ? getStarted : defaultStyle
                      }`}
                    >
                      {linkText}
                    </a>
                  </li>
                  {linkText === "Sign in" && (
                    <FontAwesomeIcon
                      icon={faMoon}
                      size="xl"
                      className="text-zinc-600 hover:text-orange-500 cursor-pointer"
                    />
                  )}
                </Fragment>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={toggleNav}
          className="flex flex-col mb-1 p-2 md:hidden hover:bg-orange-200 hover:p-1 hover:rounded-md"
        >
          <div className="w-6 h-[2px] bg-orange-400 m-1"></div>
          <div className="w-6 h-[2px] bg-orange-400 m-1"></div>
          <div className="w-6 h-[2px] bg-orange-400 m-1"></div>
        </button>
      </section>
    </header>
  );
};

export default Header;
