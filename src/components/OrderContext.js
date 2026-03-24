import React, { createContext, useContext, useState } from 'react';
import CartContext from './CartContext';

export const useOrder = () => useContext(OrderContext);
export const useCart = () => useContext(CartContext);

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
        <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, toggleOrder, isOrderOpen }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;