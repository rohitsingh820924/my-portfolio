import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dnConnect';
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect()
  const reqBody = await req.json()
  const { otp } = reqBody;

  

  console.log(otp);
  
  try {

    if(otp != 7879) {
        return NextResponse.json({ message: 'Wrong Otp'});
    }
    // token Data
    const tokenData = {
        otp: otp,
        name: "Rohit Singh"
    }
    // Create Token
    const token = await jwt.sign(tokenData, process.env.NEXT_TOKEN_SECRET! , {expiresIn: "1h"})


    
      const response = NextResponse.json({ 
        message: 'Logged in',
        success: true,
    });

    response.cookies.set("token", token, {
        httpOnly: true
    })

    return response;

    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error loging in' });
    }
  }
