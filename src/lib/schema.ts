import * as z from "zod";

export const registerDTO = z
  .object({
    name: z.string().min(3, {
      message: "Name atleast 3 characters long",
    }),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(3, {
        message: "Password atleast 3 characters long",
      })
      .max(20, {
        message: "Password should be between 3 and 20 characters",
      }),
    confirmPassword: z.string().min(3),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

// Schema untuk produk
export const ProductDTO = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.string().nullable(), // nullable karena images bisa null
  quantity: z.number(),
  Categories: z.array(CategorySchema), // array of categories
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
