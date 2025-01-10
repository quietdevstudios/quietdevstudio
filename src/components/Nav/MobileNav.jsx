import React, { Fragment } from "react";
import brandLogo from "/assets/images/apple-touch-icon.png";
import { NAV_LINKS } from "../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileNav = ({ isNavOpen, toggleNav }) => {
  return (
    <>
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 backdrop-blur-sm md:hidden"
          onClick={toggleNav} // Close nav when clicking on the backdrop
        ></div>
      )}
      {isNavOpen && (
        <>
          <section className="bg-zinc-600 fixed top-0 left-0 bottom-0 right-1/3 z-50 backdrop-blur-2xl md:hidden">
            <div className="flex items-center tracking-tighter">
              <img src={brandLogo} className="w-24 cursor-pointer" />
              <h2 className="h-12 leading-normal text-2xl text-orange-100">
                Quietdev Studios
              </h2>
            </div>

            <nav className="p-6">
              <ul>
                {NAV_LINKS.map((navLink) => {
                  const { hyperLink, linkText, faImage } = navLink;
                  const defaultStyle =
                    "font-semibold leading-10 text-white text-lg";
                  const getStarted = "font-semibold text-white text-lg";

                  return (
                    <Fragment key={navLink.linkText}>
                      <li
                        className={`${
                          linkText === "Sign In"
                            ? "border border-red-300"
                            : "mb-6"
                        }`}
                      >
                        <a
                          href={hyperLink}
                          target={`${linkText === "Community" && "blank"}`}
                          className={`${
                            linkText === "Get Started"
                              ? getStarted
                              : defaultStyle
                          }`}
                        >
                          <span className="flex items-center gap-4">
                            {/* <FontAwesomeIcon icon={faImage} size="2x" /> */}
                            {linkText}
                          </span>
                        </a>
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
