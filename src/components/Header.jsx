import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router";

import brandLogo from "/assets/images/apple-touch-icon.png";
import { NAV_LINKS } from "../../data";
import MobileNav from "./Nav/MobileNav";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-zinc-800 h-20 text-orange-950 font-montserrat sticky top-0 z-50 border-b border-zinc-700 ">
      <section className="h-full w-[95%] max-w-7xl xl:mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center justify-center">
          <img src={brandLogo} className="w-24 cursor-pointer" />
          <h2 className="font-semibold leading-normal text-xl text-white hidden lg:flex lg:text-[1.25rem] relative right-5">
            Quietdev Studios
          </h2>
        </a>

        {isNavOpen && <MobileNav isNavOpen={isNavOpen} toggleNav={toggleNav} />}

        <nav>
          <ul className="hidden md:flex md:items-center md:justify-evenly md:gap-5 lg:gap-6 xl:gap-10">
            {NAV_LINKS.map((navLink) => {
              const { hyperLink, linkText } = navLink;
              const defaultStyle =
                "font-medium leading-6 text-white hover:text-orange-500 hover:border-b-2 hover:border-orange-400 pb-1 text-[0.9rem] lg:text-[0.95rem]";
              const getStarted =
                "font-medium leading-6 text-white bg-orange-600 md:px-4 md:py-3 rounded-md hover:bg-orange-500 text-[0.9rem] lg:text-[0.95rem]";
              const activeLink = `text-[#f97316] border-b-2 border-orange-400  ${defaultStyle}`;

              return (
                <Fragment key={navLink.linkText}>
                  <li>
                    <NavLink
                      to={hyperLink}
                      target={`${linkText === "Community" && "blank"}`}
                      className={({ isActive }) =>
                        isActive
                          ? activeLink
                          : linkText === "Get Started"
                          ? getStarted
                          : defaultStyle
                      }
                    >
                      {linkText}
                    </NavLink>
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

        <div className="flex items-center justify-center gap-10">
          <div className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              color="#ffcc80"
              size="xl"
              className="cursor-pointer"
            />
            <span className="text-[#fff] absolute -top-5 left-6 text-lg font-medium">
              0
            </span>
          </div>
          <button
            onClick={toggleNav}
            className="flex flex-col mb-1 p-2 md:hidden"
          >
            <div className="w-6 h-[2px] bg-orange-400 m-1"></div>
            <div className="w-6 h-[2px] bg-orange-400 m-1"></div>
            <div className="w-6 h-[2px] bg-orange-400 m-1"></div>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
