"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import FloatingIcons from "./FloatingIcons";

export default function InputBox() {

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
    countryCode: ""
  }); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.warn(formData);
    
    try {
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
      } else {
        console.log(`Error: ${data.message}`);
      }
    } catch (error) {
      console.log('An error occurred while sending the email.');
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" value={formData.firstName} onChange={(e:any)=>setFormData((formData)=>({...formData, firstName:e.target.value }))} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" value={formData.lastName} onChange={(e:any)=>setFormData((formData)=>({...formData, lastName:e.target.value }))} />
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
          <Input id="email" placeholder="projectmayhem@fc.com" type="number"  value={formData.phone} onChange={(e:any)=>setFormData((formData)=>({...formData, phone:e.target.value }))} />
        </div>
        </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email"  value={formData.email} onChange={(e:any)=>setFormData((formData)=>({...formData, email:e.target.value }))} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
        <FloatingIcons />
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
