import React from 'react';
import { useGetTransactions } from '../../shared/useGetTransactions';

export const ListTransacciones = ({ accountNumber }) => {
    
    const { transaccion, loading, error } = useGetTransactions(accountNumber);

    if (loading) return <p>Cargando transacciones...</p>;
    if (error) return <p>Error al cargar transacciones: {error}</p>;
    if (!transaccion || transaccion.length === 0) {
        return <p>No hay transacciones disponibles.</p>;
    }
    console.log(accountNumber, transaccion)
    return (
        <div>
            <ul>
                {transaccion.transaction.map((transaction, index) => (
                    <li key={index}>
                        <p>ID: {transaction._id}</p>
                        <p>Monto: {transaction.amount}</p>
                        <p>Fecha: {transaction.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
