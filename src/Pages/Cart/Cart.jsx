import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductState";
import Header from "../../components/Header/Header";
import "./Cart.scss"
import { OrderContext } from "../../context/OrderContext/OrderState";


const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
    const { createOrder } = useContext(OrderContext);

    const createNewOrder = () => {
        createOrder(cart);
        clearCart();
      };

  
useEffect(() =>{
    localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

  const getProductQuantity = (productId) => {
    let quantity = 0;
    for (const product of cart) {
      if (product.id === productId) {
        quantity++;
      }
    }
    return quantity;
  };

  const processedProducts = new Set();

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div>
          <p>No products in the cart</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="order-products">
        {cart.map((product) => {
          if (!processedProducts.has(product.id)) {
            const quantity = getProductQuantity(product.id);
            processedProducts.add(product.id);
            return (
              <div  key={product.id}>
                  <div className="card-p-o">
                <img src={`http://localhost:3000/${product.img}`} alt="" />
                <h2>{product.name_product}</h2>
                <h3>{product.price_product} €</h3>
                <h4>{quantity} Pieces</h4>
                </div>
              </div>
            );
          }
          return null;
        })}
        <button onClick={() => clearCart()}>Clear cart</button>
        <button onClick={() => createNewOrder()}>Create order</button>
      </div>
    </div>
  );
};

export default Cart;