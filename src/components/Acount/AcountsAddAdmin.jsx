import React, { useEffect } from "react";
import { useGetRequest, usePostUser } from '../../shared/hooks/index.js';

export const AccountsAddAdmin = () => {
    const { requestData, isLoading, error } = useGetRequest();
    const { isSubmitting, response, error: submitError, submitUser } = usePostUser();

    useEffect(() => {
        console.log("Request Data:", requestData); // Verifica los datos obtenidos
    }, [requestData]);

    const handleAccept = (_id) => {
        console.log("Sending ID:", _id); // Log para depurar el valor de ID
        if (_id) {
            submitUser({ id: _id }); // Envía el ID correctamente como `_id`
        } else {
            console.error("ID is undefined"); // Manejar caso donde id es undefined
        }
    };

    if (isLoading) {
        return <p>Loading...</p>; // Muestra un indicador de carga mientras se obtienen los datos
    }

    if (error) {
        return <p>Error: {error}</p>; // Maneja el error si ocurre alguno
    }

    if (!requestData || requestData.length === 0) {
        return <p>No data available</p>; // Maneja el caso de que no haya datos
    }

    return (
        <section className="container mx-auto p-6 font-mono mt-12">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Nickname</th>
                                <th className="px-4 py-3">DPI</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Direction</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">Work Name</th>
                                <th className="px-4 py-3">Work Direction</th>
                                <th className="px-4 py-3">Income</th>
                                <th className="px-4 py-3">Type Account</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {requestData.map((data, index) => (
                                <tr key={index} className="text-gray-700">
                                    <td className="px-4 py-3 border">{data._id}</td>
                                    <td className="px-4 py-3 border">{data.name}</td>
                                    <td className="px-4 py-3 border">{data.nickname}</td>
                                    <td className="px-4 py-3 border">{data.DPI}</td>
                                    <td className="px-4 py-3 border">{data.email}</td>
                                    <td className="px-4 py-3 border">{data.direction}</td>
                                    <td className="px-4 py-3 border">{data.phone}</td>
                                    <td className="px-4 py-3 border">{data.workName}</td>
                                    <td className="px-4 py-3 border">{data.workDirection}</td>
                                    <td className="px-4 py-3 border">{data.income}</td>
                                    <td className="px-4 py-3 border">{data.typeAccount}</td>
                                    <td className="px-4 py-3 border">{data.status ? 'Active' : 'Inactive'}</td>
                                    <td className="px-4 py-3 border">
                                        <button onClick={() => handleAccept(data._id)} className="bg-green-500 text-white px-3 py-1 rounded">Accept</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
