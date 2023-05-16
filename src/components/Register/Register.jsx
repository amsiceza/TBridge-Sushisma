import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.scss"


const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const { first_name, last_name, username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({ name, email, password });

      const response = await axios.post(
        'http://localhost:300/users/create',
        body,
        config
      );

      console.log('Usuario registrado exitosamente', response.data);
      navigate('/login'); // Redirigir a la página de login
    } catch (err) {
      console.error('Error al registrar el usuario', err.response.data);
    }
  };

  const navigate = useNavigate(); // Obtener la función navigate

  return (
    
      <form className='register-main' onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => onChange(e)}
            placeholder="First name"
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => onChange(e)}
            placeholder="Last name"
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder="Your email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            placeholder="Password"
          />
        </div>
        <button className="submit-add-procut" type="submit">Registrarse</button>
      </form>
    
  );
};

export default Register;