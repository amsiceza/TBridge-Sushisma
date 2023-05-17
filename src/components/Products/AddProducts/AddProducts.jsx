import React, { useState, useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { CategoryContext } from "../../../context/CategoriesContext/CategoryState";
import { useNavigate } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";


import "./AddProducts.scss";

const AddProducts = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const { getCategories, categories } = useContext(CategoryContext);
  useEffect(() => {
    getCategories();
  }, []);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    priceError: "",
    categoryError: "",
    descriptionError: "",
    imgError: ""
  });

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
    return (
      <div className="load-wrapp">
        <div className="load-9">
          <div className="spinner">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (event.target.img.files[0])
      formData.set("img", event.target.img.files[0]);
    formData.set("name_product", event.target.name_product.value);
    formData.set("description", event.target.description.value);
    formData.set("price_product", event.target.price_product.value);
    formData.set("category_name", event.target.category_name.value);

    // Validar que todos los campos estén llenos
    let hasErrors = false;
    const errors = {
      nameError: "",
      priceError: "",
      categoryError: "",
      descriptionError: "",
      imgError: ""
    };

    if (!formData.get("name_product")) {
      errors.nameError = "Por favor, ingresa el nombre del producto.";
      hasErrors = true;
    }

    if (!formData.get("description")) {
      errors.descriptionError = "Por favor, ingresa una descripción del producto.";
      hasErrors = true;
    }

    if (!formData.get("price_product")) {
      errors.priceError = "Por favor, ingresa el precio del producto.";
      hasErrors = true;
    } else {
      const price = parseFloat(formData.get("price_product"));
      if (isNaN(price)) {
        errors.priceError = "El precio debe ser numérico.";
        hasErrors = true;
      }
    }

    if (formData.get("category_name") === "default") {
      errors.categoryError = "Por favor, selecciona una categoría.";
      hasErrors = true;
    }

    if (!formData.get("img")) {
      errors.imgError = "Por favor, selecciona una imagen del producto.";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);

      setTimeout(() => {
        setFormErrors({
          nameError: "",
          priceError: "",
          categoryError: "",
          descriptionError: "",
          imgError: ""
        });
      }, 2000);
      
      return;
    }

    addProduct(formData);

    setLoading(true);

    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };
  return (
    <div>
      <Header />
      <div className="header-title">
        <h1 className="title-addp">Add new product</h1>
        <hr />
      </div>
  
      <form className="form-add" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name_product"
          placeholder="Product name"
          autoComplete="off"
        />
  
        <input
          type="text"
          name="price_product"
          placeholder="Price product"
          autoComplete="off"
        />
  
        <select name="category_name" defaultValue="default">
          <option value="default" disabled>
            Seleccione una categoría
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.category_name}>
              {category.category_name}
            </option>
          ))}
        </select>
  
        <textarea type="text" name="description" placeholder="Description" />
  
        <input className="file-input" type="file" name="img" />
  
        {formErrors.nameError || formErrors.priceError || formErrors.categoryError || formErrors.descriptionError || formErrors.imgError ? (
          <span className="error-message">
            <FiAlertCircle/> Please fill in all fields and make sure the price is a number.
          </span>
        ) : null}
  
        <button className="submit-add-procut" type="submit">Add product</button>
      </form>
    </div>
  );
  
  
};

export default AddProducts;
