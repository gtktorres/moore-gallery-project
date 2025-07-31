// components/CartIcon.js
import { useCart } from '../components/CartContext';

const CartIcon = () => {
    const { cartItems, toggleCart } = useCart();

    return (
        <div onClick={toggleCart} className="cart-icon">
            🛒 <span>{cartItems.length}</span>
        </div>
    );
};

export default CartIcon;