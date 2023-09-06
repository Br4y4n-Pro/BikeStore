import React, { createContext, useState } from 'react';

// Crea un nuevo contexto
const CartContext = createContext();

// Crea un componente proveedor del contexto
const CartProvider = ({ children }) => {
  // Define el estado del carrito usando useState
  const [cart, setCart] = useState([]);

  // Agrega funciones para agregar, eliminar y actualizar elementos en el carrito

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Puedes agregar más funciones según tus necesidades

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
