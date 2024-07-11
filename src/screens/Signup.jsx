import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
	const [active, setActive] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);
	const [male, setMale] = useState(true);
	const [Gactive, setGactive] = useState(false);
	const navigate = useNavigate();

	const handlePrivilege = (act, isAd, e) => {
		e.preventDefault();
		setActive(act);
		setIsAdmin(isAd);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/login');
	};
	const handleGender = (male, female, e) => {
		e.preventDefault();
		setMale(male);
		setGactive(female);
	};
	return (
		<div>
			<h1>xACS Signup</h1>
			<form action="">
				<div className="group-box">
					<div className="input-box">
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" />
					</div>
					<div className="btn">
						<button
							onClick={(e) => handleGender(true, false, e)}
							className={male && 'login'}
						>
							Male
						</button>
						<button
							onClick={(e) => handleGender(false, true, e)}
							className={Gactive && !male && 'login'}
						>
							Female
						</button>
					</div>
				</div>
				<div className="group-box">
					<div className="input-box">
						<label htmlFor="password">Password:</label>
						<input type="text" id="password" />
					</div>
					<div className="input-box">
						<label htmlFor="datetime">Date of Birth:</label>
						<input type="date" id="datetime" />
					</div>
				</div>
				<div className="input-box">
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" />
				</div>
				<div className="group-box">
					<div className="input-box">
						<label htmlFor="state">State:</label>
						<input type="text" id="state" />
					</div>
					<div className="input-box">
						<label htmlFor="country">Country:</label>
						<input type="text" id="country" />
					</div>
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
						Signup
					</button>
				</div>
			</form>
		</div>
	);
}

export default Signup;
