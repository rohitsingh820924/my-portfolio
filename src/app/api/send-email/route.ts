import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const reqBody = await req.json()
  const { email, firstName, lastName, phone, countryCode } = reqBody.formData;
  
  // Create a transporter with your SMTP credentials
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: process.env.NEXT_URL_SMTP_HOST, // e.g., 'smtp.example.com'
    port: process.env.NEXT_URL_SMTP_PORT, // e.g., 587 or 465
    secure: process.env.NEXT_URL_SMTP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_URL_SMTP_USER, // your SMTP username
      pass: process.env.NEXT_URL_SMTP_PASS, // your SMTP password
    },
    connectionTimeout: 5 * 60 * 1000, // 5 min
  });
  
  // Set up email data
  let mailOptions = {
    from: process.env.NEXT_URL_SMTP_USER, // sender address
    to: process.env.NEXT_URL_RECEIVER_EMAIL, // list of receivers (your email)
    subject: 'New Email Submission', // Subject line
    text: `User submitted: ${email}`, // plain text body
    html: `
      <h1>New Email Submission</h1>
      <p>Hi Rohit, ${firstName} ${lastName} has Submmited an Email.</p>
      <p>Email: <strong>${email}</strong></p>
      <p>Phone No: <strong>${countryCode} ${phone}</strong></p>
    `, // HTML body
  };
  

  console.log(mailOptions);
  
  
  try {
    // Send mail
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully!',mailOptions });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending email' });
    }
  }
