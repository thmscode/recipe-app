import { z } from "zod";

export const SignupSchema = z.object(
  {
    firstName: z.string()
      .min(1, 'Name is required')
      .max(20, 'Cannot exceed 20 characters')
      .regex(/^[A-Za-z\- ]+$/i, 'Alphabetical characters only'),
    lastName: z.string()
      .min(1, 'Last name is required')
      .max(20, 'Cannot exceed 20 characters')
      .regex(/^[A-Za-z\- ]+$/i, 'Alphabetical characters only'),
    email: z.string()
      .min(1, 'Email is required')
      .email('Email is invalid'),
    password: z.string()
      .min(8, 'Must contain at least 8 character(s)')
      .regex(/^[A-Za-z0-9#$%&*]+$/i, 'Only (#, $, %, &, *) special characters allowed'),
    confirmPassword: z.string()
      .min(1, 'Please re-enter your password')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ['confirmPassword']
  });

export type SignupFormValues = z.infer<typeof SignupSchema>;

export const LoginSchema = z.object(
  {
    email: z.string()
      .min(1, 'Email is required')
      .email('Email is invalid'),
    password: z.string()
      .min(1, 'Please enter a password')
  }
);

export type LoginFormValues = z.infer<typeof LoginSchema>;