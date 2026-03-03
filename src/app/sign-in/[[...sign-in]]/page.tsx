import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <SignIn />
    </div>
  );
}