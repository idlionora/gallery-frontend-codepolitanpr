import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/edit" element={<AdminPage />} />
			<Route path="/post" element={<BlogPost />} />
			<Route path="/post/:id" element={<BlogPost />} />
			<Route path="/login" element={<Login/>}/>
		</Routes>
	);
}

export default App;
