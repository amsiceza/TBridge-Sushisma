import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Header from "../../components/Header/Header";
import "./profile.scss";

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

  useEffect(() => {
    getConnectedUser();
  }, []);

  const galleryImages = [
    profileFoto1,
    profileFoto2,
    profileFoto3,
    profileFoto4,
    profileFoto5,
    profileFoto6,
    profileFoto7,
    profileFoto8
  ];

  const randomImageURL = galleryImages[Math.floor(Math.random() * galleryImages.length)];

  if (!user) {
    return "Ahhh";
  }

  return (
    <div>
      <Header />

      {user ? (
        <div className="main-profile-container">
          <div className="profile-container">
            <img className="img-profile" src={randomImageURL} alt="Imagen de perfil" />
            <h1>{user.username}</h1>
            <h2>{user.first_name} <br />
            <span>{user.last_name}</span></h2>
            <h4>{user.email}</h4>
          </div>
        </div>
      ) : (
        <p>No hay usuario conectado</p>
      )}
    </div>
  );
};

export default Profile;



