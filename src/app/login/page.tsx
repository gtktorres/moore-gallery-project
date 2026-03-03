//import CredentialForm from '@/components/CredentialForm';
"use client";
import { SignInButton } from '@clerk/nextjs';
import { Sign } from 'crypto';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
    const router = useRouter();

    return (
        <Link href="/sign-in">Login</Link>
    );
}

export default Login;
