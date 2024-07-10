import React from 'react';
import { useState } from 'react';
import { ListTransacciones } from './ListTransacciones';

export const CardInfo = ({ account }) => {
    
    const [showTransactions, setShowTransactions] = useState(false);

    if (!account) return <p>No hay información de la cuenta disponible.</p>;

    const handleShowTransactions = () => setShowTransactions(!showTransactions);

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Información de Cuenta</h2>
                <p className="text-gray-700 mb-2"><strong>No. de Cuenta:</strong> {account.accountNumber}</p>
                <p className="text-gray-700 mb-2"><strong>Balance de Cuenta:</strong> {account.balance}</p>
                <p className="text-gray-700 mb-4"><strong>Tipo de Cuenta:</strong> {account.typeAccount}</p>
                <div className="flex space-x-2">
                    <button
                        className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={handleShowTransactions}
                    >
                        Transacciones
                    </button>
                </div>
            </div>
            {showTransactions && <ListTransacciones accountNumber={account.accountNumber} />}
        </div>
    );
};
