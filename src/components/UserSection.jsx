import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const UserSection = () => {
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);

  const linkStyle = `text-orange-50 tracking-wider leading-10 hover:underline hover:text-orange-200`;
  return (
    <div className="mt-10">
      {/* Alerts Section */}
      <div className="mb-6 bg-zinc-800 shadow-md rounded-lg p-4">
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
              <a href="/notification" className={linkStyle}>
                Notification
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Accounts Section */}
      <div className="bg-zinc-800 shadow-md rounded-lg p-4">
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
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              <a href="/account-settings" className={linkStyle}>
                Account Settings
              </a>
            </li>
            <li>
              <a href="/purchase-history" className={linkStyle}>
                Purchase History
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserSection;
