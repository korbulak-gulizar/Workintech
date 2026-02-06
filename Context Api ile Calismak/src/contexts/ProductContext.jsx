import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products] = useState([
    { id: 1, title: "Clean Code", price: 120 },
    { id: 2, title: "Atomic Habits", price: 90 },
    { id: 3, title: "The Pragmatic Programmer", price: 150 },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
