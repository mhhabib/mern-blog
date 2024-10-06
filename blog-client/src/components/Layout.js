import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
	const location = useLocation();
	const noNavbarPaths = ['/editor', '/post'];

	const showNavbar = !noNavbarPaths.some((path) =>
		location.pathname.startsWith(path)
	);

	return (
		<div className="min-h-screen flex flex-col bg-backgroundColor text-textColor">
			<Header />
			{showNavbar && <Navbar />}
			<main className="flex-grow px-4 py-8">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
