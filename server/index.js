const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
	res.send("Server is running on Port 4000");
});
const mongoURI = "mongodb+srv://ijaas:ijaas@cluster0.httu3xq.mongodb.net/"
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
});

app.listen(4000, () => {
	console.log("Server is running on port", 4000)
})