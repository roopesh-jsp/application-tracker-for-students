import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Set the base URL dynamically
});

export default instance;
