//Express Setup
const express = require('express');
const app = express();

//MongoDB & Mongoose Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clientTracker', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB")
});

app.use(express.urlencoded({extended: true}));

//Route Handlers
const companies = require('./routes/companies')
app.use('/companies', companies);



app.get('/', (req, res) => {
    res.send("Landing Page")
})

app.listen(3000, function(){
    console.log("Listening on Port 3000");
})