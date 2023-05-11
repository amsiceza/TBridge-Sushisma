import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Header from "../../components/Header/Header";

const Profile = () => {
    const { getConnectedUser,user } = useContext(UserContext);
  useEffect(() => {
    getConnectedUser();
  }, []);
  if(!user){
    return   "Ahhh"
  }

  return (
    <div>
      <Header/>
      
      {user ? (
        <div  >
          <h1>{user.username}</h1>
          <h2>{user.first_name}</h2>
          <h3>{user.last_name}</h3>
          <h4>{user.email}</h4>
        </div>
      ) : (
        <p>No hay usuario conectado</p>
      )}
    </div>
  );
};

export default Profile;