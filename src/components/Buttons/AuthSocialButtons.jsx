import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ icon, onClick }) => {
  return (
    <button
      type="button"
      className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} color="#b76d68" size="xl" />
    </button>
  );
};

export default SocialButton;
