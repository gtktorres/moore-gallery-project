// components/CartIcon.js
import { useCart } from '../components/CartContext';

const CartIcon = () => {
    const { toggleCart } = useCart();

    return (
        <div onClick={toggleCart} className="cart-icon">
            🛒 
        </div>
    );
};

export default CartIcon;