import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const OrderContext = createContext();

export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = localStorage.getItem("token");
   const productAndQuantity = order.map(product =>{
     return {
       ProductId:product.id,
       amount:product.quantity
     }
   })
    try {
      await axios.post(
        API_URL + "/orders/create",
        { productAndQuantity },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};