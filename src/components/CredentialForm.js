"use client";
import { useState } from 'react';
import React from 'react';
import '../styles/globals.css'; // Ensure you have the correct path to your CSS file
import Login from '@/app/api/logins/route';
import Link from 'next/link';


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
        <form ref={formRef}>
              <div className='center' >
                  <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          borderWidth: "1px"
                        }}
                      >
                        Email
                      <input
                        type="name"
                        name="Enter your email"
                        required
                        onChange={handleChange}
                        style={{ padding: "1rem", alignContent: "center", color: "black", fontSize: "2rem", borderRadius: "25px", display: "block", width: "100%", height: "100%",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)"}}
                      />
                      </label>
                  </div>
                  <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          borderWidth: "1px"
                        }}
                      >
                        Password
                      <input
                        type="password"
                        name="password"
                        required
                        onChange={handleChange}
                        style={{ padding: "1rem", alignContent: "center", color: "black", fontSize: "2rem", borderRadius: "25px", display: "block", width: "100%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)"}}
                      />
                      </label>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", justifyContent: "center", textAlign: "center", padding: "2rem", bottom: "0", backgroundColor: "hsla(240, 11%, 93%, 1)" }}>
                      <div>
                        <label
                          style={{ 
                              textAlign: "left",
                              fontSize: "1.5em",
                              color: "black",
                              borderRadius: "5em",
                              borderWidth: "1px"
                          }}
                        >
                          <Link href="/account">
                          <button
                          type="submit"
                          style={{ 
                            fontSize: "1.5em",
                            fontWeight: "100",
                            textAlign: "center",
                            color: "hsla(0,0%,100%,1)",
                            borderRadius: "5em",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            borderWidth: "1px",
                            backgroundColor: "#0a4e9c",
                            padding: "1rem 2rem",
                            display: "block",
                            width: "100%",
                            height: "5rem",
                            cursor: "pointer"
                          }}
                          onClick={() => handleSubmit}
                        >
                        Login
                        </button>
                      </Link>
                        </label>
                      </div>
                      <div>
                        <label
                          style={{ 
                              textAlign: "left",
                              fontSize: "1.5em",
                              color: "black",
                              borderRadius: "5em",
                              borderWidth: "1px"
                          }}
                        >
                          <button
                          type="submit"
                          style={{ 
                            fontSize: "1.5em",
                            fontWeight: "100",
                            textAlign: "center",
                            color: "hsla(0,0%,100%,1)",
                            borderRadius: "5em",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            borderWidth: "1px",
                            backgroundColor: "#0a4e9c",
                            padding: "1rem 2rem",
                            display: "block",
                            width: "100%",
                            height: "5rem",
                            cursor: "pointer"
                          }}
                          onClick={() => handleSubmit}
                        >
                          Register
                        </button>
                        </label>
                      </div>
                      </div>
                <hr style={{margin:"1rem", text:"or"}}></hr>
                <div>
                  <label
                    style={{ 
                        textAlign: "left",
                        fontSize: "1.5em",
                        color: "black",
                        borderRadius: "5em",
                        marginLeft: "1.5rem",
                        borderWidth: "1px"
                    }}
                  >
                    <button
                    type="submit"
                    style={{ 
                      fontSize: "1.5em",
                      fontWeight: "100",
                      textAlign: "center",
                      color: "hsla(0,0%,100%,1)",
                      borderRadius: "5em",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      borderWidth: "1px",
                      backgroundColor: "#0a4e9c",
                      padding: "1rem 2rem",
                      display: "block",
                      width: "100%",
                      height: "5rem",
                      cursor: "pointer"
                    }}
                    onClick={() => handleSubmit}
                  >
                    Continue with Google
                  </button>
                  </label>
                </div>
                <div>
                  <label
                    style={{ 
                        textAlign: "left",
                        fontSize: "1.5em",
                        color: "black",
                        borderRadius: "5em",
                        marginLeft: "2rem",
                        borderWidth: "1px"
                    }}
                  >
                    <button
                    type="submit"
                    style={{ 
                      fontSize: "1.5em",
                      fontWeight: "100",
                      textAlign: "center",
                      color: "hsla(0,0%,100%,1)",
                      borderRadius: "5em",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      borderWidth: "1px",
                      backgroundColor: "#0a4e9c",
                      padding: "1rem 2rem",
                      display: "block",
                      width: "100%",
                      height: "5rem",
                      cursor: "pointer"
                    }}
                    onClick={() => handleSubmit}
                  >
                    Continue with Apple
                  </button>
                  </label>
                </div>
                </div>
            </form>
    );
}
    
export default CredentialForm;