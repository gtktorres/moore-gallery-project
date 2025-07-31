// components/CartModal.js
import { useCart } from '../components/CartContext';

const CartModal = () => {
    const { cartItems, removeFromCart, isCartOpen, toggleCart } = useCart();

    if (!isCartOpen) return null; // Don't render if the cart is not open

    return (
        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
            <button onClick={toggleCart}className="close-button">Close</button>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in your cart.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartModal;
