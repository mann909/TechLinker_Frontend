import axios from "axios";
import { useDispatch } from "react-redux";
// import {useCookies} from "react-cookie"

/**
 * Add Base URL
 */
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://192.168.1.6:81/api/v1";

/**
 * Function to make API requests using Axios
 * @param method The HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param endpoint The API endpoint
 * @param headers Additional headers for the request
 * @param data Data to be sent with the request (for POST and PUT requests)
 * @returns A Promise that resolves with the API response data
 */
const ApiService = async ({ method, endpoint, headers = {}, data }) => {

  /**
   *  Configuration for Axios request
   */

  const axiosConfig = {
    method,
    url: `${API_BASE_URL}/${endpoint}`,
    
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    withCredentials:true,
    data,
  };

  /**
   * Creating an instance of Axios
   */
  const api = axios.create();

  api.interceptors.request.use((config) => {
    return config;
  });

  /**
   * Intercepting response before it is resolved
   */
  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error("API Response Error:", error);
      throw error;
    },
  );

  try {
    const response = await api(axiosConfig);
    return response;
  } catch (error) {
    // Throwing any encountered errors
    throw error;
  }
};

export default ApiService;
