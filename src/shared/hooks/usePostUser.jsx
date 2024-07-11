import { useState } from 'react';
import { postUser } from '../../services/index.js';

export const usePostUser = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const submitUser = async (data) => {
        setIsSubmitting(true);
        try {
            console.log('Sending data:', data); // Log para depurar los datos enviados
            const res = await postUser(data);
            if (!res.error) {
                setResponse(res);
            } else {
                setError(res.e?.response?.data || 'Error submitting user');
            }
        } catch (err) {
            setError(err.message || 'Error submitting user');
        } finally {
            setIsSubmitting(false);
        }
    };

    return { isSubmitting, response, error, submitUser };
};
