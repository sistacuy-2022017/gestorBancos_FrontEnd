import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useUserAccount = () => {
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario
    const [userDetails, setUserDetails] = useState(null); // Estado para almacenar los detalles del usuario obtenidos con getOwnUser
    const [token, setToken] = useState(null); // Estado para almacenar el token

    useEffect(() => {
        // Obtener el token del localStorage
        const user = localStorage.getItem('user');

        if (user) {
            // Parsear el token de JSON a objeto JavaScript
            const userDetails = JSON.parse(user);
            setToken(userDetails.token); // Guardar el token en el estado
        } else {
            console.error('No se encontró el token en el localStorage');
        }

        // Función para cargar los datos del usuario al montar el componente
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/BicBank/v1/user/getOwnUser', {
                    headers: {
                        Authorization: `Bearer ${token}` // Enviar el token en el encabezado Authorization
                    }
                });
                setUserDetails(response.data.user); // Actualizar el estado con los detalles del usuario obtenidos
                localStorage.setItem('name', JSON.stringify(response.data.user.name));
                // Una vez obtenidos los detalles del usuario, podemos obtener los datos de la cuenta específica
                if(!response.data.user.account){
                    toast.error('No se encontró información de cuenta asociada al usuario');
                    return;
                }
                const accountResponse = await axios.get(`http://127.0.0.1:8080/BicBank/v1/account/getOne/${response.data.user.account}`);
                setUserData(accountResponse.data.entity); // Actualizar el estado con los datos de la cuenta obtenidos
            } catch (error) {
                console.error('Error al obtener los detalles del usuario o la cuenta:', error);
                toast.error('Ocurrió un error al cargar los datos del usuario o la cuenta');
            }
        };

        if (token) {
            fetchUserDetails(); // Llamar a la función para obtener detalles del usuario y cuenta si hay un token disponible
        }
    }, [token]); // Dependencia: se ejecutará cuando el token cambie

    return {
        userData,
        userDetails,
    };
};
