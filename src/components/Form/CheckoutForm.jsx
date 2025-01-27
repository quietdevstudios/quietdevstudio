import React from "react";
import Input from "./Input";

const CheckoutForm = () => {
  return (
    <>
      <Input
        label="Full Name"
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Enter your fullName"
      />
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="confirmPassword"
        placeholder="Confirm your password"
      />
    </>
  );
};

export default CheckoutForm;
