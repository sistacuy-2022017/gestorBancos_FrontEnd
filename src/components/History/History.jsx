import React from 'react';
import useHistorialList from '../../shared/hooks/useHistorialList';

export const TransactionHistory = () => {
    const { inputText, setInputText, filteredTransactions, handleInputChange } = useHistorialList();

    const handleRestrictedInputChange = (event) => {
        const value = event.target.value;
        const sanitizedValue = value.replace(/[^1-9]/g, ''); // Eliminar caracteres no permitidos
        setInputText(sanitizedValue);
        handleInputChange({ target: { value: sanitizedValue } });
    };

    return (
        <div className='flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
                <div className='max-w-md mx-auto space-y-3'>
                    <h3 className="text-lg font-semibold">Transaction History</h3>
                    <div className="relative">
                        <label className="block py-1">Search by recipient</label>
                        <input
                            type="text"
                            className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                            value={inputText}
                            onChange={handleRestrictedInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        {filteredTransactions.map((transaction) => (
                            <div key={transaction._id} className="border p-3 rounded shadow">
                                <p className="font-bold">Reference: {transaction.reference}</p>
                                <p>Amount: {transaction.amount.toFixed(2)}</p>
                                <p>Date: {new Date(transaction.date).toLocaleString()}</p>
                                <p>From: {transaction.accountOrigin}</p>
                                <p>To: {transaction.accountDestination}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
