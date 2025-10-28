"use client";
import React, { createContext, useContext, useState } from 'react';
//import getData from '../app/api/products/route';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const exists = prevItems.find(ci => ci.id === item.id);
            if (exists) {
                return prevItems.map(ci =>
                    ci.id === item.id ? { ...ci, quantity: (ci.quantity || 1) + 1 } : ci
                );
            } else {
                return [...prevItems, { ...item, quantity: item.quantity || 1 }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => {
            const updated = prevItems
                .map(item => item.id === itemId ? { ...item, quantity: (item.quantity || 1) - 1 } : item)
                .filter(item => item.quantity > 0);
            console.log('Updated cart items:', updated);
            return updated;
        });
        console.log('Removed item with id:', itemId);
    };

    const toggleCart = () => {
        console.log('Cart items:', cartItems);
        setIsCartOpen(prev => !prev);
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

    const mapCartItems = () => {
        return cartItems.map((item) => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>
                    Remove
                </button>
            </div>
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, subtotal, mapCartItems, addToCart, removeFromCart, toggleCart, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;