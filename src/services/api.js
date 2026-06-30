import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "http://premium-car-rental-production.up.railway.app",
});

export default api;