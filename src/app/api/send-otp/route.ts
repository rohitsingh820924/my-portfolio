import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import jwt from "jsonwebtoken"
import Portfolio from '@/modal/user';


export async function GET(req: NextRequest, res: NextResponse) {
  await dbConnect()
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

  // Generate a 4-digit OTP
  const otpToken = Math.floor(1000 + Math.random() * 9000);
  const portfolio = await Portfolio.findOneAndUpdate(
    {},
    { otpToken},
    { upsert: true, new: true }
  ); // Generates a 4-digit OTP
  
  // Set up email data
  let mailOptions = {
    from: process.env.NEXT_URL_SMTP_USER, // sender address
    to: process.env.NEXT_URL_RECEIVER_EMAIL, // list of receivers (your email)
    subject: 'Porfolio Login: OTP', // Subject line
    text: `Porfolio Login: OTP`, // plain text body
    html: `
      <div style="background-color:#f2f2f2;display:flex;height:100%;width:100%;align-items:center;justify-content:center;padding:20px;font-family:system-ui;"><div style="border:1px solid #f2f2f2;background-color:#ffffff;max-width:400px;width:100%;margin:auto;"><h1 style="background-color:#35b7e7;padding:20px;text-align:center;margin-block:0px;font-size:32px;color:#ffffff;">Portfolio OTP</h1><div style="padding:20px"><p style="margin-top:40px;text-align:center;font-size:20px;font-weight:500;">Hi Rohit, Your Portfolio Otp is:</p><button onclick="navigator.clipboard.writeText(this.innerText)" style="font-size:24px;font-weight:600;color:#35b7e7;background-color:#ffffff;border:1px solid #35b7e7;border-radius:5px;margin:40px auto;padding:20px;display:block;cursor:pointer;letter-spacing: 10px;">${otpToken}</button><a href="https://www.rohitsingh.cloud/login" style="background-color:#35b7e7;padding:10px 20px;text-align:center;margin-block:0px;font-size:18px;color:#ffffff;border-radius:5px;text-decoration:none;font-weight:500;display:block;">Go TO Dashboard</a></div></div></div>
    `, // HTML body
  };
  
  
  try {
    // Send mail
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully!',mailOptions})
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending email' });
    }
  }
