"use client";
import { useState } from 'react';
import React from 'react';
import '../styles/globals.css'; // Ensure you have the correct path to your CSS file

const formRef = React.createRef();
const ContactForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

        const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        };

        const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await res.text();
        setStatus(result);
        };

    return(
        <form ref={formRef}>
              <div className="Contact" style={{ marginLeft: "3rem"}}>
                <div>
                  <h2 style={{fontSize: "4em"}}>Contact Us</h2>
                  <br />
                  <p>If you’re interested in collaborating, please provide your information, and we will contact you soon. We look forward to connecting with you.</p>
                  <br />
                  <br />
                  <p 
                    style={{ textDecoration: "underline"}}
                  >
                    gtktorres@gmail.com
                  </p>
                  <p>7205390819</p>
                  <br />
                  <br />
                  <p>Name (required)</p>
                  <br />
                <div style={{ display: 'grid', maxWidth: "100%", gridTemplateColumns: '1fr 1fr', gridGap: '5rem'}}>
                  <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          borderWidth: "1px",
                        }}
                      >
                        First Name
                      <input
                        type="firstName"
                        name="firstName"
                        onChange={handleChange}
                        style={{ color: "black", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)", paddingRight: ".25rem" }}
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
                        Last Name
                      <input
                        type="lastName"
                        name="lastName"
                        onChange={handleChange}
                        style={{  color: "black", marginRight: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "4rem", marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)" }}
                      />
                      </label>
                  </div>
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
                      Email (required)
                    <input
                      type="email"
                      name="email"
                      border-radius="25px"
                      onChange={handleChange}
                      style={{ color: "black", fontSize: "2rem", borderRadius: "25px", display: "block", width: "50%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
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
                      Message (required)
                    <input
                      type="message"
                      name="message"
                      onChange={handleChange}
                      style={{ color: "black", marginRight: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "10rem", marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)" }}
                    />
                    </label>
                </div>
                <div>
                  <label
                    style={{ 
                        textAlign: "left",
                        borderRadius: "5em",
                        marginLeft: "5rem",
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
                      marginLeft: "5rem",
                      marginBottom: "1rem",
                      borderWidth: "1px",
                      backgroundColor: "hsla(0,0%,0%,1)",
                      padding: "1rem 2rem",
                      display: "block",
                      width: "25%",
                      height: "5rem",
                      cursor: "pointer"
                    }}
                    onClick={() => handleSubmit}
                    >
                    SEND
                    </button>
                  </label>
                </div>
                </div>
              </div>
            </form>
    );
}
    
export default ContactForm;