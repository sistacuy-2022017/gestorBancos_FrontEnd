import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useHistorialList = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/BicBank/v1/transaction/');
                const accountNumber = JSON.parse(localStorage.getItem('num'));
                const filteredTransactions = response.data.entities
                    .filter(transaction => transaction.accountOrigin === accountNumber)
                    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha descendente
                setTransactions(filteredTransactions);
                setFilteredTransactions(filteredTransactions); // Inicialmente mostramos todas las transacciones filtradas
            } catch (error) {
                console.error('Error al obtener las transacciones:', error);
                toast.error('Ocurrió un error al cargar las transacciones');
            }
        };

        fetchTransactions();
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputText(value);
        const filtered = transactions.filter(transaction =>
            transaction.accountDestination.includes(value)
        );
        setFilteredTransactions(filtered);
    };

    return {
        inputText,
        setInputText,
        filteredTransactions,
        handleInputChange,
    };
};

export default useHistorialList;
