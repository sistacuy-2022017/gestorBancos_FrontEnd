import React from 'react'

const ListMovimientos = () => {
    return (
        <div>
            <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
                <div class="p-6">
                    <h2 class="text-xl font-bold mb-4">Lista de Movimientos</h2>
                    <ul class="divide-y divide-gray-200">
                        <li class="py-4 flex justify-between items-center">
                            <div>
                                <p class="text-gray-700 font-semibold">01/07/2024</p>
                                <p class="text-gray-500">Depósito</p>
                            </div>
                            <p class="text-green-500 font-bold">+$500.00</p>
                        </li>
                        <li class="py-4 flex justify-between items-center">
                            <div>
                                <p class="text-gray-700 font-semibold">02/07/2024</p>
                                <p class="text-gray-500">Retiro</p>
                            </div>
                            <p class="text-red-500 font-bold">-$200.00</p>
                        </li>
                        <li class="py-4 flex justify-between items-center">
                            <div>
                                <p class="text-gray-700 font-semibold">03/07/2024</p>
                                <p class="text-gray-500">Depósito</p>
                            </div>
                            <p class="text-green-500 font-bold">+$300.00</p>
                        </li>
                        <li class="py-4 flex justify-between items-center">
                            <div>
                                <p class="text-gray-700 font-semibold">04/07/2024</p>
                                <p class="text-gray-500">Retiro</p>
                            </div>
                            <p class="text-red-500 font-bold">-$150.00</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListMovimientos
