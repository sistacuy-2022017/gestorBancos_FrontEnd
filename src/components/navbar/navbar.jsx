/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks/index.js";
import { ProfileMenu } from "../UserMenu/UserMenu.jsx";
import logo from '../../assets/logo.png'; // Asegúrate de importar tu imagen desde la carpeta de activos

const NavButton = ({ text, onClickHandler }) => {
  return (
    <button 
      className="bg-white text-gray-900 hover:bg-white hover:text-gray-900 py-2 px-4 rounded-full cursor-pointer mx-2 transition-colors duration-300"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export const Navbar = () => {
  const { isLogged, logout } = useUserDetails();
  const navigate = useNavigate();

  const handleNavigateToAuthPage = () => {
    navigate('/auth');
  };

  const handleNavigateToSettingsPage = () => {
    navigate('/settings');
  };

  const handleNavigateToChannelsPage = () => {
    navigate('/channels');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar bg-gray-900">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" width={110} className="navbar-logo-img" />
        </a>
      </div>
      <div className="nav-buttons-container flex items-center">
        <NavButton text="Browse" onClickHandler={handleNavigateToChannelsPage} />
        {!isLogged ? (
          <NavButton text="Login" onClickHandler={handleNavigateToAuthPage} />
        ) : (
          <>
            <NavButton text="My Account" onClickHandler={handleNavigateToSettingsPage} />
            <NavButton text="Logout" onClickHandler={handleLogout} style={{ marginRight: '8px' }} />
            <ProfileMenu/>
          </>
        )}
      </div>
    </nav>
  );
};
