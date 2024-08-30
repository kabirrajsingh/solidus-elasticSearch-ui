import axios from 'axios';
import { API_ENDPOINTS } from '../utils/config';
export const startSession = async (user_id,session_id) => {
    try {
        const response = await axios.post(API_ENDPOINTS.START_SESSION, { user_id:user_id,session_id:session_id });
        return response.data;
    } catch (error) {
        console.error('Failed to start session:', error);
        throw error;
    }
};