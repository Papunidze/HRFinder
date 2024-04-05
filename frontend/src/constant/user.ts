import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets")
    .required("Name is required"),
  avatar: yup.string().required("Email is required"),
});

export const updatePasswordSchema = yup.object().shape({
  password: yup.string().min(6, "errors.min_6").required("errors.requires"),
  newPassword: yup.string().min(6, "errors.min_6").required("errors.requires"),
  newPasswordConfirm: yup
    .string()
    .test("passwords-match", "errors.not_matches_password", function (value) {
      return value === this.parent.newPassword;
    })
    .required("errors.requires"),
});
