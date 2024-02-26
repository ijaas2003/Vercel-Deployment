const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Router = require('./router/router');
const cors = require('cors')
app.get('/', (req, res) => {
	res.send("Server is running on Port 4000");
	res.send("Welcome")
});
app.use(cors())
app.use(express.json())


app.get('/api/call', (req, res) => {
	res.send("Working under Express Server");
});


const mongoURI = "mongodb+srv://ijaas:ijaas@cluster0.httu3xq.mongodb.net/"
mongoose.connect(mongoURI, { dbName: 'Vercel' })
.then((res) => {
	console.log(res.connection.name);
    console.log('Connected to MongoDB Atlas');
});



app.use(Router)

app.listen(4000, () => {
	console.log("Server is running on port", 4000)
})