import React, { useState, useRef } from 'react';
import Layout from './servicesLayout'; // Asumiendo que tienes un componente Layout definido
//import { CreateService } from '../Servicios/AgregarServicio'; // Importa el componente CreateService
import 'bootstrap/dist/css/bootstrap.min.css';
import './Servicios.css';

const servicesData = [
    {
        name: "Servicio 1",
        description: "Descripción del servicio 1. Aquí puedes agregar más detalles sobre lo que ofrece este servicio.",
        price: 100,
        category: "Categoría 1",
        availability: true,
        discount: 20,
        image: "data:image/png;base64,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",
    },
    {
        name: "Servicio 2",
        description: "Descripción del servicio 2. Aquí puedes agregar más detalles sobre lo que ofrece este servicio.",
        price: 70,
        category: "Categoría 2",
        availability: false,
        discount: 0,
        image: "data:image/png;base64,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",
    },
    {
        name: "Servicio 3",
        description: "Descripción del servicio 4. Aquí puedes agregar más detalles sobre lo que ofrece este servicio.",
        price: 100,
        category: "Categoría aña",
        availability: true,
        discount: 10,
        image: "data:image/png;base64,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",
    },
    {
        name: "Servicio 4",
        description: "Descripción del servicio 2. Aquí puedes agregar más detalles sobre lo que ofrece este servicio.",
        price: 70,
        category: "Agua",
        availability: true,
        discount: 50,
        image: "data:image/png;base64,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",
    },
    // Otros servicios...
];
export const ServicesAd = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

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

