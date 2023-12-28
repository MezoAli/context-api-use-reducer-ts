import { createContext } from "react";

export const CartContext = createContext({
  items: [],
});

const CartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ items: [] }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
