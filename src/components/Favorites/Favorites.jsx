

export const Favorites = () => {
    return (
        <>
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center mb-12">
                <h1 className="text-xl font-bold text-center text-gray-900 dark:text-gray-500 mb-8">Add Favorites</h1>
                <form action="#" className="w-full flex flex-col gap-4">
                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="dpi" className="text-sm text-gray-900 dark:text-gray-500 mr-2">DPI:</label>
                        <input type="text" id="dpi" name="dpi" className="w-full px-3 text-gray-900 bg-white dark:text-gray-900 dark:bg-gray-200 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="accountNumber" className="text-sm text-gray-900 dark:text-gray-500 mr-2">No. Cuenta:</label>
                        <input type="text" id="accountNumber" name="accountNumber" className="w-full px-3 text-gray-900 bg-white dark:text-gray-900 dark:bg-gray-200 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="alias" className="text-sm text-gray-900 dark:text-gray-500 mr-2">Alias:</label>
                        <input type="text" id="alias" name="alias" className="w-full px-3 text-gray-900 bg-white dark:text-gray-900 dark:bg-gray-200 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Add Favorite</button>
                </form>
            </div>
        </>
    );
};