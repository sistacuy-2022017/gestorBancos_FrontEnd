import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const accountNumber = JSON.parse(localStorage.getItem('num'));
                if (accountNumber) {
                    const response = await axios.get(`http://127.0.0.1:8080/BicBank/v1/account/getAccountByNumber/${accountNumber}`);
                    if (response.data.account && response.data.account.favorite) {
                        setFavorites(response.data.account.favorite);
                    } else {
                        toast.error('No se encontraron favoritos para esta cuenta');
                    }
                } else {
                    toast.error('No se encontró el número de cuenta en el localStorage');
                }
            } catch (error) {
                console.error('Error al obtener los favoritos:', error);
                toast.error('Ocurrió un error al cargar los favoritos');
            }
        };

        fetchFavorites();
    }, []);

    return {
        favorites,
    };
};

export default useFavorites;
