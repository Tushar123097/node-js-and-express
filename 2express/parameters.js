const express = require('express');
const app = express();

//route with parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`You request user with ID: ${userId}`);
});
//statrt the server

app.listen (3000, () => {
    console.log('Server is running on port 3000');
})