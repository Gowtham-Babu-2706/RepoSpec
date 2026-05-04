import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8080/api/v1/repos",
    timeout:20000,
    headers:{
        "Content-Type":"application/json",
    }
});

export default api;