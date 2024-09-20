import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dnConnect';
import InquiryModal from '@/modal/Inquiry';

export async function GET() {
    await dbConnect()
    try {
        const inquiries = await InquiryModal.find({});
        return NextResponse.json({ success: true, inquiries });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error Geting Inquiry' });
    }
  }
