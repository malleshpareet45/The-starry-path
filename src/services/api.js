import { API_BASE_URL } from '../constants';

// Placeholder for API service functions
export const fetchExampleData = async () => {
    // const response = await fetch(`${API_BASE_URL}/example`);
    // return response.json();
    return Promise.resolve({ data: 'example' });
};
