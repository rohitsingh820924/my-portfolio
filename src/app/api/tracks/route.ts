import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { sendTelegramNotification } from '@/lib/telegram';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect()
  const reqBody = await req.json()
  
  
  try {
    await sendTelegramNotification(reqBody);
      return NextResponse.json({ message: 'Message sent successfully!', reqBody});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending message' });
    }
  }
