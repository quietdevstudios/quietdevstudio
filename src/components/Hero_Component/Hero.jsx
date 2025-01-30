import React from "react";

const Hero = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Hero;
