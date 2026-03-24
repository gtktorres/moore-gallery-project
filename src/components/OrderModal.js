// components/OrderModal.js
import { useOrder } from '../components/OrderContext';

const OrderModal = () => {
    const { orderItems, removeFromOrder, isOrderOpen, toggleOrder } = useOrder();

    if (!isOrderOpen) return null; // Don't render if the order is not open

    return (
        <div className={`order-modal ${isOrderOpen ? 'open' : ''}`}>
            
            {orderItems.length === 0 ? (
                <p>No items in your order.</p>
                ) : (
                    <ul>
                        {orderItems.map((item) => (
                            <li key={item.id}>  
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => removeFromOrder(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
            <button onClick={toggleOrder}className="close-button">Close</button>
            
        </div>
    );
};

export default OrderModal;