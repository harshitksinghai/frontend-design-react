import { z } from "zod";

export const formFieldValidations = {
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid Email"),

  fname: z
    .string({ required_error: "First Name is required" })
    .min(2, "First Name must be at least 2 characters"),

  mname: z.string().nullable().optional(),

  lname: z
    .string({ required_error: "Last Name is required" })
    .min(2, "Last Name must be at least 2 characters"),

  password: z.string({ required_error: "Password is required" }),

  confirmPassword: z.string({ required_error: "Confirm password to continue" }),

  phNo: z.string({ required_error: "Phone number is required" }),

  dob: z
    .string({ required_error: "Date of Birth is required" })
    .min(1, "Date of Birth is required")
    .refine((dob) => {
      const date = new Date(dob);
      return !isNaN(date.getTime());
    }, "Invalid date format")
    .refine((dob) => {
      const date = new Date(dob);
      const today = new Date();
      return date <= today;
    }, "Date of birth cannot be in the future")
    .refine((dob) => {
      const date = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      return age <= 130;
    }, "Age cannot be more than 130 years"),
};
