import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVEEDOR                                 */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya está en el carrito");
      return;
    }

    setCart([...cart, item]);
    alert("Producto agregado al carrito 🐾");
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado del carrito");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  const checkout = () => {
    alert("¡Gracias por tu compra en Veterinaria PetCare! 🐾");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    clearCart,
    removeItem,
    getCartTotal,
    getTotalItems,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
