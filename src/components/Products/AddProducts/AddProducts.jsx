import React, { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const { addProduct } = useContext(ProductContext);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    if (event.target.imageProduct.files[0]) formData.set('imageProduct', event.target.imageProduct.files[0]);
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        name="name_product"
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        name="description"
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        name="price_product"
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        name="category_name"
        value={title}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddProducts;