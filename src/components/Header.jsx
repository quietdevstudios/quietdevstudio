import React, { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import brandLogo from "/assets/images/apple-touch-icon.png";
import { NAV_LINKS } from "../../data";
import MobileNav from "./Nav/MobileNav";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { HeaderContext } from "./store/HeaderContext";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { headerRef } = useContext(HeaderContext);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      ref={headerRef}
      className="bg-zinc-800 h-20 text-orange-950 font-montserrat sticky top-0 z-50 border-b border-zinc-700"
    >
      <section className="h-full w-[95%] mx-auto max-w-7xl flex items-center justify-between">
        <NavLink to="/" className="flex items-center justify-center h-20">
          <img src={brandLogo} className="w-24 cursor-pointer" />
          <h2 className="font-semibold leading-normal text-xl text-white hidden lg:flex lg:text-[1.25rem] relative right-5">
            Quietdev Studios
          </h2>
        </NavLink>

        {isNavOpen && <MobileNav isNavOpen={isNavOpen} toggleNav={toggleNav} />}

        <nav>
          <ul className="hidden md:flex md:items-center md:justify-evenly md:gap-10">
            {NAV_LINKS.map((navLink) => {
              const { hyperLink, linkText } = navLink;
              const defaultStyle =
                "font-medium leading-6 hover:text-orange-500 hover:border-b-2 hover:border-orange-400 pb-1 text-[0.9rem] lg:text-[0.95rem]";
              const getStarted =
                "font-medium leading-6 text-white bg-orange-600 md:px-4 md:py-3 rounded-md hover:bg-orange-500 text-[0.9rem] lg:text-[0.95rem]";
              const activeLink = `text-[#f97316] border-b-2 border-orange-400  ${defaultStyle}`;

              return (
                <Fragment key={navLink.linkText}>
                  <motion.li
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <NavLink
                      to={hyperLink}
                      target={`${
                        linkText === "Community" ? "_blank" : "_self"
                      }`}
                      className={({ isActive }) =>
                        isActive
                          ? activeLink
                          : linkText === "Get Started"
                          ? getStarted
                          : defaultStyle + " text-white"
                      }
                    >
                      {linkText}
                    </NavLink>
                  </motion.li>
                </Fragment>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-10">
          <div className="relative mr-2">
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
