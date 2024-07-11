import { useState, useEffect } from 'react';
import axios from 'axios';
const useServices = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        // Realizar la consulta Axios y actualizar el estado
        axios.get('http://127.0.0.1:8080/BicBank/v1/product/')
            .then(response => {
                setServicesData(response.data.entities); // Actualizar el estado con los datos obtenidos
            })
            .catch(error => {
                console.error('Error fetching services data:', error);
            });
    }, []); // El segundo argumento vacío [] asegura que useEffect se ejecute solo una vez al montar el componente

    return servicesData;
};

export default useServices;
