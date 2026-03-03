"use client";
import { useState } from 'react';
import React from 'react';
import '../styles/globals.css'; // Ensure you have the correct path to your CSS file
import Login from '@/app/api/logins/route';
import Link from 'next/link';
import { 
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";


const formRef = React.createRef();
const CredentialForm = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [status, setStatus] = useState('');

        const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        };
        console.log(status);
        const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus('Logging in...');

            const res = await Login(formData.email, formData.password);
            alert(`Thank you ${formData.email}! You are now logged in.`);
                    
            const result = await res.text();
            setStatus(result);

            handleEmailChange(formData.email);
            
        };

    return(
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <SignedOut>
                  <SignInButton />
                  <SignUpButton>
                    <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                {/* Show the user button when the user is signed in */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
                
                </div>
    );
}
    
export default CredentialForm;