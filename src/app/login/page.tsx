import React from 'react'
import Login from '@/components/Login'
import { getOtp } from '@/lib/getOtp'

export default async function page() {
  await getOtp();
  return (
    <div className='flex min-h-svh items-center justify-center dark:bg-black bg-white antialiased '>
        <Login />
    </div>
  )
}