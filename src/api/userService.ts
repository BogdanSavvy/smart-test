import axios from 'axios';

import { User } from '../types';

// Base URL for the JSONPlaceholder API
const API_URL = 'https://jsonplaceholder.typicode.com';

// Function to fetch the list of all users
export const getUsers = async (): Promise<User[]> => {
	try {
		const response = await axios.get<User[]>(`${API_URL}/users`);
		return response.data;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};