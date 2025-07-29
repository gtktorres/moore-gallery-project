import CredentialForm from '@/components/CredentialForm';
import Image from 'next/image';
import Link from "next/link";
import instagram from '../../components/Project-Images/instagram_socialnetwork_20033.png';


const Login = () => {
    return (
        <div style={{ background: 'hsla(240, 11%, 93%, 1)', marginTop: '3rem'}}>
            <main className="container-login">
                <CredentialForm />
            </main>
            <footer>
        
                <div style={{ display: "grid", gridTemplateColumns: "1fr", justifyContent: "center", textAlign: "center", marginTop: "min(5rem, 15%)", padding: "2rem", bottom: "0", backgroundColor: "hsla(240, 11%, 93%, 1)" }}>
                    <h2 style={{ color: "black", fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>
                    Moore Gallery
                    </h2>
                    <div style={{ marginTop: "2.5rem"}}>
                        <Link href="https://instagram.com/co_nnie9206">
                            <Image src={instagram} height="25" alt="Commerce Management Solution" />{" "}
                        </Link>
                        <Link href="https://instagram.com/co_nnie9206">
                            <Image src={instagram} height="25" alt="Commerce Management Solution" />{" "}
                        </Link>
                        <Link href="https://instagram.com/co_nnie9206">
                            <Image src={instagram} height="25" alt="Commerce Management Solution" />{" "}
                        </Link>
                    </div>                   
                </div>
                <div>
                    <p style={{ textAlign: "center", marginTop: "2rem", color: "black" }}>
                    © {new Date().getFullYear()} Moore Gallery. All rights reserved.
                    </p>
                </div>              
        </footer>
        </div>
    );
}

export default Login;
