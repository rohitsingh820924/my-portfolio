'use client';
import React, { useState } from "react";
import { BottomGradient, LabelInputContainer } from "./InputBox";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import FloatingIcons from "./FloatingIcons";

const EmailGroup = () => {
    const countryCodes = [
        { country: 'India', code: 'IN', mobileCode: '+91' },
        { country: 'USA', code: 'US', mobileCode: '+1' },
        { country: 'Japan', code: 'JP', mobileCode: '+81' },
        { country: 'Australia', code: 'AU', mobileCode: '+61' },
        { country: 'China', code: 'CN', mobileCode: '+86' },
        { country: 'UK', code: 'GB', mobileCode: '+44' },
        { country: 'UAE', code: 'AE', mobileCode: '+971' },
        { country: 'Saudi Arabia', code: 'SA', mobileCode: '+966' }
      ];

       const [formData, setFormData] = useState({
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            countryCode: "+91"
          }); 
        
          const [isSubmitting, setIsSubmitting] = useState(false);
        
          const [error, setError] = useState(false);
        
          const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            
           if(formData.email) {
            try {
              setIsSubmitting(true);
              const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
              });
        
              const data = await response.json();
        
              if (response.ok) {
                console.log('Email sent successfully!');
                toast.success("Thanks For Connecting", {
                  theme: "dark"
                });
                setFormData({
                  email: "",
                  firstName: "",
                  lastName: "",
                  phone: "",
                  countryCode: "+91"
                })
        
                setIsSubmitting(false);
              } else {
                console.log(`Error: ${data.message}`);
                setIsSubmitting(false);
              }
            } catch (error) {
              console.log('An error occurred while sending the email.');
            }
           } else {
            setError(true);
            toast.error("Please Enter Email", {
              theme: "dark"
            });
           }
          };
  return (
    <>
     <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Rohit" type="text" value={formData.firstName} onChange={(e:any)=>setFormData((formData)=>({...formData, firstName:e.target.value }))} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Singh" type="text" value={formData.lastName} onChange={(e:any)=>setFormData((formData)=>({...formData, lastName:e.target.value }))} />
          </LabelInputContainer>
        </div>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Mobile Number</Label>
        <div className="grid grid-cols-3 gap-2 mb-4">
        <div>
          <select name="country_code" id="countryCode" className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400" value={formData.countryCode} onChange={(e:any)=>setFormData((formData)=>({...formData, countryCode:e.target.value }))} >
            {
              countryCodes?.map((item:any,i:any)=> <option key={i} value={item.mobileCode}>{item.country}</option>)
            }
          </select>
        </div>
        <div className="col-span-2">
          <Input id="phone" className="remove-arrow" placeholder="8209243183" type="number"  value={formData.phone} onChange={(e:any)=>setFormData((formData)=>({...formData, phone:e.target.value }))} />
        </div>
        </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" className="transition" style={error ? { boxShadow: '0px 0px 10px 2px #ff000096', border: '1px solid #ff000096' } : {}} placeholder="rohitsingh820924@gmail.com" type="email"  value={formData.email} onChange={(e:any)=>{setFormData((formData)=>({...formData, email:e.target.value })), setError(false)}} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-gray-200  dark:from-zinc-900 dark:to-zinc-900 to-gray-200 block dark:bg-zinc-800 w-full dark:text-white text-black  rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit" disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
        <FloatingIcons />
        </div>
            </form>
    </>
  )
}

export default EmailGroup