"use client";
import React, { createContext, useContext, useState } from 'react';
//import getData from '../app/api/products/route';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item) => {
        item.quantity++;
        if(!cartItems.find(cartItem => cartItem.id === item.id)){
            setCartItems(prevItems => [...prevItems, item]);
        } // This creates a new array with the new item added
        //setCartItems([cartItems]);
    };

    const removeFromCart = (itemId) => {
        // Update items immutably: decrement quantity for matching item, then remove any with quantity <= 0
        setCartItems(prevItems => {
            const updated = prevItems
                .map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item)
                .filter(item => item.quantity > 0);
            return updated;
        });
    };

    const toggleCart = () => {

        console.log('Cart items:', cartItems);
        setIsCartOpen(!isCartOpen);
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    const mapCartItems = () => {
        cartItems.map((item) => 
            cartItems.Has(item.id)
            ?
            (cartItems[item].quantityInCart += 1)
            :
            (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            )
            
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, subtotal, mapCartItems, addToCart, removeFromCart, toggleCart, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;