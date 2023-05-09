import React, { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductState";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const { addProduct } = useContext(ProductContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct({ title });
    setTitle("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        value={title}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddProducts;