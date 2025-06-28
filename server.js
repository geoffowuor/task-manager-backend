const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./Routes/routes');


const app = express();
app.use(express.json());

//mongodb connection
const mongoUri = 'mongodb://localhost:27017/taskmanagerdb';
const PORT = 3000;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB connected'))
    .catch(err=> console.error('MongoDB connection error:', err));


//routes
app.use('/', taskRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});