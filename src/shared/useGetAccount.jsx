import React from 'react'
import { useState } from 'react'
import { getAccount } from '../services/api'

export const useGetAccounts = () => {
    const [accountData, setAccountData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAccount = async () => {
        try {
            setLoading(true);
            const { data } = await getAccount();
            console.log('Datos recibidos de la API : ',data);
            setAccountData(data.entities);
            setLoading(false);
        } catch (e) {
            setError(e.message)
            setLoading(false);
        }
    }

    return {
        accountData,
        loading,
        error,
        fetchAccount,
    }
}