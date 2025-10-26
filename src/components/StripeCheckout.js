   
   const handleCheckout = async(cartItems) => {
      const itemsToSend = Array.isArray(cartItems) ? cartItems : [];
      const response = await fetch('/api/checkout/route.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: itemsToSend.map((item) => ({ name: item.name, price: item.price, quantity: item.quantity })) // Pass the cart items to the backend
        }),
      });

      const data = await response.json();
      console.log('Checkout response data:', data);
      if (data.url) {
        window.location.assign(data.url); // Redirect to Stripe Checkout
      } else {
        console.error('Error:', data.error);
      }
    }

    export default handleCheckout;