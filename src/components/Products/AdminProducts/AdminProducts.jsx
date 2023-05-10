import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { Link } from "react-router-dom";
import "./AdminProducts.scss";

const AdminProducts = () => {
  const { adminProducts, products, deleteProduct } = useContext(ProductContext);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    adminProducts();
  }, []);

  const handleDeleteConfirmation = (productId) => {
    if (deleteConfirmation && productId === productIdToDelete) {
      deleteProduct(productId);
    } else {
      setDeleteConfirmation(true);
      setProductIdToDelete(productId);
    }
  };

  return (
    <div>
      <button>
        <Link to={"/addProduct"}>Edit</Link>
      </button>
      <div className="main-card">
        {products.map((product) => (
          <div key={product.id} className="project-card">
            <img src={`http://localhost:3000/${product.img}`} alt="" />
            <h3>
              {product.name_product}
              <br />
            </h3>
            <hr />
            <div className="parrafo-scroll">
              <p>{product.description}</p>
            </div>
            <div className="btns-admin">
              <button>
                <Link to={"/task/" + product.id}>Edit</Link>
              </button>
              <button onClick={() => handleDeleteConfirmation(product.id)}>
                {deleteConfirmation && product.id === productIdToDelete
                  ? "Agree?"
                  : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
