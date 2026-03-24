"use client"; // this is a client component 👈🏽
import '../styles/globals.css'
import '../styles/client.css'

const BuyNow = () => {
    return(
        <button
            className='my-button'
            onClick={() =>  window.location.href="/booking" }
        >
                  Book Now
        </button>
    );
}

export default BuyNow;