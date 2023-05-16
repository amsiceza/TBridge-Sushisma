import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer.js";
import axios from "axios"

const token = localStorage.getItem("token") || null
const initialState = {
    token: token,
    user: null,
    message: "",
    logoutMessage:""
  };
  
  const API_URL = "http://localhost:3000";
  
  export const UserContext = createContext(initialState);
  
  export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
    const login = async (user) => {
      try {
        const res = await axios.post(API_URL + "/users/login", user);
        
        // Guardamos el token en el estado
        dispatch({
          type: "LOGIN",
          payload: res.data.token,
        });
        
        // Guardamos el token en el localStorage
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
      } catch (error) {
        // Manejo de errores
        console.log(error);
      }
    };

    const getConnectedUser= async()=>{
        const token = localStorage.getItem("token")
        const res = await axios.get(`${API_URL}/users/getConnectedUser`,{
            headers:{
                Authorization:token
            }
        })
        dispatch({
            type:"GET_USER_INFO",
            payload:res.data
        })
      };

      const logout = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.delete(API_URL + "/users/logout",  
        {
          headers: {
            authorization: token,
          },
        });
        dispatch({
          type: "LOGOUT",
          payload: res.data,
          
        });
        if (res.data) {
          localStorage.removeItem("token");
        }
      };

      const addProduct = async (product) => {
        try {
          const res = await axios.post("http://localhost:3000/products/create", product);
          dispatch({
            type: "ADD_TASK",
            payload: res.data.products,
          });
        } catch (error) {
          console.error(error);
        }
      };
    
  
    // Resto del código...
  
    return (
      <UserContext.Provider
        value={{
          token: state.token,
          user: state.user,
          message: state.message,
          login,
          getConnectedUser,
          logout

        }}
      >
        {children}
      </UserContext.Provider>
    );
  };