import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { fetchUsers } from '../../store/slices/UserSlice';
import { SearchInput } from '../SearchInput';
import { FilterSelector } from '../FilterSelector';
import { filterUsers } from '../../utils';
import { Container, Loader } from '../ui';
import UserRow from './UserRow';

const UserTable: React.FC = () => {
	const dispatch = useTypedDispatch();
	const { users, loading, error } = useTypedSelector(state => state.users);

	const [selectedFilter, setSelectedFilter] = useState('name');
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) return <Loader />;
	if (error) {
		toast.error('Ooops, Something went wrong :(');
	}

	const filteredUsers = filterUsers(users, selectedFilter, searchValue);

	return (
		<Container className="flex-grow">
			<div className="flex flex-row items-center justify-between">
				<h1 className="text-center text-4xl uppercase my-8 ">Users table:</h1>
			</div>
			<div className="flex-grow">
				<div className="mb-8 flex space-x-4 justify-between md:justify-start">
					<FilterSelector
						selectedFilter={selectedFilter}
						onChange={e => {
							setSelectedFilter(e.target.value);
							setSearchValue('');
						}}
					/>
					<SearchInput
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						placeholder={`Filter by ${selectedFilter}`}
					/>
				</div>
				<div className="overflow-x-auto rounded-ss-2xl rounded-se-2xl">
					<table className="w-full mb-5 align-middle text-dark min-w-[900px]">
						<thead className="align-bottom">
							<tr className="font-semibold text-[0.95rem] text-secondary-dark">
								<th className="py-3 uppercase text-center text-white bg-blue-300">
									ID
								</th>
								<th className="py-3 px-3 uppercase text-start text-white bg-blue-400 md:px-6">
									Name
								</th>
								<th className="py-3 px-3 uppercase text-start text-white bg-blue-500 md:px-6">
									Username
								</th>
								<th className="py-3 px-3 uppercase text-start text-white bg-blue-700 md:px-6">
									Email
								</th>
								<th className="py-3 px-3 uppercase text-start text-white bg-blue-900 md:px-6">
									Phone
								</th>
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
		</Container>
	);
};

export default UserTable;
