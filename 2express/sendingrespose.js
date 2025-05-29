const express = require('express');
const app = express();

//1 send plain text 
app.get('/', (req, res) => {
    res.send('This is a plain text response');
});

//2 send HTML response
app.get('/html', (req, res) => {
    res.send('<h1>THis is a html response</h1>');
});
//3 send JSON response
app.get('/json' , (req, res) => {
    res.json({
        name: 'Tushar',
        role: 'Developet',
    });
});
//4 send status code with error
app.get('/error', (req, res) => {
    res.status(404).send('This is a 404 error response');
});

//starting the server
app.listen(3000, () => {
    console.log('Server is runnign on prt 3000');
});