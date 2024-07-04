import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5173/api/v1/convert',
    timeout: 1000,
});

export const divisas = async (data) => {
    try {
        return await apiClient.post('/', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}