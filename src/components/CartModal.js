// components/CartModal.js
import { useCart } from './CartContext';
import Image from 'next/image';
import React from 'react';

const CartModal = () => {
    const { cartItems, isCartOpen, removeFromCart, subtotal } = useCart();

    if (!isCartOpen) return null; // Don't render if the cart is not open

    return (
        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? 
                (
                    <p>No items in your cart.</p>
                ) : 
                (
                    <div>
                        <h3>Subtotal: ${subtotal}</h3>
                        {cartItems.map((item) => 
                            (
                                <div key={item.id}>
                                    <Image src={item?.image} alt={item.name} width={100}></Image>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>{item.quantity}</p>  
                                    <button onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            )
                        )}
                        <form action="/api/create-checkout-session" method="POST">
                        <button id="submit" className="checkout-button" role="link">Proceed to Checkout</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default CartModal;
