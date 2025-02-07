import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const UserSection = ({ closeNav }) => {
  // const [alertsOpen, setAlertsOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);

  const linkStyle = `text-white tracking-wider leading-10 hover:underline hover:text-orange-200`;

  return (
    <div className="mt-6">
      {/* Accounts Section */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="bg-zinc-700 shadow-lg rounded-lg p-5 w-full"
      >
        <button
          onClick={() => setAccountsOpen(!accountsOpen)}
          className="w-full text-left font-semibold text-gray-800 focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white"> Accounts</h2>

            <FontAwesomeIcon
              icon={faChevronDown}
              color="#fff"
              width="20"
              height="20"
              className={`transform transition-transform ${
                accountsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {accountsOpen && (
          <motion.ul
            className="list-disc pl-5 text-gray-600 mt-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
              }}
            >
              <NavLink
                to="account-settings"
                className={linkStyle}
                onClick={closeNav}
              >
                Account Settings
              </NavLink>
            </motion.li>
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

export default UserSection;
