import * as yup from "yup";

// min 6 characters, 1 uppercase, 1 lowercase letter, 1 numeric digit
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

export const signupSchema = yup.object().shape({
  fullname: yup.string().required("Field is required"),
  username: yup.string().required("Field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Field is required"),
  password: yup
    .string()
    .min(6, "Password should be a minimum of 6 characters")
    .matches(passwordRules, {
      message: "Password must include an uppercase, lowercase and a number",
    })
    .required("Field is required"),
});

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Field is required"),
  password: yup.string().required("Field is required"),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Field is required"),
});

export const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup.number().required("Field is required"),
});

export const otpSchema = yup.object().shape({
  digits: yup.number().required("Field is required"),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password should be a minimum of 6 characters")
    .matches(passwordRules, {
      message: "Password must include an uppercase, lowercase and a number",
    })
    .required("Field is required"),
});
