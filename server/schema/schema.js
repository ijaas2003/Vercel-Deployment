const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
	UserName: {
		type: String,
		require: true
	},
	Password: {
		type: String,
		require: true
	}
});


module.exports = mongoose.model('Users', UserData);