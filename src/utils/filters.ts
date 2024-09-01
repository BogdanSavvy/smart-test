import { User } from '../types';

const filterUsers = (
	users: User[],
	selectedFilter: string,
	searchValue: string,
): User[] => {
	return users.filter(user =>
		user[selectedFilter as keyof typeof user]
			.toString()
			.toLowerCase()
			.includes(searchValue.toLowerCase()),
	);
};
export default filterUsers;
