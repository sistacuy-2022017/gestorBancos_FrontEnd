import React, { useState, useEffect, useRef } from 'react';
import useFavorites from '../../shared/hooks/useFavorites';

import { useTransaction } from '../../shared/useTransaction.jsx';
import "./acount.css";

export const Acount = () => {
    const [inputText, setInputText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
    const { favorites } = useFavorites();
    const { amount, handleChangeAmount, accountOrigin, accountDestination, postTransaction, error } = useTransaction();

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

        // Limpiar el valor para permitir solo números
        value = value.replace(/[^\d]/g, '');

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
            console.log('Transaction successful:', response);
            // Aquí podrías añadir lógica adicional después de una transacción exitosa
        } else {
            console.error('Transaction failed:', response.e);
        }
    };

    return (
        <>
            <div className='flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br'>
                <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
                    <div className='max-w-md mx-auto space-y-3'>
                        <h3 className="text-lg font-semibold">Transferir</h3>
                        <div className="relative" ref={inputRef}>
                            <label className="block py-1">Acreditar a</label>
                            <input
                                type="text"
                                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                                value={inputText}
                                onClick={handleInputClick}
                                onChange={handleInputChange}
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
                        <div>
                            <label className="block py-1">Monto</label>
                            <input
                                type="number"
                                step="0.01"
                                value={amount}
                                onChange={handleChangeAmount}
                                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                            />
                        </div>
                        <div>
                            <label className="block py-1">Comentario</label>
                            <input
                                type="text"
                                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                            />
                        </div>
                        <div className="flex gap-3 pt-3 items-center">
                            <button
                                onClick={handleSubmit} // Llama a handleSubmit en el click del botón
                                className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300"
                            >
                                Transferir Ahora
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-xs italic">Error: {error.message}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};