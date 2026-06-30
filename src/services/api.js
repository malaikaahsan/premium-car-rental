import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://www.jsonkeeper.com/b/WQIPM",
});

export default api;