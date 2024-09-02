import { Toaster } from 'react-hot-toast';

import { Footer } from './components/ui';
import { UserTable } from './components/UsersTable';

const App = () => {
	return (
		<main className="h-full flex flex-col bg-smart-bg bg-no-repeat bg-left-bottom bg-[length:150px_150px] lg:bg-[length:220px_220px] sm:bg-right-top">
			<UserTable />
			<Footer />
			<Toaster position="top-right" reverseOrder={false} />
		</main>
	);
};

export default App;
