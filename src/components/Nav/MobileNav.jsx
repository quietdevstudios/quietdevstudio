import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { NAV_LINKS } from "../../../data";
import Profilesection from "../Profilesection";
import UserSection from "../UserSection";

const MobileNav = ({ isNavOpen, toggleNav }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 backdrop-blur-sm md:hidden"
        onClick={toggleNav}
      />

      {/* Sidebar Navigation */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.15 }}
        className="bg-zinc-800 fixed top-0 left-0 bottom-0 right-1/3 z-50 backdrop-blur-2xl overflow-y-auto md:hidden"
      >
        <Profilesection />
        <nav className="p-6">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {NAV_LINKS.map((navLink) => {
              const { hyperLink, linkText } = navLink;
              const defaultStyle = "font-semibold leading-10 text-lg";
              const activeLink = `text-[#f97316] ${defaultStyle}`;

              return (
                <motion.li
                  key={linkText}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, scale: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="mb-6 bg-zinc-700 shadow-lg rounded-lg p-4 w-full"
                >
                  <NavLink
                    to={hyperLink}
                    target={linkText === "Community" ? "_blank" : ""}
                    className={({ isActive }) =>
                      isActive ? activeLink : defaultStyle + " text-white"
                    }
                    onClick={toggleNav}
                  >
                    <span className="flex items-center gap-4">{linkText}</span>
                  </NavLink>
                </motion.li>
              );
            })}
          </motion.ul>
          <UserSection closeNav={toggleNav} />
        </nav>
      </motion.section>

      {/* Close Button */}
      <motion.button
        onClick={toggleNav}
        className="fixed right-0 z-50 text-orange-100 p-2 rounded-sm font-medium tracking-wide md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon icon={faXmark} size="2x" />
      </motion.button>
    </>
  );
};

export default MobileNav;
