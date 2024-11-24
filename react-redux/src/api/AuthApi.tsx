import axios from 'axios';

const loginRequest = (email: string, password: string) => {
    return axios.post('http://localhost:5000/api/auth/login', { email, password });
}


export { loginRequest }

