import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import { NAV_LINKS } from "../../../data";
import Profilesection from "../Profilesection";
import UserSection from "../UserSection";

const MobileNav = ({ isNavOpen, toggleNav }) => {
  return (
    <>
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 backdrop-blur-sm md:hidden"
          onClick={toggleNav}
        ></div>
      )}
      {isNavOpen && (
        <>
          <section className="bg-zinc-800 fixed top-0 left-0 bottom-0 right-1/3 z-50 backdrop-blur-2xl overflow-y-auto md:hidden">
            <Profilesection />
            <nav className="p-6">
              <ul>
                {NAV_LINKS.map((navLink) => {
                  const { hyperLink, linkText } = navLink;
                  const defaultStyle = "font-semibold leading-10 text-lg";
                  const activeLink = `text-[#f97316] ${defaultStyle}`;

                  return (
                    <Fragment key={navLink.linkText}>
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="mb-6 bg-zinc-700 shadow-lg rounded-lg p-4 w-full"
                      >
                        <NavLink
                          to={hyperLink}
                          target={`${linkText === "Community" ? "_blank" : ""}`}
                          className={({ isActive }) =>
                            isActive ? activeLink : defaultStyle + " text-white"
                          }
                          onClick={toggleNav}
                        >
                          <span className="flex items-center gap-4">
                            {linkText}
                          </span>
                        </NavLink>
                      </motion.li>

                      {/* {linkText === "Get Started" && (
                        <>
                          <span className="text-white font-semibold mr-2 text-lg">
                            toggle Mode
                          </span>
                          <FontAwesomeIcon
                            icon={faMoon}
                            size="xl"
                            className="text-white cursor-pointer"
                          />
                        </>
                      )} */}
                    </Fragment>
                  );
                })}
              </ul>
              <>
                <UserSection closeNav={toggleNav} />
              </>
            </nav>
          </section>

          <button
            onClick={toggleNav}
            className="fixed right-0 z-50 text-orange-100 p-2 rounded-sm font-medium tracking-wide md:hidden"
          >
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
        </>
      )}
    </>
  );
};

export default MobileNav;
