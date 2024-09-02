import React from 'react';

import Container from './Container';

const Footer: React.FC = () => {
	return (
		<footer>
			<Container>
				<div className="mx-auto py-6 flex flex-row items-center justify-between">
					<p className="flex-grow text-center text-xs text-black">
						&copy; 2024 SMART-TEST-TASK, Inc. All rights reserved.
					</p>
					<div className="flex gap-x-2">
						<a href="https://github.com/BogdanSavvy" target="_blank">
							<img src="/github-mark.svg" alt="github_i" className="w-6 h-6" />
						</a>
						<a href="https://linkedin.com/in/bogdan-svn" target="_blank">
							<img src="/linkedin.svg" alt="linkedin_i" className="w-6 h-6" />
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
