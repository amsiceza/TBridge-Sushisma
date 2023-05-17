import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.scss"
import { FiAlertCircle } from "react-icons/fi";


const API_URL = 'http://localhost:3000';

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validar que todos los campos estén llenos
      const { first_name, last_name, username, password, email } = formValues;
      if (!first_name || !last_name || !username || !password || !email) {
        setError('Please fill in all fields.');
        setIsLoading(false);
        return;
      }

      // Validar el formato del correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        setIsLoading(false);
        return;
      }

      // Validar la longitud de la contraseña
      if (password.length < 6) {
        setError('Password should be at least 6 characters long.');
        setIsLoading(false);
        return;
      }

      const response = await axios.post(API_URL + '/users/create', formValues);
      console.log(response.data);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <form className='register-main'>
      <div>
        <input
          type="text"
          name="first_name"
          value={formValues.first_name}
          onChange={handleInputChange}
          placeholder="Enter your first name"
          autoComplete='off'
        />
      </div>
      <div>
        <input
          type="text"
          name="last_name"
          value={formValues.last_name}
          onChange={handleInputChange}
          placeholder="Enter your last name"
          autoComplete='off'
        />
      </div>
      <div>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
          autoComplete='off'
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          autoComplete='off'
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          autoComplete='off'
        />
      </div>
      {error && <span className="error-message"><FiAlertCircle/> {error}</span>}
      <button className="submit-add-procut" type="submit" onClick={handleSubmit}>
        Registrarse
      </button>
    </form>
  );
};

export default Register;