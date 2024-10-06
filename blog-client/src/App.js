import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NewsFeed from './pages/NewsFeed';
import EditorPage from './pages/EditorPage';
import PostDetailsPage from './pages/PostDetailsPage';
import { ThemeProvider } from './utils/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<NewsFeed />} />
						<Route path="/create" element={<EditorPage />} />
						<Route path="/posts/:id" element={<PostDetailsPage />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
