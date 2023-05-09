import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/ProductState";
import "./Products.scss"

const Products = () => {
  const {getProducts,products} = useContext(GlobalContext)
  
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
        </div>
      ))}
    </div>
  );
};

export default Products;