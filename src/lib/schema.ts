import * as z from "zod";

export const registerDTO = z
  .object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(3).max(20),
    confirmPassword: z.string().min(3),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const ProductDTO = z.object({
  name: z.string(),
  description: z.string(),
  price: z.coerce.number(),
  image: z.string().url(),
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
