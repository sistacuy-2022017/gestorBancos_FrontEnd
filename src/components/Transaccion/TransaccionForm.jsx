import React from 'react'
import { useTransaction } from '../../shared/useTransaction.jsx';

export const TransaccionForm = () => {
    const {
        amount,
        accountOrigin,
        accountDestination,
        handleChangeAmount,
        handleChangeAccountDestination,
        postTransaction,
        error,
    } = useTransaction();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postTransaction();
        if (!response.error) {
            console.log('Transaction successful:', response);
        } else {
            console.error('Transaction failed:', response.e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={handleChangeAmount}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Account Origin:</label>
                <input
                    type="text"
                    value={accountOrigin}
                    readOnly
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Account Destination:</label>
                <input
                    type="text"
                    value={accountDestination}
                    onChange={handleChangeAccountDestination}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create Transaction
                </button>
            </div>
            {error && <p className="text-red-500 text-xs italic">Error: {error.message}</p>}
        </form>
    );
};

