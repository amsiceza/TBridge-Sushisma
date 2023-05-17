import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductState";
import Header from "../../components/Header/Header";
import "./Cart.scss";
import { OrderContext } from "../../context/OrderContext/OrderState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalPrice();
  }, [cart]);

  const calculateTotalPrice = () => {
    let total = 0;
    for (const product of cart) {
      total += product.price_product;
    }
    const shipping = total * 0.10; // Calcula el costo de envío (2% del total)
    setShippingCost(shipping);
    setTotalPrice(total + shipping); // Suma el costo de envío al total
  };

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
        <div className="productos-container">
          {cart.map((product) => {
            if (!processedProducts.has(product.id)) {
              const quantity = getProductQuantity(product.id);
              processedProducts.add(product.id);
              return (
                <div key={product.id}>
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
        </div>

        <div className="total-price">
        <div className="header-title">
        <h1 className="title-addp">Order summary </h1>
       
      </div>
          <p>Price <span>{totalPrice.toFixed(2)}€</span></p>
          <p>Delivery  <span>{shippingCost.toFixed(2)}€</span> </p>
          <hr />
          <p>Total <span>{(totalPrice + shippingCost).toFixed(2)}€</span> </p>
          <div className="btn-total">
            <button className="submit-add-procut" onClick={() => clearCart()}>Clear cart</button>
            <button className="submit-add-procut" onClick={() => createNewOrder()}>Create order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
