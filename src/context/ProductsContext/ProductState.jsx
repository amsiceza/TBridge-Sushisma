import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer.js";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

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

  const addProduct = async (product) => {
    try {
      const res = await axios.post("localhost:3000/products/create", product);
      dispatch({
        type: "ADD_TASK",
        payload: res.data.task,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const adminProducts = async () => {
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
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        getProducts,
        addProduct,
        adminProducts

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};