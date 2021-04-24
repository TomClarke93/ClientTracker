//Express Setup
const express = require('express');
const app = express();

//MongoDB & Mongoose Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clientTracker', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB")
});

//Route Handlers
const companies = require('./routes/companies')
app.use('/companies', companies);



app.get('/', (req, res) => {
    res.send("Landing Page")
})

app.listen(3000, function(){
    console.log("Listening on Port 3000");
})