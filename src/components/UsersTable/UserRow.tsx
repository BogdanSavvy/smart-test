import React from 'react';
import { User } from '../../types';

interface UserRowProps {
	user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
	return (
		<tr className="border-b last:border-b-0">
			<td className="px-2 py-4 border-b border-r text-center">#{user.id}</td>
			<td className="px-6 py-4 border-b">{user.name}</td>
			<td className="px-6 py-4 border-b">{user.username}</td>
			<td className="px-6 py-4 border-b">{user.email}</td>
			<td className="px-6 py-4 border-b">{user.phone}</td>
		</tr>
	);
};

export default UserRow;
