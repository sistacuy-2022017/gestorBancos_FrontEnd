import React, { useState, useEffect, useRef } from 'react';
import './History.css';

const transactions = [
    {
        _id: "668de3e71c87018e48b92d3e",
        amount: 100.5,
        date: "2024-07-10T08:00:00.000Z",
        reference: "TXN001",
        accountOrigin: "1234567890",
        accountDestination: "0987654321",
        status: true
    },
    {
        _id: "668de3e71c87018e48b92d3f",
        amount: 75.25,
        date: "2024-07-09T15:30:00.000Z",
        reference: "TXN002",
        accountOrigin: "0987654321",
        accountDestination: "1234567890",
        status: true
    },
    {
        _id: "668de3e71c87018e48b92d40",
        amount: 50,
        date: "2024-07-08T12:00:00.000Z",
        reference: "TXN003",
        accountOrigin: "5678901234",
        accountDestination: "1234567890",
        status: true
    }
];

export const TransactionHistory = () => {
    const [inputText, setInputText] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    const inputRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setFilteredTransactions(sortByDate(transactions));
        }
    };

    const handleInputChange = (event) => {
        let value = event.target.value;

        setInputText(value);

        const filtered = transactions.filter(transaction =>
            transaction.accountDestination.includes(value)
        );

        setFilteredTransactions(sortByDate(filtered));
    };

    const sortByDate = (transactions) => {
        return transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    };

    return (
        <>
            <div className='flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br'>
                <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
                    <div className='max-w-md mx-auto space-y-3'>
                        <h3 className="text-lg font-semibold">Transaction History</h3>
                        <div className="relative" ref={inputRef}>
                            <label className="block py-1">Search by recipient</label>
                            <input
                                type="text"
                                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                                value={inputText}
                                onChange={handleInputChange}
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
        </>
    );
};
