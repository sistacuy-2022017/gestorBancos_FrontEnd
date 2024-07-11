import { useState } from 'react';
import { useUserAccount } from './hooks/useUserAccount';
import { postTransaccion } from '../services/api';

export const useTransaction = () => {
    const { userData } = useUserAccount();
    const [amount, setAmount] = useState('');
    const [accountDestination, setAccountDestination] = useState('');
    const [error, setError] = useState(null);

    const accountOrigin = userData ? userData.accountNumber : '';

    const handleChangeAmount = (e) => setAmount(e.target.value);
    const handleChangeAccountDestination = (e) => setAccountDestination(e.target.value);

    const postTransaction = async () => {
        const data = {
            accountOrigin,
            accountDestination,
            amount: Number(amount), // Asegúrate de convertir a número
        };

        try {
            const response = await postTransaccion(data);
            return response;
        } catch (e) {
            setError(e);
            return {
                error: true,
                e,
            };
        }
    };

    return {
        amount,
        accountOrigin,
        accountDestination,
        error,
        handleChangeAmount,
        handleChangeAccountDestination,
        postTransaction,
    };
};
