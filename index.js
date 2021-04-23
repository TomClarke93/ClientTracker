const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Landing Page")
})

app.listen(3000, function(){
    console.log("Listening on Port 3000");
})