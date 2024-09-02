import React from 'react';
import { User } from '../../types';

interface UserRowProps {
	user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
	return (
		<tr className="[:not(:last-child)]:border">
			<td className="px-2 py-3 border-b border-r text-center md:py-4">
				&#35;{user.id}
			</td>
			<td className="px-3 py-3 border-b md:px-6 md:py-4">{user.name}</td>
			<td className="px-3 py-3 border-b md:px-6 md:py-4">{user.username}</td>
			<td className="px-3 py-3 border-b md:px-6 md:py-4">
				<a
					className="hover:underline text-blue-400"
					href={`mailto:${user.email}`}
				>
					{user.email}
				</a>
			</td>
			<td className="px-6 py-4 border-b">
				<a className="hover:underline text-blue-400" href={`tel:${user.phone}`}>
					{user.phone}
				</a>
			</td>
		</tr>
	);
};

export default UserRow;
