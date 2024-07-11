import React, { useState, useRef } from 'react';
import Layout from './servicesLayout'; // Asumiendo que tienes un componente Layout definido
import { CreateService } from '../Servicios/AgregarServicio'; // Importa el componente CreateService
import 'bootstrap/dist/css/bootstrap.min.css';
import './Servicios.css';
import useServices from '../../shared/useServices'; // Importa el hook useServices

export const ServicesAd = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const servicesData = useServices(); // Usa el hook useServices para obtener los datos de los servicios dinámicamente

    const handleCreateButtonClick = () => {
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

    const calculateDiscountPrice = (price, discount) => {
        return price - (price * discount / 100);
    };

    const renderPriceWithDiscount = (price, discount) => {
        if (discount > 0) {
            const discountedPrice = calculateDiscountPrice(price, discount);
            return (
                <div className="d-inline">
                    <span className="line-through text-gray-500 dark:text-gray-400">${price}</span>
                    <span className="ml-2 text-green-500 dark:text-green-400">${discountedPrice}</span>
                </div>
            );
        }
        return <span>${price}</span>;
    };

    const handleServiceClick = (service) => {
        if (service.availability) {
            const isConfirmed = window.confirm(`¿Estás seguro de que deseas obtener el servicio "${service.name}"?`);
            if (isConfirmed) {
                alert(`Has adquirido el servicio "${service.name}"`);
            }
        } else {
            // alert('El servicio no está disponible en este momento.');
        }
    };

    return (
        <Layout>
            <div className="container">
                <div className="row mb-4">
                    <div className="col text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm text-gray-800 dark:text-gray-300">
                                B I C B A N K
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Descubre nuestros servicios</h2>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                {service.discount > 0 && (
                                    <div className="discount-badge">
                                        {service.discount}% OFF
                                    </div>
                                )}
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title font-bold">{service.name}</h5>
                                    <p className="card-text text-justify w-100">{service.description}</p>
                                    <div className="card-text">Price: {renderPriceWithDiscount(service.price, service.discount)}</div>
                                    <p className="card-text">Category: {service.category}</p>
                                    {service.availability ? (
                                        <button
                                            onClick={() => handleServiceClick(service)}
                                            className="btn btn-success"
                                        >
                                            Obtener servicio
                                        </button>
                                    ) : (
                                        <p className="text-danger">No disponible</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <button className="btn btn-primary" onClick={handleCreateButtonClick}>
                            Create
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={handleBackdropClick}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content" ref={modalRef}>
                            <div className="modal-header">
                                <h5 className="modal-title">New service</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Renderiza el componente CreateService aquí */}
                                <CreateService />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                                {/* Puedes agregar más botones según sea necesario */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default ServicesAd;
