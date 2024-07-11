import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/BicBank/v1',
    timeout: 1000,
});


export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getAccount = async () => {
    try {
        return await apiClient.get('/account/get');
    } catch (e) {
        return {
            error: true,
            e,
        }
    }
}

export const getTransactions = async (data) => {
    try {
        return await apiClient.get(`/account/${data}`);
    } catch (e) {
        return {
            error: true,
            e,
        }
    }
}