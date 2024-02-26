import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
	const Navigate = useNavigate();
	const [UserName, setUserName] = useState('')
	const [Password, setPassword] = useState('')
	const [SignInUserName, setSignInUserName] = useState('')
	const [SignInPassword, setSignInPassword] = useState('')
	console.log({ UserName, Password })
	const HandleSub = () => {
		fetch('https://vercel-deployment-server-mu.vercel.app/signIn', {
			method: "POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({ SignInUserName, SignInPassword })
		}).then(res => {
			return res.json()
		}).then(data => {
			console.log(data)
		})
	}
	const HandleSubCheck = () => {
		fetch('https://vercel-deployment-server-mu.vercel.app/login', {
			method: "POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({ UserName, Password })
		}).then(res => {
			return res.json();
		}).then(data => {
			if(data.Success) {
				Navigate('Home')
			}
			console.log(data);
		})
	}
	return (
		<div>
			<h1>login in </h1>
			<input type='text' onChange={(e) => setUserName(e.target.value)}/>
			<input type='password' onChange={(e) => setPassword(e.target.value)}/>
			<button type='submit' onClick={HandleSubCheck}>Submit</button>
			<br></br>
			<h1>Sign Up </h1>
			<input type='text' onChange={(e) => setSignInUserName(e.target.value)}/>
			<input type='password' onChange={(e) => setSignInPassword(e.target.value)}/>
			<button type='submit' onClick={HandleSub}>Submit</button>
		</div>
	)
}

export default Login