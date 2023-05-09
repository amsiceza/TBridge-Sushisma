import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
import axios from "axios";

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products/getAllProducts");
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.products,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};