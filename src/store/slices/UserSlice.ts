import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserState } from '../types/user';
import { User } from '../../types/user';

const initialState: UserState = {
	users: [],
	loading: false,
	error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
	'users/fetchUsers',
	async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users',
		);
		return response.data;
	},
);

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch users';
			});
	},
});

export default userSlice.reducer;
