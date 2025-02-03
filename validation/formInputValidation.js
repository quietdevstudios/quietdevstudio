import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters and spaces")
    .required("Full name is required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  acceptedTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

export const accountSettingsSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters and spaces")
    .required("Full name is required"),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  //   currentPassword: Yup.string().when(["newPassword", "confirmPassword"], {
  //     is: (newPassword, confirmPassword) => newPassword || confirmPassword,
  //     then: Yup.string().required("Current password is required"),
  //   }),

  //   newPassword: Yup.string().when("currentPassword", {
  //     is: (currentPassword) => !!currentPassword,
  //     then: Yup.string()
  //       .min(8, "New password must be at least 8 characters")
  //       .matches(/[a-z]/, "Must include a lowercase letter")
  //       .matches(/[A-Z]/, "Must include an uppercase letter")
  //       .matches(/\d/, "Must include a number")
  //       .matches(
  //         /[@#$%^&*()_+!]/,
  //         "Must include a special character (@#$%^&*()_+!)"
  //       )
  //       .required("New password is required"),
  //   }),

  //   confirmPassword: Yup.string().when("newPassword", {
  //     is: (newPassword) => !!newPassword,
  //     then: Yup.string()
  //       .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
  //       .required("Confirm password is required"),
  //   }),
});
