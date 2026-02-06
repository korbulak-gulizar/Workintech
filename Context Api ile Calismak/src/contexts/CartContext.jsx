import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage("s11d1", []);

  const addItem = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
