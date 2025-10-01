import React, { createContext, useContext, useState } from 'react';
import CartContext from '../components/CartContext';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderItems, setOrderItems] = useState([]);
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const addToOrder = (item) => {
        setOrderItems((prevItems) => [...prevItems, item]);
    };
    const removeFromOrder = (itemId) => {
        setOrderItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const toggleOrder = () => {
        setIsOrderOpen(!isOrderOpen);
    };

    return (
        <CartContext.Provider value={{ orderItems, addToOrder, removeFromOrder, toggleOrder, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );

};

export const useOrder = () => useContext(OrderContext);

export default useOrder