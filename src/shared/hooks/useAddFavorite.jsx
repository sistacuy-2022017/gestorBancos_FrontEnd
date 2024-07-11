import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useAddFavorite = () => {
    const [loading, setLoading] = useState(false);

    const addFavorite = async (numer, favoriteData) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://127.0.0.1:8080/BicBank/v1/account/addFavorite/${numer}`, favoriteData);
            toast.success(response.data.message);
            return true;
        } catch (error) {
            console.error('Error adding favorite:', error);
            toast.error('Error adding favorite');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        addFavorite,
        loading,
    };
};

export default useAddFavorite;
