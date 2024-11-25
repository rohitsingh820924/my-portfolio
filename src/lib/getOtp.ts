import { apiGet } from '@/lib/api';

const baseUrl = process.env.NEXT_BASE_URL;

export async function getOtp() {
  try {
    await apiGet(`${baseUrl}/api/send-otp`);
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}
