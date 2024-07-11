import React, { useState, useEffect, useRef } from 'react';
import { useTransaction } from '../../shared/useTransaction.jsx';
import useFavorites from '../../shared/hooks/useFavorites';
import toast from 'react-hot-toast';

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

    const [inputText, setInputText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
    const { favorites } = useFavorites();

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    const handleInputClick = () => {
        setSuggestions(favorites);
    };

    const handleInputChange = (event) => {
        let value = event.target.value;
        value = value.replace(/[^\d]/g, ''); // Limpiar el valor para permitir solo números

        setInputText(value);

        const filteredSuggestions = favorites.filter(favorite =>
            favorite.accountNumber.toString().includes(value)
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSelectSuggestion = (suggestion) => {
        setInputText(suggestion.accountNumber.toString());
        setSuggestions([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postTransaction();
        if (!response.error) {
            toast.success('Transaction successful');
            console.log('Transaction successful:', response);
            // Limpiar el formulario después de una transacción exitosa
            setInputText('');
        } else {
            toast.error('Transaction failed');
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
            <div className="mb-4 relative" ref={inputRef}>
                <label className="block text-gray-700 text-sm font-bold mb-2">Account Destination:</label>
                <input
                    type="text"
                    value={inputText}
                    onClick={handleInputClick}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {suggestions.length > 0 && (
                    <ul className="absolute bg-white w-full max-h-36 overflow-y-auto border border-gray-300 rounded-b-lg shadow-lg top-full left-0 z-10">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100 truncate"
                                onClick={() => handleSelectSuggestion(suggestion)}
                            >
                                {suggestion.accountNumber} • {suggestion.alias}
                            </li>
                        ))}
                    </ul>
                )}
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

export default TransaccionForm;
