import { useState, useEffect } from 'react';
import { getRequest } from '../../services/index.js';

export const useGetRequest = () => {
    const [requestData, setRequestData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                console.log('Fetching request...');
                const response = await getRequest();
                console.log('Request response:', response);
                if (!response.error) {
                    console.log('Entities:', response.data.entities);
                    setRequestData(response.data.entities); // Ajusta según la estructura de tu respuesta de solicitud
                } else {
                    setError(response.e?.response?.data || 'Error fetching request');
                }
            } catch (err) {
                console.error('Error fetching request:', err);
                setError(err.message || 'Error fetching request');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRequest();
    }, []);

    return { requestData, isLoading, error };
};
