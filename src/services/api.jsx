import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/BicBank/v1',
    timeout: 1000,
});

try {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        const parsedDetails = JSON.parse(userDetails);
        const token = parsedDetails.token;
        if (token) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }
} catch (e) {
    console.error("Error parsing user details from localStorage", e);
}

apiClient.interceptors.request.use(
    (config) => {
        try {
            const userDetails = localStorage.getItem('user');
            if (userDetails) {
                const parsedDetails = JSON.parse(userDetails);
                const token = parsedDetails.token;
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
        } catch (e) {
            console.error("Error parsing user details from localStorage during request interception", e);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const register = async (data) => {
    try{
        return await apiClient.post('request/post', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}


export const getAccountByToken = async () => {
    try {
        return await apiClient.get('/account/getAccountByUser');
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

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

export const getRequest = async () => {
    try {
        return await apiClient.get('/request/get');
    } catch (e) {
        return {
            error: true,
            e,
        }
    }
}

export const postTransaccion = async (data) => {
    try {
        return await apiClient.post('/transaction/post', data);
    } catch (e) {
        return {
            error: true,
            e,
        }
    }
}

export const postUser = async (data) => {
    try {
        return await apiClient.post('/user/post', data);
    } catch (e) {
        return {
            error: true,
            e,
        }
    }
}