"use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, toggleCart, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;