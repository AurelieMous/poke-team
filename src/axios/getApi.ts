import axios from "axios";

const API_URL =' https://tyradex.app/api/v1/';

const getAPI = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default getAPI;
