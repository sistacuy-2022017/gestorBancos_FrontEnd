import { useState } from "react";
import './divisas.css';

export const Divisas = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        amount: '',
    });

    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const currencyCode = ['GTQ', 'EUR', 'MXN', 'USD', 'CAD', 'HNL'];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        try {
            divisas(formData).then((response) => {
                if (response?.data) {
                    setResult(response.data);
                    setError('');
                }
            });
            setResult(response?.data);
            setError('');
        } catch (error) {
            setError(
                'Error',
                error?.response ? error?.response.data : error?.message
            );
        }
    };

    return (
        <div className="bottom-0 left-0 p-4">
            <section className="converter bg-white p-4 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <select
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value=''>Moneda de origen</option>
                        {currencyCode.map((code) => (
                            <option key={code} value={code}>
                                {code}
                            </option>
                        ))}
                    </select>
                    <select
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value=''>Moneda de destino</option>
                        {currencyCode.map((code) => (
                            <option key={code} value={code}>
                                {code}
                            </option>
                        ))}
                    </select>
                    <input
                        name='amount'
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Escribe el monto a convertir"
                        type="number"
                        className="input"
                    />
                    <button type="submit" className="submit-btn">
                        Convertir
                    </button>
                </form>
                {result && (
                    <div className="result">
                        <p>
                            Total de la conversión: {result.conversionAmount} {result.target}
                        </p>
                        <p>
                            Tipo de cambio: {result.conversionRate}
                        </p>
                    </div>
                )}
                {error && <p className="error">Error: {error}</p>}
            </section>
        </div>
    );
};
