import React from 'react'
import Login from '@/components/Login'
import { apiGet } from '@/lib/api'

const baseUrl = process.env.NEXT_BASE_URL;

async function getOtp(): Promise<void> {
  await apiGet(`${baseUrl}/api/send-otp`);
}

const Page: React.FC = async () => {
  await getOtp();
  return (
    <div className='flex min-h-svh items-center justify-center dark:bg-black bg-white antialiased'>
        <Login />
    </div>
  )
}

export default Page;
