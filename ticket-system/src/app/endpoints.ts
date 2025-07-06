import { environment } from './enviroments/enviroment';
const API = environment.apiUrl;

export const ENDPOINTS = {
    AUTH: {
        LOGIN: `${API}/api-token-auth/`,
        REGISTER: `${API}/api/register/`
    },
    TICKETS: {
        BASE: `${API}/api/tickets/`,
        BY_ID: (id: number) => `${API}/api/tickets/${id}/`,
        USER: `${API}/api/tickets/`
    }
};