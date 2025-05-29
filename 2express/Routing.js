//Routing means defining paths and what to do when someone visits them
//same as sending a response
const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    //bas a concept khel raha hai .get .send and .post 
    res.send('Welcome to the home page');

});

app.get('/about', (req, res) => {
    res.send('About us');
});
//strtitng on port 3000

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
});