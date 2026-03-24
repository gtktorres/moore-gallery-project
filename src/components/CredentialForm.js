"use client";
import '../styles/globals.css'; // Ensure you have the correct path to your CSS file

import { 
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";




        console.log(status);
        

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

    
export default CredentialForm;