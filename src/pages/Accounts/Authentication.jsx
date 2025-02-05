import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFormik } from "formik";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import SocialButton from "../../components/Buttons/AuthSocialButtons";
import { Input, Checkbox } from "../../components/Form/Input";
import {
  signUpSchema,
  signInSchema,
} from "../../../validation/formInputValidation";

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signin"; // Default to sign-in

  const isSignUp = mode === "signup";

  const formik = useFormik({
    initialValues: isSignUp
      ? {
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptedTerms: false,
        }
      : { email: "", password: "", rememberMe: false },
    validationSchema: isSignUp ? signUpSchema : signInSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  return (
    <div className="min-h-[80vh] p-8 flex items-center justify-center font-montserrat bg-[#2c2b3c] text-[#ffffff]">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-[#1b2432]">
        <h2 className="text-2xl font-bold mb-4 text-[#b76d68]">
          {isSignUp ? "Sign up for free" : "Sign in to your account"}
        </h2>
        <p className="mb-4 text-sm">
          Or{" "}
          <Link
            to={`?mode=${isSignUp ? "signin" : "signup"}`}
            className="hover:underline text-[#b76d68]"
          >
            {isSignUp
              ? "sign in to your existing account"
              : "sign up for a new account"}
          </Link>
        </p>

        <form onSubmit={formik.handleSubmit}>
          {isSignUp && (
            <Input
              label="Full Name"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              formik={formik}
            />
          )}
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
          {isSignUp && (
            <Input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              formik={formik}
            />
          )}
          {!isSignUp && (
            <Checkbox
              label="Remember me"
              id="rememberMe"
              name="rememberMe"
              formik={formik}
              checked={formik.values.rememberMe}
              onChange={(e) =>
                formik.setFieldValue("rememberMe", e.target.checked)
              }
            />
          )}
          {isSignUp && (
            <Checkbox
              label="By signing up, you agree to our"
              placeholder="terms of use"
              id="acceptedTerms"
              name="acceptedTerms"
              formik={formik}
              checked={formik.values.acceptedTerms}
              onChange={(e) =>
                formik.setFieldValue("acceptedTerms", e.target.checked)
              }
            />
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg font-semibold bg-[#b76d68] hover:bg-[#8a524e]"
          >
            {isSignUp ? "Sign up" : "Sign in"}
          </button>

          <div className="flex items-center justify-between my-4">
            <hr className="w-full border-[#403f4c]" />
            <span className="w-full text-center text-sm mx-2">
              Or continue with
            </span>
            <hr className="w-full border-[#403f4c]" />
          </div>

          <div className="flex justify-center gap-4">
            <SocialButton
              icon={faGithub}
              //   label="GitHub"
              onClick={() => alert("GitHub Login")}
            />
            <SocialButton
              icon={faGoogle}
              //   label="Google"
              onClick={() => alert("Google Login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
