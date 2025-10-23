// components/CartModal.js
import { useCart } from './CartContext';

const CartModal = () => {
    const { cartItems, isCartOpen, removeFromCart } = useCart();

    if (!isCartOpen) return null; // Don't render if the cart is not open

    return (
        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? 
                (
                    <p>No items in your cart.</p>
                ) : 
                (
                    <div>
                        {cartItems.map((item) => 
                        (
                            <div key={item.id}>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default CartModal;
