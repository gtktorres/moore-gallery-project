"use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]); // This creates a new array with the new item added
    };

    const removeFromCart = (itemId) => {
        setCartItems((cartItems) => cartItems.filter(item => item.id !== itemId));
    };

    const toggleCart = () => {

        console.log('Cart items:', cartItems);
        setIsCartOpen(!isCartOpen);
    };

    const mapCartItems = () => {
        cartItems.map((item) => 
            (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            ));
    };

    return (
        <CartContext.Provider value={{ cartItems, mapCartItems,addToCart, removeFromCart, toggleCart, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;