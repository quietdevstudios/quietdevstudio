import React from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { Input, Checkbox } from "../../components/Form/Input";
import { signUpSchema } from "../../../validation/formInputValidation";

export const GetStarted = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false,
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      // alert("signup succcessful", values);
      console.log(values);
    },
  });

  return (
    <div className="min-h-[80vh] p-8 flex flex-col items-center justify-center font-montserrat bg-[#2c2b3c] text-[#ffffff]">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-[#1b2432]">
        <h2 className="text-2xl font-bold mb-4 text-[#b76d68]">
          Sign up for free
        </h2>
        <p className="mb-4 text-sm">
          Or{" "}
          <Link to="/signin" className="hover:underline text-[#b76d68]">
            sign in to your existing account
          </Link>
        </p>

        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Full Name"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your fullName"
            formik={formik}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            formik={formik}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            formik={formik}
          />
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            formik={formik}
          />
          <div className="flex items-center cursor-pointer">
            <Checkbox
              label={`By signing up, you agree to our`}
              placeholder="terms of use"
              id="acceptedTerms"
              name="acceptedTerms"
              formik={formik}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-[#b76d68] hover:bg-[#8a524e]"
          >
            Sign up
          </button>
          <div className="flex items-center justify-between my-4">
            <hr className="w-full" style={{ borderColor: "#403f4c" }} />
            <span className="w-full text-center text-sm mx-2">
              Or continue with
            </span>
            <hr className="w-full" style={{ borderColor: "#403f4c" }} />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]"
            >
              <FontAwesomeIcon icon={faGithub} color="#b76d68" size="xl" />
            </button>
            <button
              type="button"
              className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]"
            >
              <FontAwesomeIcon icon={faGoogle} color="#b76d68" size="xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;

// make the github and google buttons re-usable
