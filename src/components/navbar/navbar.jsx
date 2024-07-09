import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileMenu } from "../UserMenu/UserMenu.jsx";
import "./navbar.css";
import logo from '../../assets/logo.png'; // Importa tu imagen desde la carpeta img

// Función simulada para decodificar token
const decodeToken = (token) => {
    // Aquí deberías implementar la lógica para decodificar el token
    // Por ahora, retornaremos un objeto simulado
    return {
        role: "admin", // O "user"
    };
};

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(""); // Nuevo estado para el rol del usuario
    const navigate = useNavigate();

    useEffect(() => {
        // Simulando la recuperación del token y la configuración del estado
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            setRole(decodedToken.role);
            setIsLoggedIn(true);
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigateToAuthPage = () => {
        navigate('/auth');
    };

    const handleNavigateToSettingsPage = () => {
        navigate('/account');
    };

    const handleNavigateToChannelsPage = () => {
        navigate('');
    };

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            // Placeholder para funcionalidad de logout
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            setRole("");
            navigate('/auth');
        } else {
            // Placeholder para funcionalidad de login
            navigate('/auth');
        }
    };

    return (
        <nav className="navbar w-full flex relative justify-between items-center mx-auto px-8 h-21">
            <div className="inline-flex">
                <a href="/" className="hidden md:block">
                    <img src={logo} alt="Logo" style={{ width: '102px', height: '102px' }} />
                </a>
            </div>
            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                    {isLoggedIn ? (
                        <>
                            {/* <button className="nav-button flex items-center relative cursor-pointer whitespace-nowrap" onClick={handleLoginLogout}>Log out</button> */}
                            <ProfileMenu />
                        </>
                    ) : (
                        <button className="nav-button flex items-center relative cursor-pointer whitespace-nowrap" onClick={handleNavigateToAuthPage}>Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
};
