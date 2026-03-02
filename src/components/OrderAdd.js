// components/OrderAdd.js
import React from 'react';
import { useCart } from './CartContext';

const OrderAdd = ({ item }) => {

    const { addToCart, cartItems } = useCart(); //destructure addToCart from useCart

    const handleAddToCart = () => {
        addToCart(item);
        console.log('Added to cart:', item);
        console.log('Current cart items:', cartItems);
    };

    return (
        
        <div className="order-add-container">
            <button style={{
                    backgroundColor: "#0a4e9c",
                    borderColor: "#0a4e9c",
                    borderRadius: "1rem",
                    marginTop: ".5rem",
                    height: "2rem", 
                    cursor: "pointer",
                  }} onClick = {handleAddToCart} className="add-to-cart-button"> Buy Now </button>
        </div>       

    );
};

export default OrderAdd;