import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductState";
import { OrdersContext } from "../../context/OrderContext/OrderState";
import Header from "../../components/Header/Header";


const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

  const orderFinish = () => {
    createOrder(cart);
    setTimeout(() => {
      clearCart();
    }, 1000);
    notification.success({
      message: "Order created",
    });
  };

  if (cart.length < 1) {
    return <span>No products</span> ;
  }
  return (


    <div>
    <Header/>
      {cart.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price} €</p>
          </div>
        );
      })}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => orderFinish()}>Create order</button>
    </div>
  );
};

export default Cart;
