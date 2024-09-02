import React from 'react';

import { cn } from '../../utils';

const Container: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => {
	return (
		<div className={cn('w-full max-w-[1480px] mx-auto px-[15px]', className)}>
			{children}
		</div>
	);
};

export default Container;
