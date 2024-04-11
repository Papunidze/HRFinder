import * as yup from "yup";

export const membersScheme = yup.object().shape({
  id: yup.string().trim().required(),
  about: yup.string().required(),
  experience: yup.string().trim().required(),
  education: yup.string().trim().required(),
  skills: yup.array().required(),
  availability: yup.string().trim().required(),
  location: yup.string().trim().required(),
  birthday: yup.string().trim().required(),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: yup.string().trim().required(),
  name: yup.string().trim().required("Name is required"),
  avatar: yup.string().trim().required(),
  role: yup.string().trim().required(),
});
