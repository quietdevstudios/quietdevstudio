import React from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { Input, Checkbox } from "../../components/Form/Input";
import { useFormik } from "formik";

export const GetStarted = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert("signup succcessful", values);
    },
  });

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center font-montserrat px-8 bg-[#2c2b3c] text-[#ffffff]">
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
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            formik={formik}
          />
          <div className="flex items-center cursor-pointer">
            <Checkbox />
            <p className="text-xs my-4 mt-5">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="hover:underline"
                style={{ color: "#b76d68" }}
              >
                terms of use
              </a>
              .
            </p>
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
            <button className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]">
              <FontAwesomeIcon icon={faGithub} color="#b76d68" size="xl" />
            </button>
            <button className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]">
              <FontAwesomeIcon icon={faGoogle} color="#b76d68" size="xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
