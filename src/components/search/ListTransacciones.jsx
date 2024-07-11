import React from 'react';
import { useGetTransactions } from '../../shared/useGetTransactions.jsx';

export const ListTransacciones = ({ accountNumber }) => {

    const { transaccion, loading, error } = useGetTransactions(accountNumber);

    if (loading) return <p>Cargando transacciones...</p>;
    if (error) return <p>Error al cargar transacciones: {error}</p>;
    if (!transaccion || transaccion.length === 0) {
        return <p>No hay transacciones disponibles.</p>;
    }
    console.log(accountNumber, transaccion)
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-2">
            {transaccion && transaccion.transaction.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                    {transaccion.transaction.map((transaction, index) => (
                        <li key={index} className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{transaction._id}</div>
                                    <div className="text-sm text-gray-500">Monto: Q{transaction.amount}</div>
                                    <div className="text-sm text-gray-500">Fecha: {transaction.date}</div>
                                    <div className="text-sm text-gray-500"><strong>Cuenta de destino:</strong> {transaction.accountDestination}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500 mt-4 mb-1">No hay transacciones.</p>
            )}
        </div>
    );
};