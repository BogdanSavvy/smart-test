import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { fetchUsers } from '../../store/slices/UserSlice';
import UserRow from './UserRow';
import { SearchInput } from '../SearchInput';
import { FilterSelector } from '../FilterSelector';
import { filterUsers } from '../../utils';
import { Loader } from '../ui';

const UserTable: React.FC = () => {
	const dispatch = useTypedDispatch();
	const { users, loading, error } = useTypedSelector(state => state.users);

	const [selectedFilter, setSelectedFilter] = useState('name');
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) return <Loader />;
	if (error) return <p>Error: {error}</p>;

	const filteredUsers = filterUsers(users, selectedFilter, searchValue);

	return (
		<div className="p-4">
			<div className="mb-10 flex space-x-4">
				<FilterSelector
					selectedFilter={selectedFilter}
					onChange={e => setSelectedFilter(e.target.value)}
				/>
				<SearchInput
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder={`Filter by ${selectedFilter}`}
				/>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full my-0 align-middle text-dark border-neutral-200">
					<thead className="align-bottom">
						<tr className="font-semibold text-[0.95rem] text-secondary-dark">
							<th className="pb-3 text-center border-r">ID</th>
							<th className="pb-3 text-start pl-6">Name</th>
							<th className="pb-3 text-start pl-6">Username</th>
							<th className="pb-3 text-start pl-6">Email</th>
							<th className="pb-3 text-start pl-6">Phone</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.map(user => (
							<UserRow key={user.id} user={user} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserTable;
