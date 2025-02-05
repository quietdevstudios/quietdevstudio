import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  formik,
  showPassword,
  setShowPassword,
  ...props
}) => {
  const isPasswordField = type === "password";
  const isError = formik.touched[name] && formik.errors[name];

  return (
    // [#403f4c]
    <>
      <div className="mt-6 flex flex-col gap-1">
        <label
          className="tracking-widest font-semibold text-xs mb-1 mx-1 w-fit"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative w-full">
          <input
            className={`text-white bg-[#121420] bg-none px-4 py-3 w-full rounded-lg font-medium tracking-wide shadow-2xl outline-none focus:border focus:border-[#403f4c] ${
              isError ? "border border-red-400" : ""
            }`}
            {...props}
            id={id}
            name={name}
            type={isPasswordField && showPassword ? "text" : type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name] ?? ""}
          />
          {isPasswordField && (
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              color="#5d5d61"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-fit"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                setShowPassword((prevShowPassword) => !prevShowPassword)
              }
            />
          )}
        </div>
        {isError ? (
          <div className="text-red-400 tracking-wide leading-6">
            {formik.errors[name]}
          </div>
        ) : null}
      </div>
    </>
  );
};

export const Checkbox = ({ label, id, name, placeholder, formik }) => {
  return (
    <div className="my-4 space-y-1">
      <div className="mx-1 flex items-start">
        <input
          type="checkbox"
          id={id}
          checked={formik.values[name]}
          onChange={(e) => formik.setFieldValue(name, e.target.checked)}
          className="mr-2 mt-1"
          style={{ accentColor: "#b76d68" }}
        />
        <div className="space-x-1 text-[13px]">
          <label htmlFor={id} className="cursor-pointer">
            {label}
          </label>
          <Link
            href="#"
            className="ml-auto hover:underline"
            style={{ color: "#b76d68" }}
          >
            {placeholder}
          </Link>
        </div>
      </div>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-[10px] mx-2 tracking-wide text-red-400">
          {formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
};

// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//       lastName: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
