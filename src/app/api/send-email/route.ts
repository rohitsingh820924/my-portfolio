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
      <div style="background-color:#f2f2f2;display:flex;align-items:center;justify-content:center;height:100%;width:100%;align-items:center;justify-content:center;padding:20px;font-family:system-ui"><div style="border:1px solid #f2f2f2;background-color:#fff;max-width:400px;width:100%;"><h1 style="background-color:#35b7e7;padding:20px;text-align:center;margin-block:0;font-size:32px;color:#fff">New Email Submission</h1><div style="padding:20px"><p style="margin-bottom:30px;margin-top:0;text-align:center;font-size:20px;font-weight:500">Hi Rohit,<span style="color:#35b7e7!important;"> ${firstName} ${lastName} </span>has Submmited an Email.</p><p style="margin-bottom:10px">Email:<strong style="color:#35b7e7"> ${email}</strong></p><p style="margin-bottom:0">Phone No:<strong style="color:#35b7e7"> ${countryCode} ${phone}</strong></p></div><div></div>
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
