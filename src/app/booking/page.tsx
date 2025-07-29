import React from "react";
import BookingForm from "@/components/BookingForm";
import '../../styles/globals.css';

const Booking = () => {
  return (
      <div style={{ background: 'hsla(240, 11%, 93%, 1)', height: "100%" }}>
        <main>
          <div className='container-booking'>
            
              <div className='left'>
                <h2 style={{  marginTop: "4rem", marginLeft: "3rem", fontSize: "5em", fontKerning: "normal"}}>
                  Schedule your appointment
                </h2>
                <br />
                <p style={{  marginLeft: "3rem", marginTop: "2rem", marginBottom: "5rem"}}>
                Schedule a consultation with us to understand your need.  
                </p>
              </div>
            <div className='right' style={{ marginLeft: "3rem", maxWidth: "75%",position: "relative", border: "1px dashed black", borderRadius: "25px", padding: 0, margin: "4rem", boxSizing: "border-box"}}>
              <BookingForm />
            </div>
          </div>         
        </main>
        <footer></footer>
      </div>
    );
}

export default Booking;