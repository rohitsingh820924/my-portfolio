import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { sendTelegramNotification } from '@/lib/telegram';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect()
  const {visitorData, data} = await req.json()
  
  
  try {
    const payload = await sendTelegramNotification(visitorData, data);
      return NextResponse.json({ message: 'Message sent successfully!', payload});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending message' });
    }
  }
