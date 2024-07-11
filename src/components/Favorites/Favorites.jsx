import React, { useState } from 'react';
import useAddFavorite from '../../shared/hooks/useAddFavorite';
import toast from 'react-hot-toast';

export const Favorites = () => {
    const [formData, setFormData] = useState({
        dpi: '',
        accountNumber: '',
        alias: ''
    });
    const { addFavorite, loading } = useAddFavorite();

    // Obtén el número de cuenta desde el local storage
    const numer = JSON.parse(localStorage.getItem('num'));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (numer) {
            const success = await addFavorite(numer, formData);
            if (success) {
                setFormData({
                    dpi: '',
                    accountNumber: '',
                    alias: ''
                });
            }
        } else {
            toast.error('No account number found in local storage');
        }
    };

    return (
        <>
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center mb-12 mt-10">
                <h1 className="text-xl font-bold text-center text-gray-900 dark:text-gray-500 mb-8">Add Favorites</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="dpi" className="text-sm text-gray-900 dark:text-gray-500 mr-2">DPI:</label>
                        <input
                            type="text"
                            id="dpi"
                            name="dpi"
                            className="w-full px-3 text-gray-900 bg-white dark:text-gray-900 dark:bg-gray-200 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={formData.dpi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="accountNumber" className="text-sm text-gray-900 dark:text-gray-500 mr-2">No. Cuenta:</label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            className="w-full px-3 text-gray-900 bg-white dark:text-gray-900 dark:bg-gray-200 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={formData.accountNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="alias" className="text-sm text-gray-900 dark:text-gray-500 mr-2">Alias:</label>
                        <input
                            type="text"
                            id="alias"
                            name="alias"
                            className="w-full px-3 text-gray-900 bg-white dark:text-gray-900 dark:bg-gray-200 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={formData.alias}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm" disabled={loading}>
                        {loading ? 'Adding...' : 'Add Favorite'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Favorites;
