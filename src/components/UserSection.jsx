import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UserSection = ({ closeNav }) => {
  // const [alertsOpen, setAlertsOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);

  const linkStyle = `text-white tracking-wider leading-10 hover:underline hover:text-orange-200`;
  return (
    <div className="mt-10">
      {/* Alerts Section */}
      {/* <div className="mb-6 bg-zinc-800 shadow-md rounded-lg p-4">
        <button
          onClick={() => setAlertsOpen(!alertsOpen)}
          className="w-full text-left font-semibold text-gray-800 focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white"> Alerts</h2>
            <FontAwesomeIcon
              icon={faChevronDown}
              color="#fff"
              width="20"
              height="20"
              className={`transform transition-transform ${
                alertsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {alertsOpen && (
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              <NavLink to="/notification" className={linkStyle}>
                Notification
              </NavLink>
            </li>
          </ul>
        )}
      </div> */}

      {/* Accounts Section */}
      <div className="bg-zinc-700 shadow-lg rounded-lg py-6 px-4 w-fit">
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
          <ul className="list-disc pl-5 text-gray-600 mt-1">
            <li>
              <NavLink
                to="account-settings"
                className={linkStyle}
                onClick={closeNav}
              >
                Account Settings
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/purchase-history" className={linkStyle}>
                Purchase History
              </NavLink>
            </li> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserSection;
