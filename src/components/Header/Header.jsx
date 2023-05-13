import React, { useContext, useEffect, useState } from 'react';
import "./Header.scss";
import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { getConnectedUser, user } = useContext(UserContext);
  useEffect(() => {
    getConnectedUser();
    handleWindowSizeChange(); // Verificar el tamaño de la pantalla inicialmente
    window.addEventListener('resize', handleWindowSizeChange); // Agregar un listener para el cambio de tamaño de pantalla
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange); // Eliminar el listener cuando el componente se desmonte
    };
  }, []);

  const isAdmin = user && user.role === 'admin';


  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  const { token, logout, logoutMessage } = useContext(UserContext);
  useEffect(() => {
    if (logoutMessage) {
      navigate("/login");
      notification.success({
        message: logoutMessage,
      });
    }
  }, [logoutMessage]);

  const handleMenuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
        </div>
        {!isMobile ? (
          <div className="pages">
            <Link to="/menu"><button className='link'>Menu</button></Link>
            {isAdmin ? (
              <Link to="/admin">
                <button className='link'>Admin</button>
              </Link>
            ) : null}           
             {user ? (
              <div className="user">
                <Link to="/profile"><button className="link-login">{user.username}</button></Link>
                <Link to="/login"><button onClick={() => logout()} className='link-logout'>Logout</button></Link>
              </div>
            ) : (
              <Link to="/login"><button className="link-login">Login</button></Link>
            )}
          </div>
        ) : (
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        )}
      </nav>
      {menuOpen && isMobile && (
        <div className="mobile-menu">
          <Link to="/menu"><button className='link'>Menu</button></Link>
          {isAdmin ? (
              <Link to="/admin">
                <button className='link'>Admin</button>
              </Link>
            ) : null}         
          {user ? (
            <div className="user">
              <Link to="/profile"><button className="link-login">{user.username}</button></Link>
              <Link to="/login"><button onClick={() => logout()} className='link-logout'>Logout</button></Link>
            </div>
          ) : (
            <Link to="/login"><button className="link-login">Login</button></Link>
          )}
        </div>
      )}
    </>
  );
}

export default Header;