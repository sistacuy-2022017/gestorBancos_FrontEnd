import React from 'react';
import Layout from './servicesLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Servicios.css';
import useServices from '../../shared/useServices';

export const Services = () => {
    const servicesData = useServices();

    // Función para calcular el precio con descuento
    const calculateDiscountPrice = (price, discount) => {
        return price - (price * discount / 100);
    };

    // Función para renderizar el precio con descuento si aplica
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

    // Función para manejar el click en un servicio
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
                    {/* Aquí va tu código existente para el encabezado */}
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
            </div>
        </Layout>
    );
};

export default Services;
