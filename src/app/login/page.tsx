'use client'; // Marks this file as a client-side component

import React, { useEffect } from 'react'
import Login from '@/components/Login'
import { apiGet } from '@/lib/api'

const baseUrl = process.env.NEXT_BASE_URL;

export default function Page() {
  useEffect(() => {
    async function getOtp() {
      try {
        await apiGet(`${baseUrl}/api/send-otp`);
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    }

    getOtp();
  }, []);

  return (
    <div className='flex min-h-svh items-center justify-center dark:bg-black bg-white antialiased '>
      <Login />
    </div>
  )
}
