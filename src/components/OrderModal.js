import OrderPaymentForm from '../components/OrderPaymentForm';
import { useState } from 'react';

const OrderModal = () => {
    const { isOrderOpen, toggleOrder } = useState(false);

    if (!isOrderOpen) return null; // Don't render if the order modal is not open

    return (
        <div className={`order-modal ${isOrderOpen ? 'open' : ''}`}>
            <h2>Place Your Order</h2>
            <OrderPaymentForm />
            <button onClick={toggleOrder}className="close-button">Close</button>
            
        </div>
    );
};

export default OrderModal;