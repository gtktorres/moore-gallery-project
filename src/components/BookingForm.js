"use client";
import { useState } from 'react';
import React from 'react';
import '../styles/globals.css'; // Ensure you have the correct path to your CSS file

const formRef = React.createRef();
const BookingForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

      console.log(status);
        const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus('Booking...');

            const res = await fetch('/api/send-booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            alert(`Thank you ${formData.name}! We will contact you at ${formData.email}.`);
                    if (formRef.current) {
                    formRef.current.reset(); // Reset the form after submission
                    }
            const result = await res.text();
            setStatus(result);
        };

    return(
        <form ref={formRef}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', marginTop: '3rem' }}>
                  <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          marginLeft: "3.5rem",
                          borderWidth: "1px"
                        }}
                      >
                        Name
                      <input
                        type="name"
                        name="Enter your name"
                        required
                        onChange={handleChange}
                        style={{ padding: "1rem", alignContent: "center", color: "black", marginLeft: "3.5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)"}}
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
                        marginLeft: "3.5rem",
                        borderWidth: "1px" 
                      }}
                    >
                      Email
                    <input
                      type="email"
                      name="Enter your email"
                      required
                      onChange={handleChange}
                      border-radius="25px"
                      style={{ padding: "1rem", alignContent: "center", color: "black", marginLeft: "3.5rem",  fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
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
                  <hr style={{margin:"1rem"}}></hr>
                  <button
                    type="submit"
                    style={{ 
                      fontSize: "1.5em",
                      fontWeight: "100",
                      textAlign: "center",
                      color: "hsla(0,0%,100%,1)",
                      borderRadius: "5em",
                      marginLeft: "3.5rem",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      borderWidth: "1px",
                      backgroundColor: "#0a4e9c",
                      padding: "1rem 2rem",
                      display: "block",
                      width: "35%",
                      height: "5rem",
                      cursor: "pointer"
                    }}
                    onClick={() => handleSubmit}
                  >
                    Book Now
                  </button>
                  </label>
                </div>
                
                </div>
            </form>
    );
}
    
export default BookingForm;