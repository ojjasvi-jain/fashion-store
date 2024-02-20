import { createContext, useReducer } from "react";
import storeReducer from "./Store";

export const Cart = createContext(null);

export const Context = ({ children }) => {
  let [state, dispatch] = useReducer(storeReducer, []);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
