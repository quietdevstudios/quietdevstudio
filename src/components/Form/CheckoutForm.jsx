import React from "react";
import Input from "./Input";

const CheckoutForm = () => {
  return (
    <form className="border">
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
        label="Confirm Email"
        id="confirmEmail"
        name="confirmEmail"
        type="email"
        placeholder="Confirm your email"
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

      <Input type='checkbox' label='By checking' />
    </form>
  );
};

export default CheckoutForm;
