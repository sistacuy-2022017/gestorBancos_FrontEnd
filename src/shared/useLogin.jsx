import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from '../services/index.js';
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            const response = await loginRequest({ email, password });
            setIsLoading(false);

            if (response.error) {
                const errorMsg = response.e?.response?.data?.msg || 'Ocurrió un error al iniciar sesión, intenta de nuevo 1';
                toast.error(errorMsg);
                return; // Salimos de la función para evitar duplicar el manejo del error
            }

            const { userDetails } = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            navigate('/');
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message || 'Ocurrió un error al iniciar sesión, intenta de nuevo 2');
        }
    };

    return {
        login,
        isLoading,
    };
};
