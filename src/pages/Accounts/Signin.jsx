// import React from "react";
// import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";

// import { signInSchema } from "../../../validation/formInputValidation";
// import { Checkbox, Input } from "../../components/Form/Input";

// export const SignIn = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       confirmPassword: "",
//       rememberMe: false,
//     },
//     validationSchema: signInSchema,
//     onSubmit: (values) => {
//       // alert("signed in successfully", values);
//       console.log(values);
//     },
//   });

//   return (
//     <div
//       className="min-h-[80vh] p-8 flex items-center justify-center font-montserrat"
//       style={{ backgroundColor: "#2c2b3c", color: "#ffffff" }}
//     >
//       <div
//         className="w-full max-w-md p-6 rounded-lg shadow-lg"
//         style={{ backgroundColor: "#1b2432" }}
//       >
//         <h2 className="text-2xl font-bold mb-4" style={{ color: "#b76d68" }}>
//           Sign in to your account
//         </h2>
//         <p className="mb-4 text-sm">
//           Or{" "}
//           <Link
//             to="/signup"
//             className="hover:underline"
//             style={{ color: "#b76d68" }}
//           >
//             sign up for a new account
//           </Link>
//         </p>

//         <form onSubmit={formik.handleSubmit}>
//           <Input
//             label="Email"
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             formik={formik}
//           />
//           <Input
//             label="Password"
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             formik={formik}
//           />

//           <Checkbox
//             label="Remember me"
//             placeholder="Forgot your password"
//             id="rememberMe"
//             name="rememberMe"
//             formik={formik}
//             checked={formik.values.rememberMe}
//             onChange={(e) =>
//               formik.setFieldValue("rememberMe", e.target.checked)
//             }
//           />

//           <button
//             type="submit"
//             className="w-full py-2 px-4 rounded-lg font-semibold bg-[#b76d68] hover:bg-[#8a524e]"
//           >
//             Sign in
//           </button>
//           <div className="flex items-center justify-between my-4">
//             <hr className="w-full" style={{ borderColor: "#403f4c" }} />
//             <span className="w-full text-center text-sm mx-2">
//               Or continue with
//             </span>
//             <hr className="w-full" style={{ borderColor: "#403f4c" }} />
//           </div>
//           <div className="flex justify-center gap-4">
//             <button
//               type="button"
//               className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]"
//             >
//               <FontAwesomeIcon icon={faGithub} color="#b76d68" size="xl" />
//             </button>
//             <button
//               type="button"
//               className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]"
//             >
//               <FontAwesomeIcon icon={faGoogle} color="#b76d68" size="xl" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// // How do I use the formik.setFieldValue to set the value to my checkboxes coming from the backend?
// // make the github and google buttons re-usable
