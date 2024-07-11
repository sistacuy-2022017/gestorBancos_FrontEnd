import React, { useEffect } from 'react';
import { useGetRequest } from '../../shared/hooks/index'; // Ajusta la ruta según tu estructura de archivos

export const AccountsAddAdmin = () => {
  const { requestData, isLoading, error } = useGetRequest();

  useEffect(() => {
    console.log("Request Data:", requestData); // Verifica los datos obtenidos
  }, [requestData]);

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
              </tr>
            </thead>
            <tbody className="bg-white">
              {requestData && requestData.length > 0 ? (
                requestData.map((data) => (
                  <tr key={data.id} className="text-gray-700">
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="px-4 py-3 border">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
