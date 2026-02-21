import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (itemName) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === itemName);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.name === itemName ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      // Agar quantity 1 hai to remove kar do
      return prev.filter((i) => i.name !== itemName);
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== itemName));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

// src/context/CartContext.jsx

return (
  <CartContext.Provider 
    value={{ 
      cartItems, 
      addToCart, 
      decreaseQuantity, 
      removeFromCart, 
      cartCount,
      setCartItems 
    }}
  >
    {children}
  </CartContext.Provider>
); 
};

export const useCart = () => useContext(CartContext);