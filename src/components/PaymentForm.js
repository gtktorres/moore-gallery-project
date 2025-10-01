export const handleCheckout = async () => {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: [{ price: 'price_id', quantity: 1 }] }),
  });

  const data = await response.json();
  const stripe = await getStripe(); // Function to load Stripe.js
  await stripe.redirectToCheckout({ sessionId: data.id });
};
import { useState } from 'react';

export const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cardNumber, expiry, cvc, amount }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Payment successful', data);
            // Handle successful payment (e.g., show confirmation)
        } else {
            // Handle payment error
            console.error('Payment failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={cardNumber}  
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
                required
            />
            <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                required    
            />
            <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <button type="submit">Pay</button>
        </form>
    );
}