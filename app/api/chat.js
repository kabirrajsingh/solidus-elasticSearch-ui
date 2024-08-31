import axios from 'axios';
import { API_ENDPOINTS } from '../utils/config';
export const continueChat = async (user_id,session_id, userInput) => {
    try {
        const response = await axios.post(API_ENDPOINTS.CHAT, { 
    user_id:user_id,
            user_input: userInput,
            session_id :session_id
        });
console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};