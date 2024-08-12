import * as z from "zod";

export const registerDTO = z
  .object({
    name: z.string().min(3, {
      message: "Name atleast 3 characters long"
    }),
    email: z.string().email().toLowerCase(),
    password: z.string().min(3, {
      message: "Password atleast 3 characters long"
    }).max(20, {
      message: "Password should be between 3 and 20 characters"
    }),
    confirmPassword: z.string().min(3),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const ProductDTO = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.coerce.number(),
  images: z.string().url(),
});

export const loginDTO = z
  .object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(3).max(20),
    confirmPassword: z.string().min(3),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
