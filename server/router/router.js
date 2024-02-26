const express = require('express');
const Router = express.Router();
const UsersSchema = require('../schema/schema')

Router.post('/signIn', async (req, res) => {
	const { SignInUserName, SignInPassword } = req.body;
	console.log({SignInUserName, SignInPassword});
	const dataCheck = await UsersSchema.findOne({ UserName: SignInUserName });
	if(dataCheck) {
		return res.status(424).json({ Error: "Already Exist" });
	}
	else{
		const data = await UsersSchema.create({
			"UserName": SignInUserName,
			"Password": SignInPassword
		})
	}
	return res.send({ Success: "Successfully Signup your data" })
})
Router.post('/login', async (req, res) => {
	const { UserName, Password } = req.body;
	console.log({ UserName, Password });
	const data = await UsersSchema.findOne({UserName : UserName});
	if(data) {
		if(data.Password == Password){
			return res.status(200).json({ Success: "Successfully login" })
		}
		else{
			return res.status(424).json({ NotValid: "Password Wrong" })
		}
	}
	else{
		return res.status(424).json({ NotValid: "Not Having Account" })
	}
})


module.exports = Router;