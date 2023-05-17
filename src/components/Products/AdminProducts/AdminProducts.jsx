import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";
import { FaUserPlus } from "react-icons/fa";




import "./AdminProducts.scss";

const AdminProducts = () => {
  const { adminProducts, products, deleteProduct } = useContext(ProductContext);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const { getConnectedUser, user } = useContext(UserContext);


  useEffect(() => {
    getConnectedUser();
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

  if(!user){
    return(
    <div>
        <div className="no-products">
          <p><span><FaUserPlus/></span><br />
          User not connected</p>
        </div>
    </div>)
  }

  return (
    <div>
      <div className="div-btn-create-p">
          <Link to={"/addProduct"}><button className="btn-create-p">Add new</button></Link>
      </div>
      <div className="main-card">
        {products.map((product) => {
          if(!product){
            return 'Cargando'
          }
return(
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
      
      <button onClick={() => handleDeleteConfirmation(product.id)}>
        {deleteConfirmation && product.id === productIdToDelete
          ? "Agree?"
          : "Delete"}
      </button>
    </div>
  </div>
)
        }
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
