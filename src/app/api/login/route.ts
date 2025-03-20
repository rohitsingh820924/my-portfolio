import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import jwt from 'jsonwebtoken';
import Portfolio from '@/modal/portfolio';

export async function POST(req: NextRequest) {
  await dbConnect();
  const reqBody = await req.json();
  const { otp } = reqBody;
  
  try {
    // Fetch the portfolio entry containing the OTP
    const portfolio = await Portfolio.findOne({});
    if (!portfolio) {
      return NextResponse.json({ message: 'Portfolio entry not found.' }, { status: 404 });
    }

    const { otpToken, name, email } = portfolio;

    // Check if the provided OTP matches the stored OTP
    if (otp != otpToken) {
      return NextResponse.json({ message: 'Invalid OTP.' }, { status: 400 });
    }

    // Create a token with essential data (name and email)
    const tokenData = { name, email };
    const token = jwt.sign(tokenData, process.env.NEXT_TOKEN_SECRET!, { expiresIn: '1h' });

    // Create a response and set the JWT as an HTTP-only cookie
    const response = NextResponse.json({ message: 'Logged in', success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "strict",
      maxAge: 3600 // 1 hour
    });

    return response;

  } catch (error:any) {
    console.error(error);
    return NextResponse.json({ message: 'Error logging in', error: error.message }, { status: 500 });
  }
}
