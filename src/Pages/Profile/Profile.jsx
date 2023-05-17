import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Header from "../../components/Header/Header";
import "./profile.scss";
import { FaUserPlus } from "react-icons/fa";

import profileFoto1 from "../../assets/profile-foto1.png";
import profileFoto2 from "../../assets/profile-foto2.png";
import profileFoto3 from "../../assets/profile-foto3.png";
import profileFoto4 from "../../assets/profile-foto4.png";
import profileFoto5 from "../../assets/profile-foto5.png";
import profileFoto6 from "../../assets/profile-foto6.png";
import profileFoto7 from "../../assets/profile-foto7.png";
import profileFoto8 from "../../assets/profile-foto8.png";

const Profile = () => {
  const { getConnectedUser, user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [openOrderIds, setOpenOrderIds] = useState([]); // Estado para controlar las tarjetas abiertas


  useEffect(() => {
    getConnectedUser();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const galleryImages = [
    profileFoto1,
    profileFoto2,
    profileFoto3,
    profileFoto4,
    profileFoto5,
    profileFoto6,
    profileFoto7,
    profileFoto8,
  ];

  const randomImageURL =
    galleryImages[Math.floor(Math.random() * galleryImages.length)];

  if (loading) {
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

  if (!user) {
    return (
      <div>
        <Header />
        <div className="no-products">
          <p>
            <span>
              <FaUserPlus />
            </span>
            <br />
            User not connected
          </p>
        </div>
      </div>
    );
  }

  const handleDateClick = (orderId) => {
    const index = openOrderIds.indexOf(orderId);
    if (index !== -1) {
      // Si la orden ya está abierta, la eliminamos del arreglo
      setOpenOrderIds([...openOrderIds.slice(0, index), ...openOrderIds.slice(index + 1)]);
    } else {
      // Si la orden no está abierta, la agregamos al arreglo
      setOpenOrderIds([...openOrderIds, orderId]);
    }
  };

  return (
    <div>
      <Header />
  
      {user ? (
        <div className="main-profile-container">
          <div className="profile-container">
            <div className="img-p-container">
              <img
                className="img-profile"
                src={randomImageURL}
                alt="Imagen de perfil"
              />
            </div>
            <div className="datos">
              <h1>{user.username}</h1>
              <h2>
                {user.first_name} <br />
                <span>{user.last_name}</span>
              </h2>
              <h4>{user.email}</h4>
            </div>
          </div>
          <div>
          <div className="header-title">
          <h1 className="title-addp">Orders summary </h1>
          <hr />
        </div>
            {user.Orders.map((order) => {
              const isOpen = openOrderIds.includes(order.id); // Verificar si la tarjeta está abierta
              return (
                <div className="p-o-c" key={order.id}>
                  <div className="title-o-p">
                    <button
                      className="btn-open"
                      onClick={() => handleDateClick(order.id)}
                    >
                      {order.createdAt.slice(0, 10)}
                    </button>
                  </div>
  
                  {isOpen && (
                    <div className="card-container">
                      {order.Products.map((product) => {
                        return (
                          <div key={product.id} className="card">
                            <div className="card-content">
                              <img
                                src={`http://localhost:3000/${product.img}`}
                                alt=""
                              />
                              <h3>{product.name_product}</h3>
                              <p>
                                {product.price_product} € <br />
                                <span>{product.OrderProduct.amount} Pieces</span>
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>No hay usuario conectado</p>
      )}
    </div>
  );
  
  
  
};

export default Profile;
