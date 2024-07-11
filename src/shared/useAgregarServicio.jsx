import { useState } from 'react';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/BicBank/v1',
    timeout: 10000, // Ajusta el timeout según sea necesario
});

const useAgregarServicio = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const agregarServicio = async (serviceData) => {
        setIsLoading(true);

        try {
            // Convertir la imagen a base64
            const imageBase64 = await convertImageToBase64(serviceData.image);

            // Crear los datos del servicio para enviar
            const servicioParaEnviar = {
                name: serviceData.name,
                description: serviceData.description,
                price: parseFloat(serviceData.price),
                category: serviceData.category,
                discount: parseInt(serviceData.discount),
                image: imageBase64,
            };
            
            // Realizar la solicitud POST
            const response = await apiClient.post('/product', servicioParaEnviar);
           
            setSuccess(true);
            setError(null);
        } catch (error) {
            console.error('Error adding service:', error.response);
            setSuccess(false);
            setError(error.response.data.message || 'Error adding service');
        } finally {
            setIsLoading(false);
        }
    };

    const convertImageToBase64 = (imageFile) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return { agregarServicio, isLoading, error };
};

export default useAgregarServicio;
