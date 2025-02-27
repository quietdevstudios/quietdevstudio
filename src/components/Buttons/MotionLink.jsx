import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const AnimatedLink = ({ to, children, className, ...props }) => {
  return (
    <MotionLink
      to={to}
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
      {...props}
    >
      {children}
    </MotionLink>
  );
};
