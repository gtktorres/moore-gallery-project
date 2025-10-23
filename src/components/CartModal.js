// components/CartModal.js
import { useCart } from './CartContext';

const CartModal = () => {
    const { mapCartItems, cartItems, isCartOpen, toggleCart } = useCart();

    if (!isCartOpen) return null; // Don't render if the cart is not open

    return (
        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
            <button onClick={toggleCart}className="close-button">Close</button>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? 
                (
                    <p>No items in your cart.</p>
                ) : 
                (
                    <div>
                        {mapCartItems((cartItems))}
                    </div>
                )
            }
        </div>
    );
};

export default CartModal;
