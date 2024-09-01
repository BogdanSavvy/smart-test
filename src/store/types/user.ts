import { User } from '../../types';

export interface UserState {
	users: User[];
	loading: boolean;
	error: string | null;
}
