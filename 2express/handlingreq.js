const express = require('express');
const app = express();

//get request for homepage
app.get('/', (req, res) => {
    res.send('welcome to the homepage');
});

//post request for the submit
//post Postman se request bhejenge
app.post('/submit', (req, res) => {
    res.send('Post request received');
});
//yha isase pahle tu inde.js me port 300 run kiya hai lekin usko override kar diya ye
//start the server
app.listen(3000, () => {
    console.log('Server is running on ');
});