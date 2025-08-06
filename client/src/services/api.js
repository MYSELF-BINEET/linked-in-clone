import axios from "axios";

const API = axios.create({
  baseURL: "https://linked-in-clone-ws30.onrender.com/api/",
  withCredentials: true,
});

export default API;
