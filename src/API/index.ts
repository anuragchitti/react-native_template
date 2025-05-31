import axios from "axios";
import { resetNavigation } from "../helpers/navigator";
import { store } from "../store";
import { reset } from '../store/Slices/CounterSlice';



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer 7f7f7f7f7f7f7'
    }
});

// Request interceptors
api.interceptors.request.use(
    (config) => {
        const token = 'sampletoken';
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

// Response interceptors
api.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        if(error.response && error.response.status === 401) {
            // 401 Unauthorized
            store.dispatch(reset());
            resetNavigation();
        }
        if(error.response && error.response.status === 403) {
            // 403 Forbidden error
        }
        if(error.response && error.response.status === 500) {
            // 500 Internal Server Error
        }
        if(error.response && error.response.status === 404) {
            // 404 Not Found
        }
        return Promise.reject(error);
    }
)


export default api;  // export the api instance