import React from 'react'

const CardInfo = () => {
    return (
        <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div class="p-6">
                <h2 class="text-xl font-bold mb-2">Información de Cuenta</h2>
                <p class="text-gray-700 mb-2"><strong>No. de Cuenta:</strong> 123456789</p>
                <p class="text-gray-700 mb-2"><strong>Dueño de Cuenta:</strong> Rasputia Norbit</p>
                <p class="text-gray-700 mb-4"><strong>Saldo de Cuenta:</strong> $5,000.00</p>
                <div class="flex space-x-2">
                    <button class="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Movimientos</button>
                    <button class="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Transacciones</button>
                </div>
            </div>
        </div>
    )
}

export default CardInfo
