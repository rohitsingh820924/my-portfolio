'use client'
import { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'

export default function Cards() {

  const count = useSelector((state:any) => state.user.value)
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
    },[count])
    useEffect(() => {
        console.warn(inquiries);
    },[inquiries])
  return (
    <div className="bg-black min-h-svh">
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={inquiries} />
      </div>
    </div>
  );
}
