"use client"; // If using App Router
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  );
}
