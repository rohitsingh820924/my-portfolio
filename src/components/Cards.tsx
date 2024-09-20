'use client'
import { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { ToastContainer, toast } from 'react-toastify';

export default function Cards() {

    const [inquiries, setInquiries] = useState([])
    const getInquiry = async () => {
        try {
            const response = await fetch('/api/inquiry', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            const data = await response.json();
            setInquiries(data.inquiries)   
                     
      
            if (response.ok) {
              console.log('Email sent successfully!', data);
              toast.success("Thanks For Connecting", {
                theme: "dark"
              });
            } else {
              console.log(`Error: ${data.message}`);
            }
          } catch (error) {
            console.log('An error occurred while Loging in.');;
          }
    }

    useEffect(() => {
        getInquiry();
    },[])
    useEffect(() => {
        console.warn(inquiries);
    },[inquiries])
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={inquiries} />
    </div>
  );
}
