const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Server is running on Port 4000");
})

app.listen(4000, () => {
	console.log("Server is running on port", 4000)
})