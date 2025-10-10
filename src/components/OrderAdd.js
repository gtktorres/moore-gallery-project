// components/OrderAdd.js
import React from 'react';
import { useCart } from './CartContext';

const OrderAdd = ({ item }) => {
    
    //console.log(item);

    const { addToCart } = useCart(); //destructure addToCart from useCart

    const handleAddToCart = () => {
        addToCart(item); // Call addToCart with the item prop
    };

    return (
        
        <div className="order-add-container">
            <button style={{ cursor: 'pointer' }} onClick = {() => handleAddToCart} className="add-to-cart-button"> Buy Now </button>
        </div>       

    );
};

export default OrderAdd;