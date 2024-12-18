"use client";
import React, { useEffect } from "react";

const OpenWhatsApp = () => {
  useEffect(() => {
    const whatsappUrl = "https://wa.me/918209243183?text=Hello%20there!";
    window.location.href = whatsappUrl;
  }, []);

  return (
    <div>
      <p>Redirecting to WhatsApp...</p>
    </div>
  );
};

export default OpenWhatsApp;
