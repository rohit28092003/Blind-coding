import React,{ useState, useEffect, useContext } from 'react';
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 
const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	const navigate = useNavigate();
	const[formdata,setformdata]=useState({
		name:"",
		email:""
	})
	const{name,email} = formdata
	const handlechange = (e)=>{
		setformdata((prev)=>({
			...prev,
			[e.target.name]:e.target.value
		}))
	}

	const handlesubmit = async (e)=>{
		e.preventDefault();
		localStorage.setItem(
			"login",JSON.stringify(formdata)
		)
		const response = await fetch("https://blind-coding-backend.vercel.app/signup",{
			method:"POST",
			headers: { "Content-Type": "application/json" },
          // json:program,
          	body: JSON.stringify(formdata),
		})
		navigate('/ques1')
	}
 
	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form onSubmit={handlesubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name='name' placeholder="Enter your name" required
						value={name}
						onChange={handlechange}
					  />
					</div>
					<div>
						<label htmlFor="e-mail" >E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail"
						required
						name='email'
						value={email} onChange={handlechange}
       />
					</div>
					<button type="submit">
						Submit
					</button>
				</form>
				{/* <p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p> */}
			</div>
		</div>
	);
}
