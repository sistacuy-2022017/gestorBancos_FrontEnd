import React, { useState } from 'react';
import { Box, Button, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Dropzone from 'react-dropzone';
import './CreateService.css'; // Asegúrate de enlazar correctamente tu archivo CSS
import useAgregarServicio from '../../shared/useAgregarServicio'; // Importa el hook useAgregarServicio

export const CreateService = ({ onClose }) => {
    const [serviceData, setServiceData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        discountEnabled: false,
        discount: '',
        image: null
    });

    const [requiredFields, setRequiredFields] = useState({
        name: false,
        description: false,
        price: false,
        category: false,
        image: false
    });

    const { agregarServicio, isLoading, error } = useAgregarServicio();

    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        if (name === 'discountEnabled') {
            setServiceData({ ...serviceData, discountEnabled: checked, discount: checked ? '0' : '' });
        } else if (name === 'discount') {
            // Validar que el valor sea un número entre 0 y 100
            const numValue = Number(value);
            if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
                setServiceData({ ...serviceData, [name]: value });
            }
        } else if (name === 'price') {
            // Validar que el valor solo contenga números
            const regex = /^[0-9.]*$/; // Permitir números y punto decimal
            if (value === '' || regex.test(value)) {
                setServiceData({ ...serviceData, [name]: value });
            }
        } else {
            setServiceData({ ...serviceData, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validar campos requeridos
        const requiredFieldsCheck = {};
        let isValid = true;

        Object.keys(serviceData).forEach(key => {
            if (key === 'image' && !serviceData[key]) {
                requiredFieldsCheck[key] = true;
                isValid = false;
            } else if (key !== 'discount' && key !== 'discountEnabled' && !serviceData[key]) {
                requiredFieldsCheck[key] = true;
                isValid = false;
            } else {
                requiredFieldsCheck[key] = false;
            }
        });

        setRequiredFields({ ...requiredFieldsCheck });

        if (isValid) {
            await agregarServicio(serviceData);
            onClose(); // Cerrar el modal después de crear el servicio
            window.location.reload();
        }
    };

    const handleDrop = (acceptedFiles) => {
        const image = acceptedFiles[0];
        if (image) {
            setServiceData({ ...serviceData, image: image });
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleFileInputChange = (event) => {
        const image = event.target.files[0];
        if (image) {
            setServiceData({ ...serviceData, image: image });
        }
    };

    return (
        <Box className="form-container">
            <Box className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto bg-white rounded-md shadow-2xl overflow-hidden">
                <div className="hidden lg:flex w-full lg:w-1/2 ser_img_section justify-around items-center relative">
                    {}
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white p-8 lg:p-16">
                    <div className="w-full">
                        <form className="bg-white rounded-md shadow-2xl p-5" onSubmit={handleSubmit}>
                            <h1 className="text-gray-800 font-bold text-2xl mb-4 text-center lg:text-left">
                                Create a Service
                            </h1>
                            <div className="mb-4">
                                <TextField
                                    variant="outlined"
                                    label="Service Name"
                                    fullWidth
                                    name="name"
                                    value={serviceData.name}
                                    onChange={handleChange}
                                    error={requiredFields.name}
                                    helperText={requiredFields.name && 'Service Name is required'}
                                    className="mb-3"
                                />
                                <TextField
                                    variant="outlined"
                                    label="Description"
                                    fullWidth
                                    name="description"
                                    value={serviceData.description}
                                    onChange={handleChange}
                                    error={requiredFields.description}
                                    helperText={requiredFields.description && 'Description is required'}
                                    className="mb-3"
                                />
                                <TextField
                                    variant="outlined"
                                    label="Price"
                                    fullWidth
                                    name="price"
                                    value={serviceData.price}
                                    onChange={handleChange}
                                    error={requiredFields.price}
                                    helperText={requiredFields.price && 'Price is required'}
                                    className="mb-3"
                                    inputProps={{ pattern: '[0-9.]+' }} // Asegura que solo acepte números y punto decimal
                                />
                                <TextField
                                    variant="outlined"
                                    label="Category"
                                    fullWidth
                                    name="category"
                                    value={serviceData.category}
                                    onChange={handleChange}
                                    error={requiredFields.category}
                                    helperText={requiredFields.category && 'Category is required'}
                                    className="mb-3"
                                />
                                <div className="mb-3">
                                    <FormControlLabel
                                        control={<Checkbox
                                            checked={serviceData.discountEnabled}
                                            onChange={handleChange}
                                            name="discountEnabled"
                                        />}
                                        label="Apply Discount"
                                    />
                                    {serviceData.discountEnabled &&
                                        <TextField
                                            variant="outlined"
                                            label="Discount (%)"
                                            fullWidth
                                            name="discount"
                                            value={serviceData.discount}
                                            onChange={handleChange}
                                            className="mb-3"
                                            inputProps={{ pattern: '[0-9]*' }} // Asegura que solo acepte números
                                        />
                                    }
                                </div>
                            </div>
                            <div className="mb-3">
                                <Dropzone
                                    accept={{ 'image/jpeg': [], 'image/png': [] }} // Tipos MIME válidos
                                    multiple={false}
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    {({ getRootProps, getInputProps, isDragActive }) => (
                                        <Box
                                            {...getRootProps()}
                                            p="1rem"
                                            sx={{
                                                "&:hover": { cursor: "pointer" },
                                                bgcolor: isDragActive ? "#cceffc" : "#fafafa",
                                            }}
                                            className="drop-area"
                                        >
                                            <input {...getInputProps()} />
                                            {isDragActive ? (
                                                <>
                                                    <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                                                    <Typography variant="body2">Drop the image here</Typography>
                                                </>
                                            ) : serviceData.image ? (
                                                <Typography variant="body2">{serviceData.image.name}</Typography>
                                            ) : (
                                                <>
                                                    <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                                                    <Typography variant="body2">Drag 'n' drop an image here, or click to select one</Typography>
                                                </>
                                            )}
                                        </Box>
                                    )}
                                </Dropzone>
                                {requiredFields.image &&
                                    <Typography color="error" variant="body2">
                                        Image is required
                                    </Typography>
                                }
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    style={{ display: 'none' }}
                                    onChange={handleFileInputChange}
                                    accept="image/jpeg, image/png"
                                />
                            </div>
                            {error &&
                                <Typography color="error" variant="body2" className="mb-3">
                                    {error}
                                </Typography>
                            }
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={isLoading}
                                fullWidth
                                className="mt-3"
                            >
                                {isLoading ? 'Loading...' : 'Create Service'}
                            </Button>
                        </form>
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default CreateService;
