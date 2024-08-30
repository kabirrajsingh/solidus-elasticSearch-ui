import axios from 'axios';
import { API_ENDPOINTS } from '../utils/config';

export const getPaginatedProducts = async (pageNumber = 1, pageSize = 20) => {
    try {
        // Construct the URL with pagination parameters
        const url = `${API_ENDPOINTS.PRODUCTS_PAGINATED}/${pageSize}/${pageNumber}`;
        console.log(url)
        // Make the GET request
        const response = await axios.get(url);
        console.log(response)
        // Return the response data 
        return response.data;
    } catch (error) {
        // Log and throw the error if the request fails
        console.error('Error fetching paginated products:', error);
        throw error;
    }
};
