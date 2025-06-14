import { z } from "zod";

export const formFieldValidations = {
    email: z.string()
        .min(1, "Email is required")
        .email("Invalid Email"),
    fname: z.string()
        .min(1, "First Name is required"),
    mname: z.string()
        .nullable()
        .optional(),
    lname: z.string()
        .min(1, "Last Name is required"),
    password: z.string()
        .min(1, "Password is required"),
    confirmPassword: z.string()
        .min(1, "Confirm password to continue"),
    phNo: z.string()
        .min(1, "Phone number is required"),
    dob: z.string()
        .min(1, "Date of Birth is required")      
}