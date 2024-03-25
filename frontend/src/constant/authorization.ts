import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const signUpScheme = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .test("passwords-match", "Passwords do not match", function (value) {
      return value === this.parent.password;
    })
    .required("Password confirmation is required"),
});

export const recoveryScheme = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
