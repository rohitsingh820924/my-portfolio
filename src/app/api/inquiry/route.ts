import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
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

  export async function DELETE(req: NextRequest, res: NextResponse) {
    await dbConnect();

    try {
        const reqBody = await req.json();
        const { id } = reqBody; 

        if (!id) {
            return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
        }
        const deletedInquiry = await InquiryModal.findByIdAndDelete(id);

        if (!deletedInquiry) {
            return NextResponse.json({ success: false, message: 'Inquiry not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Inquiry deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error deleting inquiry' }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    await dbConnect();

    try {
        const reqBody = await req.json();
        const { id, ...updateFields } = reqBody; // Capture all fields except id
        
        // Ensure id is provided
        if (!id) {
            return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
        }

        // Update the inquiry with the fields provided in the request body
        const updatedInquiry = await InquiryModal.findByIdAndUpdate(
            id,
            updateFields, // Use all fields from the request body
            { new: true } 
        );

        if (!updatedInquiry) {
            return NextResponse.json({ success: false, message: 'Inquiry not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Inquiry updated successfully', inquiry: updatedInquiry }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error updating inquiry' }, { status: 500 });
    }
}


export const revalidate = 10;
