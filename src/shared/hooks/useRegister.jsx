import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from '../../services';
import toast from "react-hot-toast";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (formData) => {
        setIsLoading(true);

        const response = await registerRequest(formData);

        setIsLoading(false);

        if (response.error) {
            console.error(response.error);
            return toast.error(response.e?.response?.data || 'Ocurrió un error al registrar, intenta de nuevo');
        }

        toast.success('Solicitud enviada exitosamente');
        navigate('/'); // Cambiar la ruta a donde quieres redirigir luego de enviar la solicitud
    };

    return {
        register,
        isLoading
    };
};
