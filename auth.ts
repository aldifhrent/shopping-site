import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/db";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      // async authorize(credentials) {
      //   if (!credentials.email || !credentials.password) {
      //     throw new Error("Invalid credentials");
      //   }

      //   const user = await prismadb.user.findUnique({
      //     where: {
      //       email: credentials.email as string,
      //     },
      //   });

      //   if (!user) {
      //     throw new Error("Invalid credentials");
      //   }

      //   const isCorrectPassword = await bcrypt.compare(
      //     credentials.password as string,
      //     user.hashedPassword as string
      //   );

      //   if (!isCorrectPassword) {
      //     throw new Error("Invalid credentials");
      //   }

      //   return user;
      // },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
});
