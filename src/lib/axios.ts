import axios from "axios";
import toast from "react-hot-toast";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Konfigurasi permintaan di sini
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modifikasi respons di sini jika diperlukan
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    toast.error(error.response?.data?.message || "An error occurred");
    return Promise.reject(error);
  }
);

export default axiosInstance;
