import { createContext, useReducer } from "react";
import CategoryReducer from "./CategoryReducer.js";
import axios from "axios";

const initialState = {
  categories: [],
};

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({children}) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/categories/getAllCategories");
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.categories,
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        category: state.category,
        getCategories

      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};