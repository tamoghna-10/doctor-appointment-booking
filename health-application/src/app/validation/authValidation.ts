import * as Yup from "yup";

// Validation Schema for Sign In
export const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

// Validation Schema for Sign Up
export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
