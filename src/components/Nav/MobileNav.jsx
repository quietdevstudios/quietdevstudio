import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

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
          <section className="bg-zinc-800 fixed top-0 left-0 bottom-0 right-1/3 z-50 backdrop-blur-2xl md:hidden">
            <Profilesection />
            <nav className="p-6">
              <ul>
                {NAV_LINKS.map((navLink) => {
                  const { hyperLink, linkText } = navLink;
                  const defaultStyle = "font-semibold leading-10 text-lg";
                  const activeLink = `text-[#f97316] ${defaultStyle}`;

                  return (
                    <Fragment key={navLink.linkText}>
                      <li className="mb-6">
                        <NavLink
                          to={hyperLink}
                          target={`${linkText === "Community" && "blank"}`}
                          className={({ isActive }) =>
                            isActive ? activeLink : defaultStyle + " text-white"
                          }
                        >
                          <span className="flex items-center gap-4">
                            {/* <FontAwesomeIcon icon={faImage} size="sm" /> */}
                            {linkText}
                          </span>
                        </NavLink>
                      </li>

                      {linkText === "Get Started" && (
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
                      )}
                    </Fragment>
                  );
                })}
              </ul>
              <Fragment>
                {/* <header className="font-semibold leading-10 text-2xl text-white my-10">
                  <ul>
                    <li>Alerts</li>
                  </ul>
                </header> */}
                <UserSection />
              </Fragment>
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
