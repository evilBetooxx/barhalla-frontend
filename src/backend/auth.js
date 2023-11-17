import axios from 'axios';

const API = process.env.NEXT_PUBLIC_BACKEND_URL;

export const registerRequest = user => axios.post(`${API}/register`, user)