import Account from "@/app/account/page";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs"

export default function Page() {
  
  return (
    <div style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center"
    }}>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <Account />
      </SignedIn>
    </div>
  );
}