import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import InquiryModal from '@/modal/Inquiry';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect()
  const reqBody = await req.json()
  const { email, firstName, lastName, phone, countryCode } = reqBody.formData;
  
  // Create a transporter with your SMTP credentials
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: process.env.NEXT_URL_SMTP_HOST || 'smtp.gmail.com', // Default to Gmail's SMTP server if not specified
    port: Number(process.env.NEXT_URL_SMTP_PORT) || 587, // Default to port 587 if not specified
    secure: process.env.NEXT_URL_SMTP_SECURE === 'true', // Convert string to boolean
    auth: {
      user: process.env.NEXT_URL_SMTP_USER, // your SMTP username
      pass: process.env.NEXT_URL_SMTP_PASS, // your SMTP password
    },
    // Note: You may need to include additional settings for Gmail, such as `tls` options:
    tls: {
      rejectUnauthorized: false // You may need to disable this for self-signed certs or similar issues
    }
  });
  
  // Set up email data
  let mailOptions = {
    from: process.env.NEXT_URL_SMTP_USER, // sender address
    to: process.env.NEXT_URL_RECEIVER_EMAIL, // list of receivers (your email)
    subject: 'New Email Submission', // Subject line
    text: `User submitted: ${email}`, // plain text body
    html: `
      <div style="border: 1px solid #f2f2f2; background-color: #eeeeee; max-width: 400px"; margin-auto;">
      <h1 style="background-color: #45a945; padding: 20px; text-align: center; margin-bottom: 20px; margin-top: 0px; font-size: 32px; color: #ffffff;">New Email Submission</h1>
      <p style="margin-bottom: 10px;">Hi Rohit, ${firstName} ${lastName} has Submmited an Email.</p>
      <p style="margin-bottom: 10px;">Email: <strong>${email}</strong></p>
      <p>Phone No: <strong>+${countryCode} ${phone}</strong></p>
      <div>
    `, // HTML body
  };

  const newInquiry = new InquiryModal({
    firstName,
    lastName,
    email,
    phone,
    countryCode 
  })
  
  
  try {
    // Send mail
      await transporter.sendMail(mailOptions);
      await newInquiry.save();
      return NextResponse.json({ message: 'Email sent successfully!',mailOptions, newInquiry});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending email' });
    }
  }
