// components/OrderIcon.js
import { useOrder } from '../components/OrderContext';

const OrderIcon = () => {
    const { orderItems } = useOrder();

    return (
        <div className="order-icon">
            🛍️ <span style={{ onHover: { cursor: 'pointer' } }}>{orderItems.length}</span>
        </div>
    );
};

export default OrderIcon;