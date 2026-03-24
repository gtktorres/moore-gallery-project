"use client"
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs"
import { redirect } from "next/navigation";

export default function Page() {
  
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
      <SignedOut>
        <SignIn />
      </SignedOut>

      <SignedIn>
        { redirect("/account") } 
      </SignedIn>
    </div>
  );
}