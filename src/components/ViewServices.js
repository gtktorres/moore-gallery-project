'use client'
import '../styles/globals.css'

const Viewservices = () => {
    return(
        <button
                  style={{
                    color: "hsla(240, 11%, 93%, 0.902)", 
                    marginRight: "5rem",
                    marginLeft: "5rem",
                    fontSize: "1.5em",
                    borderRadius: "5em",
                    borderWidth: "0",
                    backgroundColor: "#0a4e9c",
                    padding: "1rem 2rem",
                    display: "block",
                    height: "5rem",
                    cursor: "pointer",
                  }}
                  onClick={() =>  window.location.href="/services" }
                >
                  View Services
        </button>
    )
}

export default Viewservices;