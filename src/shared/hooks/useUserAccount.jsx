import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useUserAccount = () => {
    const [userData, setUserData] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const userDetails = JSON.parse(user);
            setToken(userDetails.token);
        } else {
            console.error('No se encontró el token en el localStorage');
        }

        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/BicBank/v1/user/getOwnUser', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserDetails(response.data.user);
                localStorage.setItem('name', JSON.stringify(response.data.user.name));
                if (!response.data.user.account) {
                    toast.error('No se encontró información de cuenta asociada al usuario');
                    return;
                }
                const accountResponse = await axios.get(`http://127.0.0.1:8080/BicBank/v1/account/getOne/${response.data.user.account}`);
                setUserData(accountResponse.data.entity);
                localStorage.setItem('num', JSON.stringify(accountResponse.data.entity.accountNumber));
            } catch (error) {
                console.error('Error al obtener los detalles del usuario o la cuenta:', error);
                toast.error('Ocurrió un error al cargar los datos del usuario o la cuenta');
            }
        };

        if (token) {
            fetchUserDetails();
        }
    }, [token]);

    return {
        userData,
        userDetails,
    };
};
