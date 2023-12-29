import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
  handleUpdateCartItemQuantity: () => {},
});
