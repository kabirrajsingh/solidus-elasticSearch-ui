"use client"// pages/cart.js
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cart.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
              <button 
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                onClick={() => removeFromCart(product._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-8">
          <button 
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
