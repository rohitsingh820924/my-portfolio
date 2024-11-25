import React from 'react'
import Login from '@/components/Login'
import { apiGet } from '@/lib/api'

const baseUrl = process.env.NEXT_BASE_URL;

async function getOtp() {
  await apiGet(`${baseUrl}/api/send-otp`)
}

export default async function page() {
  await getOtp();
  return (
    <div className='flex min-h-svh items-center justify-center dark:bg-black bg-white antialiased '>
        <Login />
    </div>
  )
}