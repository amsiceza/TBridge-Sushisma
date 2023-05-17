import React, { useContext, useEffect, useState } from "react";
import {ProductContext } from "../../../context/ProductsContext/ProductState";
import { UserContext } from "../../../context/UserContext/UserState";

import "./GetProducts.scss"

const GetProducts = () => {
  const {getProducts,products, addCart,cart} = useContext(ProductContext)
  const [cartItemCount, setCartItemCount] = useState(0);

  const { getConnectedUser, user } = useContext(UserContext);

  useEffect(() => {
    getConnectedUser();
    getProducts();
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItemCount(cart.length);
  }, [cart]);



  
  


  return (
    <div className='main-card'>
      {products.map((product) => (
        <div key={product.id} className="project-card">
          <img src={`http://localhost:3000/${product.img}`} alt="" />
          <h3>{product.name_product}
            <br />
          </h3>
          <hr />
          <div className='parrafo-scroll'>
            <p>{product.description}</p>
          </div>
          <div className="price-product">
          <h1>{product.price_product}  <span>€</span> </h1>
          </div>

{user ? (
  <button className="submit-add-procut-m" onClick={() => addCart(product)}>Add to cart</button>
) : null}        </div>
      ))}
    </div>
  );
};

export default GetProducts;