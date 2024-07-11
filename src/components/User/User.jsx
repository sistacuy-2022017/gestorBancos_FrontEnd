import React, { useState, useRef } from 'react';
import { TransactionHistory } from '../History/History';
import { useUserAccount } from '../../shared/hooks/useUserAccount'; // Importa el hook personalizado
import toast from 'react-hot-toast';

export const User = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const { userData } = useUserAccount(); // Utiliza el hook personalizado para obtener los datos del usuario

    const handleHistoryButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };

    const storedName = localStorage.getItem('name');
    const parsedName = storedName ? JSON.parse(storedName) : 'Guest';

    return (
        <>
            <div className="flex h-screen w-full items-start justify-end bg-slate-200 p-8">
                <div className="mt-8 mr-8 w-96 rounded-xl bg-white shadow-lg">
                    <div className="flex justify-center p-10">
                        <img
                            src="https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-accountavataruser-blue-dotted-line-line-icon-png-image_1491314.jpg"
                            alt=""
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4 p-8">
                        <h3 className="text-xl font-bold text-slate-800">{parsedName}</h3>
                        {userData && (
                            <p className="text-center text-sm text-slate-600">Número de cuenta: {userData.accountNumber}</p>
                        )}

                        <div className="flex w-full items-center gap-3 rounded-lg bg-slate-50 p-3">
                            <div className="rounded-full bg-slate-200 p-2">
                                <img
                                    src="https://images.vexels.com/media/users/3/145753/isolated/lists/cc87af32e3beef17b5e349cec667bda5-bolsa-de-dinero-de-captura.png"
                                    className="h-5 w-5"
                                    alt=""
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-800">Saldo Actual:</h4>
                                {userData && (
                                    <span className="text-xs text-slate-600">${userData.balance}/year</span>
                                )}
                            </div>

                            <button
                                className="ml-auto text-xs font-semibold text-blue-800 underline underline-offset-1 hover:text-blue-700 hover:no-underline focus:text-blue-700 focus:no-underline"
                                onClick={handleHistoryButtonClick}
                            >
                                Historial
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={handleBackdropClick}></div>
                    <div className="modal-container bg-white w-96 lg:w-1/3 rounded-lg shadow-lg z-50" ref={modalRef}>
                        <div className="modal-header p-4 flex justify-between items-center border-b">
                            <h3 className="text-lg font-semibold text-gray-800">Historial de Transacciones</h3>
                            <button className="close-button" onClick={handleCloseModal}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="modal-body p-4 overflow-y-auto max-h-96">
                            <TransactionHistory />
                        </div>
                        <div className="modal-footer p-4 border-t">
                            <button className="btn btn-secondary" onClick={handleCloseModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
