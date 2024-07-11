import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [active, setActive] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);
	const navigate = useNavigate();
	const handlePrivilege = (act, isAd, e) => {
		e.preventDefault();
		setActive(act);
		setIsAdmin(isAd);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/signup'); // Redirect to signup page after successful login
	};

	return (
		<div>
			<h1>xACS Login</h1>
			<form action="">
				<div className="input-box">
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" />
				</div>
				<div className="input-box">
					<label htmlFor="password">Password:</label>
					<input type="text" id="password" />
				</div>
				<div className="button-box">
					<div className="btn">
						<button
							onClick={(e) => handlePrivilege(true, false, e)}
							className={active && 'login'}
						>
							User
						</button>
						<button
							onClick={(e) => handlePrivilege(false, true, e)}
							className={isAdmin && !active && 'login'}
						>
							Admin
						</button>
					</div>
					<button onClick={handleSubmit} className="login" type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
