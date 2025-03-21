"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const GoogleLoginButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-login-btn"),
        { theme: "outline", size: "large", text: "continue_with" }
      );
    };
  }, []);

  const handleCredentialResponse = async (response: any) => {
    const token = response.credential;

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    if (res.ok) {
      window.location.reload(); // Refresh after login
    } else {
      console.error("Google Authentication failed");
    }
  };

  return <div id="google-login-btn"></div>;
};

export default GoogleLoginButton;
