import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTransactions } from '../services/api';

export const useGetTransactions = (accountNumber) => {
    const [transaccion, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTransactions = async (accountNumber) => {
            setLoading(true);
            try {
                const response = await getTransactions(accountNumber);
                console.log('Datos Transaccion de la API : ', response);
                setTransactions(response.data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        if (accountNumber) {
            fetchTransactions(accountNumber);
        }
    }, [accountNumber]);

    return {
        transaccion,
        loading,
        error,
    };
};