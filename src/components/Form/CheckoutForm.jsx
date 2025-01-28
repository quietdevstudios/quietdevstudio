import React from "react";
import { Input } from "./Input";

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
      <button className="w-fit bg-[#b76d68] my-6 mx-1 py-2 px-4 rounded-lg font-semibold tracking-wide hover:bg-[#8a524e]">
        Continue
      </button>
    </>
  );
};

export default CheckoutForm;
