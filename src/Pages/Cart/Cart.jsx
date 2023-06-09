import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductState";
import Header from "../../components/Header/Header";
import "./Cart.scss";
import { OrderContext } from "../../context/OrderContext/OrderState";
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const navigate = useNavigate();

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
    setTimeout(() => navigate("/profile"), 500);    
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalPrice();
    console.log('cart', cart);
  }, [cart]);

  const calculateTotalPrice = () => {
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
      total += product.price_product * product.quantity;
      quantity += product.quantity;
    }
    const shipping = total * 0.10; // Calcula el costo de envío (10% del total)
    setShippingCost(shipping);
    setTotalPrice(total + shipping); // Suma el costo de envío al total
  };

  const processedProducts = new Set();

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div className="no-products">
          <p><span><BiSearchAlt/></span><br />
          No products in the cart</p>
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
              processedProducts.add(product.id);
              return (
                <div key={product.id}>
                  <div className="card-p-o">
                    <img src={`http://localhost:3000/${product.img}`} alt="" />
                    <h2>{product.name_product}</h2>
                    <h3>{product.price_product} €</h3>
                    <h4>{product.quantity} Pieces</h4>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="total-price">
          <div className="header-title">
            <h1 className="title-addp">Order summary</h1>
          </div>
          <p>Price <span>{totalPrice.toFixed(2)}€</span></p>
          <p>Delivery <span>{shippingCost.toFixed(2)}€</span></p>
          <hr />
          <p>Total <span>{(totalPrice + shippingCost).toFixed(2)}€</span></p>
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
