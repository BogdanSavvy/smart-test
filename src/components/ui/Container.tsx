import React from 'react';

const Container = ({ children }: { children: React.ReactElement }) => {
	return <div className="max-w-[1250px] mx-auto px-[15px]">{children}</div>;
};

export default Container;
