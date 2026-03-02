import CredentialForm from '@/components/CredentialForm';


const Login = () => {
    return (
        <div style={{ background: 'hsla(240, 11%, 93%, 1)', marginTop: '3rem'}}>
            <main className="container-login">
                <CredentialForm />
            </main>
            <footer>
        
                <div style={{ display: "grid", gridTemplateColumns: "1fr", justifyContent: "center", textAlign: "center", marginTop: "min(5rem, 15%)", padding: "2rem", bottom: "0", backgroundColor: "hsla(240, 11%, 93%, 1)" }}>
                    <h2 style={{ color: "black", fontSize: "2rem", textAlign: "center", margin: "3rem" }}>
                    
                    </h2>
                    <div style={{ marginTop: "2.5rem"}}>
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
