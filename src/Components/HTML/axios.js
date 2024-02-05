import axios from 'axios';

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/app-2ef59/us-central1/api",
});
export default instance;


// http://localhost:5001/fir-9e294/us-central1/api