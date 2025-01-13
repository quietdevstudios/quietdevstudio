import React from "react";

const UserSection = () => {
  return (
    <div className="mt-10">
      {/* Alerts Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2"> Alerts</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            <a
              href="/notification"
              className="text-blue-500 hover:underline hover:text-orange-400"
            >
              Notification
            </a>
          </li>
        </ul>
      </div>

      {/* Accounts Section */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">• Accounts</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            <a
              href="/account-settings"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              Account Settings
            </a>
          </li>
          <li>
            <a
              href="/purchase-history"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              Purchase History
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSection;
