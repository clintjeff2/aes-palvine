import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './screens/Upload';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			{/* <Login /> */}
			<Routes>
				<Route path="/" Component={Login} />
				<Route path="/login" Component={Login} />
				<Route path="/signup" Component={Signup} />
				<Route path="/upload" Component={Upload} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
