import React from 'react';

interface SearchInputProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
	value,
	onChange,
	placeholder,
}) => {
	return (
		<input
			className="bg-zinc-200 text-zinc-600 w-1/4 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
			type="text"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default SearchInput;
