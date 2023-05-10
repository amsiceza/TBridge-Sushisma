import React, { useState, useContext } from "react";
import Header from "../../Header/Header";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import "./AddProducts.scss"

const AddProducts = () => {
  const { addProduct } = useContext(ProductContext);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    if (event.target.img.files[0]) formData.set('img', event.target.img.files[0]);
    formData.set('name_product', event.target.name_product.value)
    formData.set('description', event.target.description.value)
    formData.set('price_product', event.target.price_product.value)
    formData.set('category_name', event.target.category_name.value)
    
    addProduct(formData)
      .then(res => {
        notification.success({ message: 'Product successfully uploaded ' })
      })
      .catch((error) => {
        console.error(error)
      })
      
  }

  return (
    <div>
      <Header/> 

        <div className="header-title">
          <h1 className="title-addp">Add new product</h1>
          <hr />
        </div>

        <form className="form-add" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name_product"
            placeholder="Product name"
          />
          <input
            type="text"
            name="price_product"
            placeholder="Price product"
          />
          <input
            type="text"
            name="category_name"
            placeholder="Type of sushi"
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
          />
          <input type="file" name="img"/>
          <button type="submit">Add task</button>
        </form>
      
    </div>
  );
};

export default AddProducts;