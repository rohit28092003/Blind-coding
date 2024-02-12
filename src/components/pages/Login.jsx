import React,{ useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 
const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	const navigate = useNavigate();
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 
	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" required
						value={name}
						onChange={(e) => setName(e.target.value)}
					  />
					</div>
					<div>
						<label htmlFor="e-mail" >E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail"required
						value={email}
      onChange={(e) => setEmail(e.target.value)} />
					</div>
					<button type="submit" onClick={()=>navigate('/ques1')}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
	);
}
