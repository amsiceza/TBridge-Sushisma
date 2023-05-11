import React, { useContext, useEffect } from 'react'
import "./Header.scss";
import Logo from "../../assets/logo.png"
import Profile from "../../assets/profile.jpg"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from 'react-router-dom';



function Header() {
  const navigate = useNavigate()

  const { getConnectedUser,user } = useContext(UserContext);
  useEffect(() => {
    getConnectedUser();

  }, []);

  const { token, logout, logoutMessage } = useContext(UserContext);
  useEffect(() => {
    if (logoutMessage) {
      navigate("/login");
      notification.success({
        message: logoutMessage,
      });
    }
  }, [logoutMessage]);
  

  return (
    <>
        <nav>
        <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
            <div className='pages'>
                <Link to="/menu"><button className='link'>Menu</button></Link>
                <Link to="/admin"><button className='link'>Admin</button></Link>
                {user ? <div className="user-h">
                  <Link to="/profile"><button className="link-login">{user.username}</button> </Link>
                  <Link to="/login"><button onClick={() => logout()} className='link-logout'>Logout</button></Link>
                  </div> : (
                  <Link to="/login"><button className="link-login">Login</button></Link>
                )}
            </div>
        </nav>
    </>
  )
}

export default Header