// api/productReviewScores.js
import axios from 'axios';
import { API_ENDPOINTS } from '../utils/config';

export const getProductReviewScores = async () => {
    try {
        // Static body parameters
        const body = {
            product_id: '0513ab340eced913dce82594bd118ff0',
            first_level_cat: 'tools_hardware'
        };

        const response = await axios.post(API_ENDPOINTS.GET_PRODUCT_REVIEW_SCORES, body);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch product review scores:', error);
        throw error;
    }
};
