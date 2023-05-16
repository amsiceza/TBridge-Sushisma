import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer.js";
import axios from "axios";


const cart = JSON.parse(localStorage.getItem("cart")) || [];
const initialState = {
  products: [],
  product: {},
  cart: cart,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products/getAllProducts"
      );
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
      const res = await axios.post(
        "http://localhost:3000/products/create",
        product
      );
      dispatch({
        type: "ADD_PRODUCTS",
        payload: res.data.products,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const adminProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products/getAllProducts"
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.products,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/products/deleteById/" + id
      );
      dispatch({
        type: "DELETE_TASK",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = async (id, product) => {
    try {
      await axios.put(
        "http://localhost:3000/products/updateById/" + id,
        product
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cart: state.cart,

        getProducts,
        addProduct,
        adminProducts,
        deleteProduct,
        editProduct,
        addCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
