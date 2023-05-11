import React, { useContext, useEffect } from "react";
import {ProductContext } from "../../../context/ProductsContext/ProductState";
import "./GetProducts.scss"

const GetProducts = () => {
  const {getProducts,products} = useContext(ProductContext)
  
  useEffect(() => {
    getProducts();
  }, []);
  

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
        </div>
      ))}
    </div>
  );
};

export default GetProducts;