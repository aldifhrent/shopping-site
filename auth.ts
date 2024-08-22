import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
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
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword as string
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" || account?.provider === "github") {
        try {
          const existingUser = await prismadb.user.findUnique({
            where: { email: user.email as string },
          });

          if (existingUser) {
            await prismadb.user.update({
              where: { id: user.id },
              data: { role: "MEMBER" },
            });
          } else {
            await prismadb.user.create({
              data: {
                ...user,
                role: "MEMBER",
              },
            });
          }
        } catch (error) {}
      }

      return true;
    },
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
});
