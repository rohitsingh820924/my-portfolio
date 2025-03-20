import { NextRequest, NextResponse } from "next/server";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";
import User from "@/modal/user";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();
      let existingUser = await User.findOne({ email: user.email });
      
      if (!existingUser) {
        existingUser = await User.create({
          name: user.name,
          email: user.email,
          googleId: account?.providerAccountId,
        });
      }
      
      const token = jwt.sign(
        { id: existingUser._id.toString(), email: existingUser.email },
        process.env.NEXT_TOKEN_SECRET!,
        { expiresIn: "7d" }
      );

      return { token };
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  session: { strategy: "jwt" },
};

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ message: "Authentication successful" });
  const authResponse = (await NextAuth(req, authOptions)) as any;
  
  if (authResponse?.token) {
    response.cookies.set("auth_token", authResponse.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
    });
  }
  
  return response;
}
