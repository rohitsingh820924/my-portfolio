import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import jwt from 'jsonwebtoken';
import User from '@/modal/user';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.NEXT_GOOGLE_CLIENT_ID);

export async function POST(req: NextRequest) {
  await dbConnect();
  const { token } = await req.json();

  try {
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.NEXT_GOOGLE_CLIENT_ID, // Ensure this matches in Google Console
    });
    const payload = ticket.getPayload();
    if (!payload) {
      return NextResponse.json({ message: 'Invalid Google token' }, { status: 400 });
    }

    const { name, email } = payload;
    if (!email) {
      return NextResponse.json({ message: 'Email not found in Google response' }, { status: 400 });
    }

    // Check if user exists, otherwise create a new one
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email });
      await user.save();
    }

    // Create JWT token
    const tokenData = { name: user.name, email: user.email };
    const authToken = jwt.sign(tokenData, process.env.NEXT_TOKEN_SECRET!, { expiresIn: '1h' });

    // Set HTTP-only authentication cookie
    const response = NextResponse.json({ message: 'Authenticated', success: true });
    response.cookies.set('token', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: 'Authentication failed', error: error.message }, { status: 500 });
  }
}
