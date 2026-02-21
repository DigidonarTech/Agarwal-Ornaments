import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, removeFromCart, cartCount } = useCart();

    // Total calculate
    const total = cartItems.reduce(
        (sum, item) => sum + (parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity),
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl text-gold mb-8">Your Cart</h1>
                <p className="text-gold/80 text-xl mb-12">Your cart is empty. Start shopping!</p>
                <Link
                    to="/collections"
                    className="px-10 py-5 bg-gold text-black uppercase tracking-wider hover:bg-gold-dark hover:text-white transition duration-500 rounded-sm text-lg inline-block"
                >
                    Explore Collections
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-gold text-center mb-12 tracking-wide">Your Cart ({cartCount} items)</h1>

            <div className="bg-gray-900/40 border border-gold/20 rounded-2xl overflow-hidden">
                {/* Cart Items List */}
                <div className="divide-y divide-gold/10">
                    {cartItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col sm:flex-row items-center justify-between p-6 gap-6 border-b border-gold/10 last:border-b-0"
                        >
                            {/* Image + Name */}
                            <div className="flex items-center gap-6 w-full sm:w-auto">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg border border-gold/30"
                                />
                                <div>
                                    <h3 className="text-xl text-gold font-medium">{item.name}</h3>
                                    <p className="text-gold/70">{item.price}</p>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-4 bg-gray-800/50 px-4 py-2 rounded-full">
                                <button
                                    onClick={() => decreaseQuantity(item.name)}
                                    disabled={item.quantity <= 1}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${item.quantity <= 1
                                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                            : 'bg-gray-800 text-gold hover:bg-gray-700'
                                        }`}
                                >
                                    -
                                </button>
                                <span className="text-xl text-gold font-medium w-10 text-center">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="w-10 h-10 bg-gray-800 text-gold rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal + Remove */}
                            <div className="flex items-center gap-8">
                                <p className="text-xl text-gold font-semibold min-w-[100px] text-right">
                                    ₹{(parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => removeFromCart(item.name)}
                                    className="text-red-500 hover:text-red-400 transition text-sm uppercase tracking-wider font-medium"
                                >
                                    Remove
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Total & Checkout */}
                <div className="p-8 border-t border-gold/20 bg-black/50">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-2xl text-gold font-medium">Grand Total</span>
                        <span className="text-3xl text-gold font-bold">₹{total.toFixed(2)}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <Link
                            to="/collections"
                            className="px-8 py-4 border-2 border-gold text-gold uppercase tracking-wider hover:bg-gold hover:text-black transition duration-500 rounded-sm text-center"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            to="/checkout"
                            className="px-10 py-4 bg-gold text-black uppercase tracking-widest font-medium hover:bg-gold-dark hover:text-white transition duration-500 rounded-sm shadow-lg"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;