'use client'
// components/PaymentForm.js
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const OrderPaymentForm = () => {
    const [artItem, setArtItem] = useState('');
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [stripe, setStripe] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const orderData = {
            ArtItem: artItem,
            Amount: parseFloat(amount),
            Currency: 'usd',
            CustomerEmail: email,
        };

        const response = await fetch('/api/orders/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const result = await response.json();
        console.log('Order Result:', result);
    };

    return (
        <Elements stripe={stripePromise}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Art Item"
                    value={artItem}
                    onChange={(e) => setArtItem(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={!stripe}>Pay</button>
            </form>
        </Elements>
    );
};

export default OrderPaymentForm;
