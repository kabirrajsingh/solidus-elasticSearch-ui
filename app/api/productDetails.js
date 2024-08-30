// api/productDetails.js
import axios from 'axios';
import { API_ENDPOINTS } from '../utils/config';

export const getProductDetails = async (productId) => {
    console.log(productId)
    try {
        // Construct the URL with the product ID
        const url = `${API_ENDPOINTS.PRODUCT}/${productId}`;
        console.log(url); // For debugging
        // Make the GET request
        const response = await axios.get(url);
        console.log(response); // For debugging
        // Return the response data
        return response.data;
    } catch (error) {
        // Log and throw the error if the request fails
        console.error('Error fetching product details:', error);
        throw error;
    }
};
