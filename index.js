//Express Setup
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

const ejsMate = require('ejs-mate');

//MongoDB & Mongoose Configuration
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clientTracker', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB")
});

//Template Engine Configuration
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

//Route Handlers
const companies = require('./routes/companies')
app.use('/companies', companies);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, function(){
    console.log("Listening on Port 3000");
})